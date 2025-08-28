import React from "react";
import CartPage from "./wishlist";
import axios from "axios";
import { cookies } from "next/headers";

const API_URL = `http://localhost:4000/api/auth/`;
const page = async () => {
    const nextCookies = cookies(); // Get cookies object
    const token = (await nextCookies).get('token')?.value
    const getCartItem = async () => {

        const getMe = async () => {
            try {
                const res = await axios.get(`${API_URL}me`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                return res.data;
            } catch (err: any) {
                console.error("Error response:", err);
                return err.response;
            }
        };
        const cart = async () => {
            try {
                let id = await getMe();
                id = id.user.id
                if (!id) return null;

                const res = await axios.get(
                    `http://localhost:4000/api/wishlist/get-one/${id}`
                );
                if (!res.data) {
                    return null;
                }
                return res.data;
            } catch (error) {
                console.error("Error fetching cart item:", error);
                return null;
            }
        };

        return cart();
    };

    const cartItem = await getCartItem();

    return (
        <div>
            <CartPage cart={cartItem?.data.cart || []} />
        </div>
    );
};

export default page;
