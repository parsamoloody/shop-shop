"use client";

import { useState } from "react";

interface ICategory {
  name: string;
  description: string;
  images: {
    gallery: string[];
    thumbnail: string;
  };
}

const UserForm = () => {
  const [form, setForm] = useState<ICategory>({
    name: "",
    description: "",
    images: {
      gallery: [],
      thumbnail: "",
    },
  });

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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "gallery" | "thumbnail"
  ) => {
    if (e.target.files) {
      if (type === "gallery") {
        setForm((prev) => ({
          ...prev,
          images: {
            ...prev.images,
            gallery: Array.from(e.target.files as FileList).map((file) => file.name),
          },
        }));
      } else if (type === "thumbnail") {
        setForm((prev) => ({
          ...prev,
          images: {
            ...prev.images,
            thumbnail: (e.target.files as FileList)[0]?.name || "",
          },
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      description: form.description,
      images: form.images,
    };

    try {
      console.log("Sending payload:", payload);

      const res = await fetch(`http://localhost:4000/api/category/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Create Category
      </h2>

      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">
          Description:
        </label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">
          Gallery Images:
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileChange(e, "gallery")}
          className="border p-2 rounded w-full bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 dark:text-gray-300">
          Thumbnail Image:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "thumbnail")}
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
