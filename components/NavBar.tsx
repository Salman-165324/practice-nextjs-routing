import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='container mx-auto pt-10 pb-5 flex justify-between border-b-4'>
            <h1 className='px-2'>NextJs E-commerce</h1>
            <ul className='px-2 list-none flex justify-end gap-5'>
                <li>
                    <Link className='pb-1 border-b-2' href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/products"}>Products</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/cart"}>Cart</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/checkout"}>Checkout</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/order/2"}>Order</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/register"}>Register</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link className='pb-1 border-b-2' href={"/search?q=product1"}>Search</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;