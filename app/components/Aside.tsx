import Link from 'next/link';
import React from 'react'

const categories = [
    { name: "Woman’s Fashion" },
    { name: "Men’s Fashion" },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" }
];


const Aside = () => {
    return (
        <div className='w-auto border-r hidden lg:block'>
            <ul className='space-y-4'>
                {
                    categories.map((a, i) => (
                        <Link
                        key={i}
                            href={`/category/${a.name}`}
                        >
                            <li>{a.name}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Aside
