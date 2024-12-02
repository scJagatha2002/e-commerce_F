
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Home from './Components/Pages/HomePage/Home.jsx';
import Product from './Components/Pages/ProductPage/Product.jsx';
import ProductDetailsPage from './Components/Pages/ProductDetails/ProductDetailsPage';
import CartMain from './Components/Pages/CartPage/CartMain.jsx'
import DeliveryPageMain from './Components/Pages/DeliveryPage/DeliveryPageMain';
import OrderSummaryMain from './Components/Pages/OrderSummaryPage/OrderSummaryMain.jsx';
import OrderHistoryMain from './Components/Pages/OrderHistoryPage/OrderHistoryMain.jsx';
import OrderTrackingMain from './Components/Pages/OrderTrackingPage/OrderTrackingMain.jsx';
import DashboardMMain from './Components_Admin/Dashboard/Main.jsx';




function App() {
  return (
    <div className="App" >
      <Link to="/"></Link>
      <Link to="/product/:levelOne/:levelTwo/:levelThree"></Link>
      <Link to="/productdetails/:id"></Link>
      <Link to="/cart/:id"></Link>
      <Link to='/delivery'></Link>
      <Link to='/summary'></Link>
      <Link to='/orders'></Link>
      <Link to='/track/:orderItemId/:orderId'></Link>
      <Link to='/login'></Link>
      <Link to='/feedback/:id'></Link>
      <Link to='/signup'></Link>
      <Link to='/payments/:orderId'></Link>
      <Link to='/admin'></Link>
      <Link to='admin/productUpdate/:id'></Link>
      <Link to='admin/productDetail/:id'></Link>
      {/*<OrderTrackingMain/>*/}
      <Outlet/>
      
    </div>
  );
}

export default App;
