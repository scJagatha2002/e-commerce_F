import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/Auth/ActionCreator';
import { User } from '../../Redux/Auth/ActionCreator'
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store);
    const navigate = useNavigate();


    useEffect(() => {
        if (jwt && !auth.jwt) {
            dispatch(User());
        }
    }, [jwt, auth.jwt]);


    const handleSubmit = async (event) => {

        const data = new FormData(event.currentTarget);
        event.preventDefault();
        const UserData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            role:data.get("roles"),
            mobile:data.get("mobile"),
        }


        try {
            await dispatch(registerUser(UserData));
            navigate(-1); // Navigate back only when registration is successful
        } catch (error) {
            console.log(error);
        }



    }

    const handleSignUp = async () => {
        const cors = require("cors")
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!firstName || !lastName || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }



        /*const axios = require('axios'); // or import axios if you are using ES6 modules

        const fetchData = async (email, jwt) => {
          try {
            const response = await axios.get(`http://localhost:5454/api/users/email/${email}`, {
              headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
              },
            });
        
            const status = response.status;
            console.log(status);
        
            if (status === 202) {
              alert("Email Already used");
            } else {
              navigate(-1);
            }
          } catch (error) {
            // Handle any network or request-related errors here
            console.error('Error:', error);
          }
        };
        
        // Call fetchData with your email and jwt values
        fetchData(email, jwt);*/



    };




    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 w-[20rem] mx-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSubmit}>
                    <div >
                        <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                        <div class="mt-2 basis-1/2">
                            <input id="firstName" name="firstName" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                        <div class="mt-2 basis-1/2">
                            <input id="lastName" name="lastName" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="mobile" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>

                        </div>
                        <div class="mt-2">
                            <input id="mobile" name="mobile" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                    </div>

                    <div className='space-x-5'>
                        <input type="radio" id="option1" name="roles" value="Admin" />
                        <label for="option1">Admin</label>
                        <input type="radio" id="option2" name="roles" value="User" />
                        <label for="option2">User</label>
                    </div>



                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </form>


            </div>
        </div>

    )
}

export default SignUp;