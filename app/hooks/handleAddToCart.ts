// app/hooks/useHandleAddToCart.ts
import { useAddToCart, useVerifyUser } from "./user/userOrder"

const useHandleAddToCart = () => {
  const { data: userAuthData, isSuccess: isAuth } = useVerifyUser()

  // always pass userId (can be undefined)
  const addToCartMutation = useAddToCart(userAuthData?.user?.id || "")

  const handleAddToCart = async (
    productId: string,
    count: number
  ): Promise<{ auth: boolean; inCart: boolean }> => {
    if (!isAuth || !userAuthData?.user?.id) {
      return { auth: false, inCart: false }
    }

    try {
      await addToCartMutation.mutateAsync({
        _id: userAuthData.user.id,
        cart: [{ product: productId, quantity: count }],
      })
      return { auth: true, inCart: true }
    } catch (err) {
      console.error(err)
      return { auth: true, inCart: false }
    }
  }

  return handleAddToCart
}
export default useHandleAddToCart