"use client";

import { useState, useEffect } from "react";

interface IDiscount {
    amount: number
    type: 'fixed' | 'percent';
    expiresAt?: string
}
interface IPrice {
    original: number;
    discount: IDiscount;
    currency: "USD" | "IRR"
}

interface ProductFormState {
    category: string;
    name: string;
    description: string;
    createdBy: string;
    price: IPrice;
    images: FileList | null;
    stock: number;
}

interface Category {
    _id: string;
    name: string;
}

const UserForm = () => {
    const [form, setForm] = useState<ProductFormState>({
        category: "",
        stock: 1,
        name: "",
        description: "",
        createdBy: "",
        price: {
            original: 0,
            discount: { amount: 0, type: "fixed" },
            currency: "USD",
        },
        images: null,
    });

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        // Fetch categories
        fetch(`http://localhost:4000/api/category/get-all`)
            .then((res) => res.json())
            .then((data) => setCategories(data.data || []))
            .catch((err) => console.error("Failed to fetch categories", err));

    }, []);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, images: e.target.files }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("category", form.category);
        formData.append("createdBy", "68907a70bb9a64da4136ab8c");
        formData.append("price[original]", String(form.price.original));
        formData.append("price[discount][amount]", String(form.price.discount.amount));
        formData.append("stock", String(form.stock));
        formData.append("price[discount][type]", form.price.discount.type);
        if (form.price.discount.expiresAt) {
            formData.append("price[discount][expiresAt]", form.price.discount.expiresAt);
        }
        formData.append("price[currency]", form.price.currency);

        if (form.images && form.images.length > 0) {
            Array.from(form.images).forEach((file) => {
                formData.append("images", file);
            });
        }

        try {
            console.log("data:", formData.entries())
            const res = await fetch(`http://localhost:4000/api/product`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json();
            console.log("Response:", data);
            alert("Upload successful!");
        } catch (err) {
            console.error(err);
            alert("Upload failed");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 shadow-md rounded-lg"
        >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Create Product</h2>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Description:</label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Category:</label>
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Price (Original):</label>
                <input
                    type="number"
                    name="original"
                    value={form.price.original}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            price: { ...prev.price, original: Number(e.target.value) },
                        }))
                    }
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Discount Amount:</label>
                <input
                    type="number"
                    name="discountAmount"
                    value={form.price.discount.amount}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            price: {
                                ...prev.price,
                                discount: { ...prev.price.discount, amount: Number(e.target.value) },
                            },
                        }))
                    }
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Discount Type:</label>
                <select
                    name="discountType"
                    value={form.price.discount.type}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            price: {
                                ...prev.price,
                                discount: { ...prev.price.discount, type: e.target.value as "fixed" | "percent" },
                            },
                        }))
                    }
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                >
                    <option value="fixed">Fixed</option>
                    <option value="percent">Percent</option>
                </select>
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Discount Expiry:</label>
                <input
                    type="date"
                    name="expiresAt"
                    value={form.price.discount.expiresAt || ""}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            price: {
                                ...prev.price,
                                discount: { ...prev.price.discount, expiresAt: e.target.value },
                            },
                        }))
                    }
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            stock: Number(e.target.value),
                        }))
                    }
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Currency:</label>
                <select
                    name="currency"
                    value={form.price.currency}
                    onChange={(e) =>
                        setForm((prev) => ({
                            ...prev,
                            price: { ...prev.price, currency: e.target.value as "USD" | "IRR" },
                        }))
                    }
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                >
                    <option value="USD">USD</option>
                    <option value="IRR">IRR</option>
                </select>
            </div>

            <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Upload Images:</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition-colors duration-200"
            >
                Submit
            </button>
        </form>
    );
};

export default UserForm;
