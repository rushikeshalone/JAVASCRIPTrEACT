import React, { useState } from "react";

const Q2 = () => {

    const productsAll = [
        { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 12 },
        { id: 2, name: "Mouse", category: "Accessories", price: 1200, stock: 0 },
        { id: 3, name: "Keyboard", category: "Accessories", price: 2500, stock: 8 },
        { id: 4, name: "Monitor", category: "Electronics", price: 18000, stock: 5 },
        { id: 5, name: "Headphone", category: "Audio", price: 3500, stock: 15 },
        { id: 6, name: "Webcam", category: "Accessories", price: 4500, stock: 3 },
        { id: 7, name: "Speaker", category: "Audio", price: 5000, stock: 0 },
        { id: 8, name: "Tablet", category: "Electronics", price: 25000, stock: 7 }
    ];

    const [Products, setProducts] = useState("all")
    const [status, setStatus] = useState("all");
    const [Search, setSearch] = useState("");

    const categories = [...new Set(productsAll.map(product => product.category))];
    const Stocks = ["All","In Stock","Out of Stock"]
    const AllFilter = (SearchValue, ddlvalue) => {

        const ddlFilter = productsAll.filter(item)
        {



        }

    }

    const handleSearch = (e) => {

        const Searchvalue = e.target.value;
        setSearch(Searchvalue)
    }

    return (
        <>
            <h1 className="bg-amber-600 p-2 text-2xl rounded">Coding Practice</h1>
            <div>
                <input type="text"
                    value={Search}
                    onChange={(e) => handleSearch(e)}
                    className="bg-amber-100 border border-orange-600 rounded-2xl w-80 p-2 m-3"
                />

                <select className="bg-rose-600 p-2 rounded-2xl " name="ddlcatery" id="ddlcategory">
                    <option value="all" >all</option>
                    {categories.map((items) => (
                        <option className=" border border-orange-600 rounded-2xl w-80 p-2 m-3 hover:bg-amber-300" key={items} value={items}>{items}</option>
                    ))}
                </select>

                    <select className="bg-rose-600 p-2 rounded-2xl " name="ddlcatery" id="ddlcategory">
                    <option value="all" >all</option>
                    {Stocks.map((items) => (
                        <option className=" border border-orange-600 rounded-2xl w-80 p-2 m-3 hover:bg-amber-300" key={items} value={items}>{items}</option>
                    ))}
                </select>
                {productsAll.map((item) => {
                    return <p key={item.id} className="p-2 m-1 bg-amber-900 rounded-md text-white">
                        {item.name}  |
                        <span className="mx-3">{item.category}</span>
                        |<span className="mx-3">{item.price}</span>
                        |<span className="mx-3">{item.stock}</span>

                        |<button
                            className="bg-sky-400 text-white p-2 m-2 w-20 rounded-md"
                            value={item.id}
                            onClick={(e) => handleDelete(e)}
                        >[Delete]</button>
                        <button
                            className="bg-sky-400 text-white p-2 m-2 w-20 rounded-md"
                            value={item.id}
                            onClick={(e) => handleEdit(e)}
                        >[Edit]</button>
                    </p>
                })}
            </div>
        </>
    )
}

export default Q2;