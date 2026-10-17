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
 const categories = [...new Set(productsAll.map(product => product.category))];
    const Stocks = ["All","In Stock","Out of Stock"]
    const [Products, setProducts] = useState(productsAll)
    const [status, setStatus] = useState("all");
    const [Search, setSearch] = useState("");
    const [Stock, setStock] = useState(Stocks);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;




    const AllFilter = (SearchValue, ddlvalue,ddlstock) => {

        const ddlstockFilter = productsAll.filter((item) => {
            if (ddlstock === "all") {
                return item;
            } else if (ddlstock === "In Stock") {
                return item.stock > 0;
            } else if (ddlstock === "Out of Stock") {
                return item.stock === 0;
            } else {
                return item.category === ddlvalue;
            }

        });

        const searchFilter = productsAll.filter((item) => {
            return item.name.toLowerCase().includes(SearchValue.toLowerCase());
        });

        const ddlFilter = productsAll.filter((item) => {
            if (ddlvalue === "all") {
                return item && item.name.toLowerCase().includes(SearchValue.toLowerCase()) && ddlstockFilter;
            } else {
                return item.category === ddlvalue;
            }
        });
        
        return searchFilter && ddlstockFilter && ddlFilter;

    }

    const handleDelete = (id) => {
        const updatedProducts = Products.filter((item) => item.id !== id);
        setProducts(updatedProducts);
    }   

    const handleSearch = (e) => {
        debugger;
        const Searchvalue = e.target.value;
        setSearch(Searchvalue)
      setProducts(AllFilter(Searchvalue, status, Stock));
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

                <select className="bg-rose-600 p-2 rounded-2xl " onChange={(e) => setStatus(e.target.value)} name="ddlcatery" id="ddlcategory">
                    <option value="all" >all</option>
                    {categories.map((items) => (
                        <option className=" border border-orange-600 rounded-2xl w-80 p-2 m-3 hover:bg-amber-300" key={items} value={items}>{items}</option>
                    ))}
                </select>

                    <select className="bg-rose-600 p-2 rounded-2xl " onChange={(e) => setStock(e.target.value)} name="ddlcatery" id="ddlcategory">
                    <option value="all" >all</option>
                    {Stock.map((items) => (
                        <option className=" border border-orange-600 rounded-2xl w-80 p-2 m-3 hover:bg-amber-300" key={items} value={items}>{items}</option>
                    ))}
                </select>
                {Products.map((item) => {
                    return <p key={item.id} className="p-2 m-1 bg-amber-900 rounded-md text-white">
                        {item.name}  |
                        <span className="mx-3">{item.category}</span>
                        |<span className="mx-3">{item.price}</span>
                        |<span className="mx-3">{item.stock}</span>

                        |<button
                            className="bg-sky-400 text-white p-2 m-2 w-20 rounded-md"
                            value={item.id}
                            onClick={(e) => handleDelete(item.id)}
                        >[Delete]</button>
                        
                    </p>
                })}
            </div>
        </>
    )
}

export default Q2;