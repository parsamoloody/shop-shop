import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:4000/api/auth/"

export const signup = async (data: { email: string; name: string, password: string }) => {
    try {
        console.log("data", data)
        const res = await axios.post(`${API_URL}signup`, data)
        return res
    } catch (err: any) {
        if (err.response) {
            console.log("Error response:", err.response);
            return err.response;
        } else {
            throw err;
        }
    }
}

// export const login = async (data: { email: string; name: string; password: string }) => {
//     try {
//         const res = await axios.post(`${API_URL}login`, data)
//         // localStorage.setItem('token', res.data.token)
//         const token: string = res.data.token
//            if (res.status === 200){
//             await setRegisterKooke(token)
//         }
//         console.log(res)
//         return res
//     }
//     catch (err: any) {
//         if (err.response) {
//             console.log("Error response:", err.response);
//             return err.response;
//         } else {
//             throw err;
//         }
//     }
// }

export const getMe = async (token: string): Promise<AxiosResponse<{ id: string, email: string, role: string, name: string}, any>> => {
    try {
        const res = await axios.get(`${API_URL}me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return res

    } catch (err: any) {
        if (err) {
            console.log("Error response:", err);
            return err;
        } else {
            throw err;
        }
    }
}