import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { api } from "../../ApiConfig";

const ProductDetail = () => {
    const param = useParams();
    const [product,setProduct] = useState();
    const [category,setCategory] = useState();
    const [sizes,setSizes] = useState();

    const fetchData = async () => {
        const id = param.id;
        try {
            const response = await api.get(`/api/product/product/id/${id}`);
            console.log("random", response?.data);
            console.log("cat",response?.data?.category)
            console.log("sizes",response?.data?.sizes)
            setProduct(response?.data);
            setCategory(response?.data?.category)
            setSizes(response?.data?.sizes)
            

        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const sizeS = sizes?.find(size => size.name === 'S');
    const sizeM = sizes?.find(size => size.name === 'M');
    const sizeL = sizes?.find(size => size.name === 'L');

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="border-b border-gray-900/10 p-3 ">
            <h2 className="text-base font-extrabold leading-7 text-gray-900">Product Information</h2>


            <div className="center sm:w-96 mx-auto py-10 w-32">
                    <div><img src={product?.image_URL}></img></div>
                </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 ">

                

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                        Brand
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.brand}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900">
                        Title
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.title}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                        Colour
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.color}
                    </div>
                </div>

                <div className="sm:col-span-6 col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                        Description
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.description}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="discount_price" className="block text-sm font-medium leading-6 text-gray-900">
                        Discount Price
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.discountedPrice}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="discount_percent" className="block text-sm font-medium leading-6 text-gray-900">
                        Discount Percent
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.discountedPercent}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Price
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {product?.price}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="first_level_category" className="block text-sm font-medium leading-6 text-gray-900">
                        First Level Category
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {category?.parentCategory?.parentCategory?.name}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="second_level_category" className="block text-sm font-medium leading-6 text-gray-900">
                        Second Level Category
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {category?.parentCategory?.name}
                    </div>
                </div>

                <div className="sm:col-span-2 col-span-2">
                    <label htmlFor="third_level_category" className="block text-sm font-medium leading-6 text-gray-900">
                        Third Level Category
                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {category?.name}
                    </div>
                </div>

                <p className="block text-sm font-medium leading-6 text-gray-900 col-span-full">
                    Quantity
                </p>

                <div className="sm:col-span-3 col-span-1">
                    <label htmlFor="size-s" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        S
                    </div>
                </div>
                <div className="sm:col-span-3 col-span-1">
                    <label htmlFor="size-s" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {sizeS?.quantity}
                    </div>
                </div>

                <div className="sm:col-span-3 col-span-1">
                    <label htmlFor="size-m" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        M
                    </div>
                </div>
                <div className="sm:col-span-3 col-span-1">
                    <label htmlFor="size-m" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {sizeM?.quantity}
                    </div>
                </div>

                <div className="sm:col-span-3 col-span-1">
                    <label htmlFor="size-l" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        L
                    </div>
                </div>
                <div className="sm:col-span-3 col-span-1">
                    <label htmlFor="size-l" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {sizeL?.quantity}
                    </div>
                </div>



                

            </div>
        </div>
    )
}

export default ProductDetail;