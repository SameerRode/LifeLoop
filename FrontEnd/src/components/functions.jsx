import { Link, Outlet } from "react-router-dom";
import {Todo} from "../components/Todo"
import { Cart } from "./Cart";

export function Layout() {
    return (
        <div className="h-screen bg-black text-white flex flex-col">
            <Header />

            <div className="flex-1 flex justify-center items-center p-4">
                <Outlet />
            </div>

            <footer className="text-center p-2 text-gray-500 text-sm">
                footer
            </footer>
        </div>
    );
}

export function Header() {
    return (
        <div className="border-b border-gray-700 bg-sky-500">
            <div className="flex flex-wrap gap-2 p-3 justify-center">

                <Link to="/">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Home
                    </button>
                </Link>

                <Link to="/auth/sign-up">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Sign up
                    </button>
                </Link>

                <Link to="/auth/Sign-in">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Sign in
                    </button>
                </Link>

                <Link to="/shop/Addtocart">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Add
                    </button>
                </Link>

                <Link to="/shop/Cart">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Cart
                    </button>
                </Link>

                <Link to="/task/Createtodo">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Todo
                    </button>
                </Link>

                <Link to="/task/Showtodo">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        Show Todos
                    </button>
                </Link>

            </div>
        </div>
    );
}

export function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-bold mb-4">LifeLoop</h1>

            <p className="text-lg text-gray-400 mb-6 max-w-md">
                Manage your tasks, cart items, and daily activities in one simple place.
            </p>

            <div className="flex gap-4">
                <Link to="/auth/sign-up">
                    <button className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </Link>

                <Link to="/auth/Sign-in">
                    <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
}

export function Signup() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">

            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold">LifeLoop</h1>
                <h3 className="text-lg text-gray-400 mt-1">Sign up</h3>
            </div>

            <div className="w-full max-w-sm space-y-4">

                <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <input
                    type="text"
                    placeholder="Enter Email"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <input
                    type="text"
                    placeholder="Enter Password"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <button className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition">
                    Sign up
                </button>

            </div>
        </div>
    );
}

export function Signin() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">

            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold">LifeLoop</h1>
                <h3 className="text-lg text-gray-400 mt-1">Sign in</h3>
            </div>

            <div className="w-full max-w-sm space-y-4">

                <input
                    type="text"
                    placeholder="Enter Email"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <input
                    type="text"
                    placeholder="Enter Password"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <button className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition">
                    Sign in
                </button>

            </div>
        </div>
    );
}

export function Addtocart() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">

            <h3 className="text-4xl font-bold mb-6">Add To Cart</h3>

            <div className="w-full max-w-sm space-y-4">

                <input
                    type="text"
                    placeholder="Name of product"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <input
                    type="text"
                    placeholder="Enter Price"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <input
                    type="text"
                    placeholder="Created At eg: 12/06/2004"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <button className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition">
                    Add Item
                </button>

            </div>
        </div>
    );
}

export function Createtodo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">

            <h3 className="text-4xl font-bold mb-6">Create Todo</h3>

            <div className="w-full max-w-sm space-y-4">

                <input
                    type="text"
                    placeholder="Enter Todo"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <input
                    type="text"
                    placeholder="Enter Description"
                    className="w-full border border-gray-600 bg-black text-white p-3 rounded focus:outline-none focus:border-white"
                />

                <button className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition">
                    Create Todo
                </button>

            </div>
        </div>
    );
}

export function <Show></Show>Cart() {
    return (
        <div className="flex items-center justify-center min-h-screen text-2xl text-gray-400">
            {Cart}
        </div>
    );
}

export function Showtodo() {
    return (
        <div className="flex items-center justify-center min-h-screen text-2xl text-gray-400">
            {Todo}
        </div>
    );
}