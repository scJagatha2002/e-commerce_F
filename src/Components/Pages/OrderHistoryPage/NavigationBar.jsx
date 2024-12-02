
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from '@mui/material/Avatar';
import { User } from '../../../Redux/Auth/ActionCreator'
import { deepOrange, deepPurple } from '@mui/material/colors';
import './Navigation.css';
import * as React from 'react';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Auth/ActionCreator';
import { api } from '../../../ApiConfig';
import HomeIcon from '@mui/icons-material/Home';


const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: 'http://localhost:3000/product',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: 'http://localhost:3000/product',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Womens-Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Womens-Pants', href: '#' },
            { name: 'Womens-Denim', href: '#' },
            { name: 'Womens-Sweaters', href: '#' },
            { name: 'Womens-Jackets', href: '#' },
            { name: 'Womens-Activewear', href: '#' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Womens-Watches', href: '#' },
            { name: 'Womens-Wallets', href: '#' },
            { name: 'Womens-Bags', href: '#' },
            { name: 'Womens-Sunglasses', href: '#' },
            { name: 'Womens-Hats', href: '#' },
            { name: 'Womens-Belts', href: '#' },
           
          ],
        },
        

      ],
    },
    {
      id: 'Mens',
      name: 'Mens',
      featured: [
        {
          name: 'New Arrivals',
          href: 'http://localhost:3000/product',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: 'http://localhost:3000/product',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens-Shirt', href: '#' },
            { name: 'Mens-Pants', href: '#' },
            { name: 'Mens-Sweaters', href: '#' },
            { name: 'Mens-Jackets', href: '#' },
            { name: 'Mens-Activewear', href: '#' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Mens-Watches', href: '#' },
            { name: 'Mens-Wallets', href: '#' },
            { name: 'Mens-Bags', href: '#' },
            { name: 'Mens-Sunglasses', href: '#' },
            { name: 'Mens-Hats', href: '#' },
            { name: 'Mens-Belts', href: '#' },
            
          ],
        },
      ],
    },
    {
      id: 'kids',
      name: 'kids',
      featured: [
        {
          name: 'New Arrivals',
          href: 'http://localhost:3000/product',
          imageSrc: 'https://m.media-amazon.com/images/I/91gWmETKIJL._UX679_.jpg',
          imageAlt: 'A girl posing by wearing a violet and white floral dress',
        },
        {
          name: 'New Arrivals',
          href: 'http://localhost:3000/product',
          imageSrc: 'https://m.media-amazon.com/images/I/619BKyz94DL._UY879_.jpg',
          imageAlt: 'A boy wearing a Qiddo Sports Halfsleeves Round Neck',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Girls', href: '#' },
            { name: 'Boys', href: '#' },
            { name: 'Infants', href: '#' },
            { name: 'Kids-Activewear', href: '#' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Kids-Watches', href: '#' },
            { name: 'Kids-Footwear', href: '#' },
            { name: 'Kids-Bags', href: '#' },
            
          ],
        },
      ],
    }
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





export default function NavigationBar() {
  const [open, setOpen] = useState(false)
  const { auth } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const fetchData = async () => {
    try {
      const response = await api.get('/api/cart/');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {

    fetchData();
  }, [])

  console.log("ftgyhu", user);

  useEffect(() => {
    if (jwt && !auth.jwt) {
      dispatch(User());
    }
  }, [jwt, auth.jwt]);

  const HandleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  }
  return (
    <div >
      {/* Mobile Mensu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              
                              
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={`http://localhost:3000/product/${category.id}/${section.id}/${item.name}`} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹1000
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">

                <a href="http://localhost:3000/"><HomeIcon /></a>

              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-40">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={`http://localhost:3000/product/${category.id}/${section.id}/${item.name}`} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">

                <SearchBar />




                {/*Avatar*/}

                {auth.users?.firstName ? (
                  <div className="avatar-container">
                    <div className="avatar cursor-pointer">
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {auth.users.firstName.charAt(0)}
                      </Avatar>
                    </div>
                    <div className="options w-24">
                      
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      <a href="http://localhost:3000/orders" className="text-sm font-medium text-gray-700 hover:text-gray-800 w-full">
                        <div>My Orders</div>
                      </a>
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      <a onClick={HandleLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800 w-full cursor-pointer">
                        <div>LogOut</div>
                      </a>
                    </div>
                  </div>
                ) : (
                  <a href="http://localhost:3000/login" className="text-sm font-medium text-gray-700 hover:text-gray-800 w-24">
                    <div>SignIn</div>
                  </a>
                )}








                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href={`http://localhost:3000/cart/${auth.users?.id}`} className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{user?.cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}