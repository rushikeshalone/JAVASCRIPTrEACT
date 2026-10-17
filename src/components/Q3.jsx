import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export const Q3 = () => {
    const [products, setProducts] = useState([]);
    const [Header, setHeader] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [priceFilter, setPriceFilter] = useState("all");
    const [sort, setSort] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);

    const GetData = async () => {

        const Response = await axios.get("https://dummyjson.com/products", {})

        const data = Response.data;
        console.log("Rushi", data.products)
        setProducts(data.products)
        const Header = Object.keys(data.products[0])
        console.log("Header", Header)
        setHeader(Header)
    }

    useEffect(() => {
        GetData();
    }, [])

    return (
        <div>
            <h1 className="bg-amber-600 p-2 text-2xl rounded">Coding Practice</h1>
            <p>This is the solution for Question 3.</p>

            <table>
                <thead className="p-2 m-2 border border-b-cyan-950 rounded border-r-2">
                    <tr className="bg-amber-400 p-2 m-2 border border-b-cyan-950 rounded border-r-2">
                        {Header.map((headerItem) => {
                            return <th key={headerItem} className="p-2 m-2 border border-b-cyan-950 rounded border-r-2">{headerItem}</th>
                        })}
                    </tr>
                </thead>

               <tbody>
    {products.map((items) => {
        return (
            <tr
                key={items.id}
                className="bg-amber-200 border border-b-cyan-950"
            >
                {Header.map((headerItem) => {
                    const value = items[headerItem];

                    return (
                        <td
                            key={headerItem}
                            className="p-2 border border-b-cyan-950"
                        >
                            {typeof value === "object"
                                ? JSON.stringify(value)
                                : value}
                        </td>
                    );
                })}
            </tr>
        );
    })}
</tbody>
            </table>

        </div>
    )
};