import { ICartItem, IWish } from "@/types/type";
import { useQuery, useMutation, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface UserRepositoryInterface {
  getUserCart(userId: string): Promise<ICartItem[]>;
  verifyUser(): Promise<any>;
  logOut(): Promise<any>;
}

interface WishlistRepositoryInterface {
  addToCart(userId: string, order: Pick<IWish, "_id" | "cart">): Promise<any>;
  getWishList(userId: string): Promise<{ data: IWish | null }>;
}

interface ApiFactory {
  createUserRepository(): UserRepositoryInterface;
  createWishlistRepository(): WishlistRepositoryInterface;
}

class UserRepository implements UserRepositoryInterface {
  private readonly apiBaseUrl: string = "http://localhost:4000/api";

  async getUserCart(userId: string): Promise<ICartItem[]> {
    const res = await axios.get(`${this.apiBaseUrl}/user/get-one/${userId}`);
    return res.data.cart;
  }

  async verifyUser(): Promise<any> {
    try {
      const res = await fetch("/api/me?action=verify");
      if (!res.ok || res.status === 401) {
        return null;
      }
      return res.json();
    } catch (error) {
      return null;
    }
  }

  async logOut(): Promise<any> {
    const res = await fetch("/api/me?action=delete", {
      method: "GET",
      credentials: "include",
    });
    if (!res.body) {
      throw new Error("[logout] Error on response data");
    }
    return res.json();
  }
}

class WishlistRepository implements WishlistRepositoryInterface {
  private readonly apiBaseUrl: string = "http://localhost:4000/api";

  async addToCart(userId: string, order: Pick<IWish, "_id" | "cart">): Promise<any> {
    const res = await axios.put(`${this.apiBaseUrl}/wishlist/edit/${userId}`, order);
    return res.data;
  }

  async getWishList(userId: string): Promise<{ data: IWish | null }> {
    const res = await fetch(`${this.apiBaseUrl}/wishlist/get-one/${userId}`);
    if (!res.ok) {
      throw new Error("[cart] Error on response data");
    }
    return res.json();
  }
}

class RestApiFactory implements ApiFactory {
  createUserRepository(): UserRepositoryInterface {
    return new UserRepository();
  }

  createWishlistRepository(): WishlistRepositoryInterface {
    return new WishlistRepository();
  }
}

const apiFactory: ApiFactory = new RestApiFactory();

export function useUserCart(userId: string) {
  const userRepository = apiFactory.createUserRepository();
  return useQuery<ICartItem[]>({
    queryKey: ["cart", userId],
    queryFn: () => userRepository.getUserCart(userId),
  });
}

export function useAddToCart(userId: string) {
  const queryClient = useQueryClient();
  const wishlistRepository = apiFactory.createWishlistRepository();
  return useMutation({
    mutationFn: (order: Pick<IWish, "_id" | "cart">) => wishlistRepository.addToCart(userId, order),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
  });
}

export function useVerifyUser(): UseQueryResult<any, Error> {
  const userRepository = apiFactory.createUserRepository();
  return useQuery({
    queryKey: ["verify"],
    queryFn: () => userRepository.verifyUser(),
  });
}

export function useLogOut() {
  const userRepository = apiFactory.createUserRepository();
  return useMutation({
    mutationFn: () => userRepository.logOut(),
  });
}

export function useWishList(): UseQueryResult<{ data: IWish | null }, Error> {
  const { data: user, isSuccess } = useVerifyUser();
  const wishlistRepository = apiFactory.createWishlistRepository();
  return useQuery({
    queryKey: ["cart", user?.user?.id],
    queryFn: async () => {
      if (isSuccess && user) {
        return wishlistRepository.getWishList(user.user.id);
      }
      return { data: null };
    },
    enabled: isSuccess && !!user,
  });
}