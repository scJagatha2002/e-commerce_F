import React, { useEffect } from 'react'
import { loginUser } from '../../Redux/Auth/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../Redux/Auth/ActionCreator'
import { useNavigate  } from 'react-router-dom';
import { api } from '../../ApiConfig';
import { useState } from 'react';


const Login = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (jwt && !auth.jwt) {
      dispatch(User());
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    const UserDate = {

      email: data.get("email"),
      password: data.get("password")
    }
    dispatch(loginUser(UserDate));
  }

  const handleSignIn = () => {
    const requestData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    }
    if (!requestData.email || !requestData.password) {
      alert("Please fill in all required fields.");
      return;
    }
    fetch('http://localhost:5454/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.jwt == null) {
          alert("Wrong Credentials");
        }
        else {
          //navigate(-1);
          fetch(`http://localhost:5454/api/users/email/${requestData.email}` , {
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${jwt}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.role);
            if(data.role === 'Admin' ){
              navigate('/admin'); 
            }
            else{
              navigate('/');
            }
          })
        }
      });


  };

  return (
    <div class="flex min-h-full flex-col justify-center px-10 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" onSubmit={handleSubmit}>
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
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSignIn}>Sign in</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="http://localhost:3000/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</a>
        </p>
      </div>
    </div>

  )
}

export default Login;