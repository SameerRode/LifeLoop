import { useState, useEffect } from "react";
import axios from "axios";

export function Cart() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        fetchCart();
    }, []);

    async function fetchCart() {
        try {
            const res = await axios.get("http://localhost:5000/api/cart");
            setItems(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function addItem() {
        try {
            await axios.post("http://localhost:5000/api/cart", {
                name,
                price
            });

            setName("");
            setPrice("");

            fetchCart(); // refresh list
        } catch (err) {
            console.log(err);
        }
    }

    return(
    <div>
        <input type="text"
            value={name} 
            placeholder="Enter item"
            onChange={(e) => setName(e.target.value)}
            className="border p-2 text-black bg-white mr-2"
            />


        <input type="text"
            value={price} 
            placeholder="Enter price"
               onChange={(e) => setPrice(e.target.value)}
            className="border p-2 text-black bg-white mr-2"
            />

            <button onClick={addItem} className="bg-white text-black px-3 py-2">
                AddItem
            </button>

            <div className="mt-4">
                {items.map((item, index) => (
                    <div key={index} className="border p-2 mt-2">
                        {item.name} - ₹{item.price}
                    </div>
                ))}
            </div>
    </div>
)

}
