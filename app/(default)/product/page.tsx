import React from "react";
import SectionCard from "@/ui/SectionCard";
import ProductGrid from "@/components/ProductGrid";

async function getProducts() {
  try {
    const res = await fetch(`http://localhost:4000/api/product/get-all`);

    if (!res.ok) {
      console.error("Failed to fetch products:", res.statusText);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const AllProducts = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-[1240px] mx-auto px-4 mt-18 sm:mt-20">
      <SectionCard title="Explore Our Products" category="Our Products">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </SectionCard>
    </div>
  );
};

export default AllProducts;
