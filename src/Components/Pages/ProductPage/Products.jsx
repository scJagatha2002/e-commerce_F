
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from './ProductCard'
import Pagination from './Pagination.jsx'
import Dresses from '../../../Data/Dresses.js';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { getProductByCategory } from '../../../Redux/Product/ActionCreator.js';

import Stack from "@mui/material/Stack";



const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
  {
    id: 'colors',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'black', label: 'Black', checked: false },
    ],
  },
  
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
    ],
  }
]

const Multi = [
  {
    id: 'min_discount',
    name: 'Discount Price',
    options: [
      { value: 10, label: '10% And Above', checked: false },
      { value: 30, label: '30% And Above', checked: false },
      { value: 50, label: '50% And Above', checked: false },
      { value: 70, label: '70% And Above', checked: false },
      { value: 80, label: '80% And Above', checked: false }
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in-stock', label: 'In Stock', checked: false },
      { value: 'not-in-stock', label: 'Not In Stock', checked: false }
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const location = new useLocation();
  const navigate = new useNavigate();
  const dispatch = new useDispatch();
  const params = new useParams();
  const { product } = useSelector(store => store);
  
  
  const URLParams = new URLSearchParams(location.search);
  const Colour = URLParams.get("colors");
  const Size = URLParams.get("size");
  const Discount_price = URLParams.get("min_discount");
  const availability = URLParams.get("stock");
  const Category = params.levelThree;
  const Sort = URLParams.get("sort");
  const Page_no = URLParams.get("page_no") || 1;
  const page_size = URLParams.get("paage_size");
  const originalURL = `http://localhost:3000/product/${params.levelOne}/${params.levelTwo}/${params.levelThree}`;
  console.log("gh",originalURL);

  



  useEffect(() => {
    const data = {
      colors: Colour || [],
      size: Size || [],
      min_discount: Discount_price || 0,
      stock: availability || "in-stock",
      sort: Sort ||"" ,
      paage_no: Page_no - 1,
      page_size: 10,
      category: Category,
    };
    console.log("data",data);
    console.log("ghjkl;",Sort);
    
    dispatch(getProductByCategory(data));
    
  }, [Colour, Size, Discount_price, availability, Sort, Category, availability,Page_no])

  const HandleCheckBoxFilter = (sectionName, value) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionName);
    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      if (filterValue.length === 0) {
        searchParams.delete(sectionName);
        const query = searchParams.toString();
        navigate({ search: `?${query}` })
      }
    }
    else {
      filterValue.push(value);
    }
    if (filterValue.length > 0) {
      searchParams.set(sectionName, filterValue.join(","));
      const query = searchParams.toString();
      navigate({ search: `?${query}` })
    }

  }

  const HandleRadioFilter = (sectionName, e) => {

    const searchParams = new URLSearchParams(location.search);

    searchParams.set(sectionName, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  }

  const HandleSort = (value) => {
    const searchParams = new URLSearchParams(location.search);
    console.log(value);
    searchParams.set("sort", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  }





  return (

    <div className="bg-white">    {/*Start*/}
      <div>
        {/* Mobile filter dialog */}
        
        {/*Contains the elements*/}

        <main className="mx-auto  px-4 sm:px-6 bg-orange-100">

          {/*NEW ARRIVAL*/}

          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center cursor-pointer">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                              onClick={(e) => HandleSort(option.name)}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              
            </div>
          </div>

          {/*PRODUCTS */}
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-6">
              {/* Filters */}
              <form className=" lg:block">
                <div className='space-y-3 '><span className='text-lg uppercase font-extrabold'>Filters</span><span><FilterAltIcon /></span></div>
                <h3 className="sr-only">Categories</h3>





                {/*BUTTONS */}
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6 ">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-orange-100 py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        {/*Filter Options*/}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4 ">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  //defaultValue={option.value}
                                  type="checkbox"
                                  //defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={() => HandleCheckBoxFilter(section.id, option.value)}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {Multi.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-orange-100 py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        {/*Filter Options*/}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  //defaultValue={option.value}
                                  type="radio"
                                  //defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={(e) => { HandleRadioFilter(section.id, e) }}
                                  value={option.value}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="col-span-2 lg:col-span-5">
                <div className='flex flex-wrap'>
                  {product.products?.content?.map((dresses) => <ProductCard Dresses={dresses} />)}
                </div>
              </div>
            </div>
          </section>
          <div className='flex justify-center p-10'>
          <Pagination/>
          </div>
        </main>
      </div>
    </div>
  )
}
