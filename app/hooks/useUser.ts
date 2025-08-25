import { IUser } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export function useUser(userId: string) {
  return useQuery<IUser>({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await axios.get(`/api/user/get-one/${userId}`);
      return res.data;
    },
  });
}
