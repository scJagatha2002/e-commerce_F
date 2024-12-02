import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Pages/HomePage/Home.jsx';
import Product from './Components/Pages/ProductPage/Product.jsx';
import ProductDetailsPage from './Components/Pages/ProductDetails/ProductDetailsPage';
import CartMain from './Components/Pages/CartPage/CartMain.jsx';
import DeliveryPageMain from './Components/Pages/DeliveryPage/DeliveryPageMain';
import OrderSummaryMain from './Components/Pages/OrderSummaryPage/OrderSummaryMain.jsx';
import OrderHistoryMain from './Components/Pages/OrderHistoryPage/OrderHistoryMain.jsx';
import OrderTrackingMain from './Components/Pages/OrderTrackingPage/OrderTrackingMain.jsx';
import ModelLogin from './Components/Authentication/ModelLogin.jsx';
import ModelSignup from './Components/Authentication/ModelSignUp.jsx';
import PaymentSuccess from './Components/Pages/Payment/PaymentSuccess.jsx';
import { Provider } from 'react-redux';
import store from './Redux/Store.js';
import ModelFeedback from './Components/Pages/Payment/ModelFeedback.jsx'
import Admin from './Components_Admin/Dashboard/Admin.jsx';
import ProductUpdate from './Components_Admin/Dashboard/ProductUpdate.jsx';
import ProductDetail from './Components_Admin/Dashboard/ProductDetail.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='product/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
          <Route path='productdetails/:id' element={<ProductDetailsPage/>}/>
          <Route path='cart/:id' element={<CartMain/>}/>
          <Route path='delivery' element={<DeliveryPageMain/>}/>
          <Route path='summary' element={<OrderSummaryMain/>}/>
          <Route path='orders' element={<OrderHistoryMain/>}/>
          <Route path='track/:orderItemId/:orderId' element={<OrderTrackingMain/>}/>
          <Route path='login' element={<ModelLogin/>}/>
          <Route path='feedback/:id' element={<ModelFeedback/>}/>
          <Route path='signup' element={<ModelSignup/>}/>
          <Route path='payments/:orderId' element={<PaymentSuccess/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='admin/productUpdate/:id' element={<ProductUpdate/>}/>
          <Route path='admin/productDetail/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
