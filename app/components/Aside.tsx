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
        <div className=' px-4 hidden md:block md:w-52'>
            <ul className='leading-10 dark:text-foreground w-full'>
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
