import React, { useState, useEffect } from "react";

const App = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productId, setProductId] = useState(null);
    const [products, setProducts] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:2000/display", {
                method: "GET",
                mode: "cors",
            });
            const data = await response.json();
            setProducts(data.Products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const sendData = async (endpoint, method, data) => {
        try {
            const response = await fetch(`http://localhost:2000/${endpoint}`, {
                method,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            });
            await response.json();
            fetchData();
            resetForm();
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    const inputdata = () => {
        const data = {
            ProductName: productName,
            ProductPrice: productPrice,
            ProductDescription: productDescription,
        };
        sendData("AddProduct", "POST", data);
    };

    const sendND = () => {
        const data = {
            _id: productId,
            ProductName: productName,
            ProductPrice: productPrice,
            ProductDescription: productDescription,
        };
        sendData("update", "PUT", data);
    };

    const Updatedata = (index) => {
        const product = products[index];
        setProductId(product._id);
        setProductName(product.ProductName);
        setProductPrice(product.ProductPrice);
        setProductDescription(product.ProductDescription);
        setIsUpdating(true);
    };

    const deleteproducts = (id) => {
        const _id = id;
        sendData("delete", "DELETE", { _id });
    };

    const resetForm = () => {
        setProductName("");
        setProductPrice("");
        setProductDescription("");
        setProductId(null);
        setIsUpdating(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center py-8 px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                Product Management System
            </h1>

            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="ProductName"
                            className="block text-gray-700 font-semibold"
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                            id="ProductName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="ProductPrice"
                            className="block text-gray-700 font-semibold"
                        >
                            Product Price
                        </label>
                        <input
                            type="number"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                            id="ProductPrice"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            placeholder="Enter product price"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="ProductDescription"
                        className="block text-gray-700 font-semibold"
                    >
                        Product Description
                    </label>
                    <textarea
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                        id="ProductDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        placeholder="Enter product description"
                    ></textarea>
                </div>

                <div className="flex space-x-4 mt-4">
                    {isUpdating ? (
                        <button
                            onClick={sendND}
                            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-500"
                        >
                            Update Product
                        </button>
                    ) : (
                        <button
                            onClick={inputdata}
                            className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-500"
                        >
                            Add Product
                        </button>
                    )}
                    <button
                        onClick={resetForm}
                        className="bg-gray-600 text-white rounded-md px-4 py-2 hover:bg-gray-500"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="w-full max-w-4xl mt-10">
                {products.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg font-semibold text-gray-700">
                            No products available
                        </h3>
                        <p className="text-gray-500">
                            Add new products to see them listed here.
                        </p>
                    </div>
                ) : (
                    <table className="w-full bg-white rounded-lg shadow-lg mt-4">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-4 py-3">Index</th>
                                <th className="px-4 py-3">Product Name</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Description</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {products.map((product, index) => (
                                <tr
                                    key={product._id}
                                    className="border-b last:border-0"
                                >
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">
                                        {product.ProductName}
                                    </td>
                                    <td className="px-4 py-3">
                                        {product.ProductPrice}
                                    </td>
                                    <td className="px-4 py-3">
                                        {product.ProductDescription}
                                    </td>
                                    <td className="px-4 py-3 flex justify-center space-x-2">
                                        <button
                                            onClick={() => Updatedata(index)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-400"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() =>
                                                deleteproducts(product._id)
                                            }
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default App;
