
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import ReviewRatingCard from './ReviewRatingCard';
import CarousalCard from './CarousalCard';
import Dresses from '../../../Data/Dresses.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../../Redux/Product/ActionCreator.js';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../Redux/Product/ActionCreator.js';
import { findUserCart } from '../../../Redux/Cart/ActionCreator.js';
import { addUserCart } from '../../../Redux/Cart/ActionCreator.js';
import { api } from '../../../ApiConfig.js';





const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const { product } = useSelector(store => store);
    const location = useLocation();
    const [selectedSize, setSelectedSize] = useState(product.product?.sizes[0])
    const [similarProducts, setSimilarProducts] = useState([]);
    const params = useParams();
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store);
    const { auth } = useSelector(store => store);
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [review, setReview] = useState();





    const id = params.id;





    const URLParams = new URLSearchParams(location.search);
    const thirdLevel = product.product?.category.name;
    const Page_no = URLParams.get("page_no") || 1;



    const fetchData = async () => {
        try {
            const response = await api.get(`/api/product/products?category=${thirdLevel}&colors=&size=&min_discount=0&sort=&stock=in-stock&page_no=0&paage_size=10`);
            setData(response.data.content);



        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const fetchReview = async () => {
        try {
            const response = await api.get(`/api/review/get/${id}`);

            setReview(response.data);



        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {

        const data = {
            id: id,
        }

        dispatch(getProductById(data));
        fetchReview();
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [thirdLevel]);




    const handleCartSubmit = async () => {
        const id = auth.users.id;
        const data = {
            productId: product.product?.id,
            quantity: 1,
            price: product.product?.price,
            size: selectedSize?.name || 'M'
        }
        console.log(data);
        await dispatch(addUserCart(id, data));
    }


    return (
        <div>

            <div className="pt-6">
                <section className='grid sm:grid-cols-1 lg:grid-cols-3 gap-8 '>

                    <div className='flex flex-col items-center'>
                        <div className="overflow-hidden rounded-lg lg:block w-[20rem] h-[25rem] p-5 m-5">
                            <img
                                src={product.product?.image_URL}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>


                    </div>
                    <div className='flex flex-col items-center p-6'>
                        <div className=" lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.product?.title}</h1>
                        </div>
                        <div className="py-10 lg:col-span-2 lg:col-start-1  lg:p-8  ">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.product?.description}</p>
                                </div>
                            </div>




                        </div>


                    </div>

                    <div className='items-center p-10'>
                        <div className="mt-4 lg:row-span-3 lg:mt-0 p-8">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl  lowercase text-grey-900 space-x-3"><span>₹{product.product?.discountedPrice}</span><span className='line-through'>₹{product.product?.price}</span><span className='text-green-500'>{product.product?.discountedPercent}%</span></p>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center ">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-orange-300' : 'text-gray-300',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            <form className="mt-10">



                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-x-2">
                                            {product.product?.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    //disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(

                                                            'cursor-pointer bg-white text-gray-900 shadow-sm',


                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>

                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md'
                                                                )}
                                                                aria-hidden="true"
                                                            />

                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <button
                                    type="button"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={() => handleCartSubmit()}
                                >
                                    Add to bag
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/*Reviews And Ratings*/}
                <div className='flex items-center  m-4'>
                    <div className='m-10 w-full'>
                        <h2 className='text-left text-lg text-black font-semibold'>Ratings And Review</h2>
                        <div className='flex flex-rows m-5 overflow-auto'>
                            {review?.map((item) => (<ReviewRatingCard review={item} id={id} />))}
                        </div>
                    </div>
                </div>



                <div className='m-10'>
                    <h2 className='text-left text-lg font-semibold'>Similar Products</h2>
                    <div className='flex flex-row m-5 overflow-auto'>
                        {data?.slice(0, 5).map((item) => <div><CarousalCard Product={item} /></div>)}</div>
                </div>




            </div>


        </div>
    )
}
