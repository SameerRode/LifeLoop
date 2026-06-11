import { useState, useEffect } from "react";
import axios from "axios";

export function Todo() {
    const [Todo, setTodos ] = useState([]);

        useEffect(() => {
        fetchTodo();
    }, []);

        async function fetchTodo() {
        try {
            const res = await axios.get("http://localhost:5000/api/todo");
            setTodos(res.data);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="w-screen max-w-2xl p-4">
            <h1 className="text-3xl font-bold mb-6"> 
                My Todos
            </h1>
                <div space-y-4>
                    {Todo.map((todo) =>
                    <div
                    key={Todo._id}
                    className="border border-gray-600 p-4 rounded"
                    >
                        <h2 className="text-xl font-semibold">{todo.title}</h2>
                        <p className="text-gray=700">
                            {todo.descri}
                        </p>
                    </div>
                    )} 
                </div>
        </div>

)
}