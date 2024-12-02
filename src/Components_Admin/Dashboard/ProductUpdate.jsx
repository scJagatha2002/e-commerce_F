import React from "react";
import Button from '@mui/material/Button';
import { api } from "../../ApiConfig.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductUpdate = () => {
    const param = useParams();
    const [product,setProduct] = useState();
    const [category,setCategory] = useState();
    const [sizes,setSizes] = useState();
    const navigate = useNavigate();

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

    useEffect(() => {
        fetchData();
    }, []);

    const sizeS = sizes?.find(size => size.name === 'S');
    const sizeM = sizes?.find(size => size.name === 'M');
    const sizeL = sizes?.find(size => size.name === 'L');

    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        event.preventDefault();
        console.log("yess");
        const productData = {
    
            brand: data.get("Brand"),
            title: data.get("Title"),
            image_URL: data.get("Url"),
            colour:data.get("color"),
            discount_price:data.get("discount_price"),
            price:data.get("price"),
            discount_percent:data.get("discount_percent"),
            size: [
              {
                  name: data.get("size-s"),
                  quantity: data.get("size-s-q")
              },
              {
                  name: data.get("size-m"),
                  quantity: data.get("size-m-q")
              },
              {
                  name: data.get("size-l"),
                  quantity: data.get("size-l-q")
              }
            ],
            quantity: parseInt(data.get("size-s-q")) + parseInt(data.get("size-m-q")) + parseInt(data.get("size-l-q")),
            first_level_category:data.get("first_level_category"),
            second_level_category:data.get("second_level_category"),
            third_level_category:data.get("third_level_category"),
            description:data.get("description")
  
          }
          
        const UpdateData = async () => {
            const id = param.id;
            

            

            try {
                const response = await api.put(`/api/admin/product/${id}/updateProduct`,productData);
                console.log(response);
                navigate(-1);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        UpdateData();
        



        
        
      }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12 p-3 bg-orange-100">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-extrabold leading-7 text-gray-900">Product Information</h2>
                    <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="col-span-2">
                            <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                                Brand
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Brand"
                                    id="Brand"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.brand}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="Title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Title"
                                    id="Title"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.title}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                                Colour
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="color"
                                    id="color"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.color}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6 col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.description}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="discount_price" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount Price
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="discount_price"
                                    id="discount_price"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.discountedPrice}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="discount_percent" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount Percent
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="discount_percent"
                                    id="discount_percent"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.discountedPercent}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.price}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="first_level_category" className="block text-sm font-medium leading-6 text-gray-900">
                                First Level Category
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first_level_category"
                                    id="first_level_category"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={category?.parentCategory?.parentCategory?.name}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="second_level_category" className="block text-sm font-medium leading-6 text-gray-900">
                                Second Level Category
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="second_level_category"
                                    id="second_level_category"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={category?.parentCategory?.name}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="third_level_category" className="block text-sm font-medium leading-6 text-gray-900">
                                Third Level Category
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="third_level_category"
                                    id="third_level_category"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={category?.name}
                                />
                            </div>
                        </div>

                        <p className="block text-sm font-medium leading-6 text-gray-900 col-span-full">
                           Quantity
                        </p>

                        <div className="sm:col-span-3 col-span-1">
                            <label htmlFor="size-s" className="block text-sm font-medium leading-6 text-gray-900">
                                
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="size-s"
                                    id="size-s"
                                    value="S"
                                    style={{ paddingLeft: '0.5rem' }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3 col-span-1">
                            <label htmlFor="size-s" className="block text-sm font-medium leading-6 text-gray-900">
                                
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="size-s-q"
                                    id="size-s-q"
                                    placeholder='quantity'
                                    style={{ paddingLeft: '0.5rem' }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={sizeS?.quantity}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 col-span-1">
                            <label htmlFor="size-m" className="block text-sm font-medium leading-6 text-gray-900">
                                
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="size-m"
                                    id="size-m"
                                    value="M"
                                    style={{ paddingLeft: '0.5rem' }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3 col-span-1">
                            <label htmlFor="size-m" className="block text-sm font-medium leading-6 text-gray-900">
                                
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="size-m-q"
                                    id="size-m-q"
                                    placeholder='quantity'
                                    style={{ paddingLeft: '0.5rem' }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={sizeM?.quantity}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 col-span-1">
                            <label htmlFor="size-l" className="block text-sm font-medium leading-6 text-gray-900">
                                
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="size-l"
                                    id="size-l"
                                    value="L"
                                    style={{ paddingLeft: '0.5rem' }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3 col-span-1">
                            <label htmlFor="size-l" className="block text-sm font-medium leading-6 text-gray-900">
                                
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="size-l-q"
                                    id="size-l-q"
                                    placeholder='quantity'
                                    style={{ paddingLeft: '0.5rem' }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={sizeL?.quantity}
                                />
                            </div>
                        </div>

                        

                        <div className="col-span-full">
                            <label htmlFor="Url" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Image URL
                            </label>
                            <div className="mt-2">
                                <input
                                    type="url"
                                    name="Url"
                                    id="Url"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={product?.image_URL}
                                />
                            </div>
                        </div>

                        <div className="sm:col-start-3 sm:col-end-5 col-start-1 col-end-3">
                        <Button variant="contained" color="primary" type="submit">Update</Button>

                        </div>

                    </div>
                </div>

                
            </div>

            
        </form>
    )
}

export default ProductUpdate;