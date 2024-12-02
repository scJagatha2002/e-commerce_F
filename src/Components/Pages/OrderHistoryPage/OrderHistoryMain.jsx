import react from 'react';
import NavigationBar from './NavigationBar.jsx';
import Footer from './footer.jsx'
import OrderHistory from './OrderHistory.jsx';
import { useSelector } from 'react-redux';

const OrderHistoryMain = () => {
    
    return(
        <div>
            <NavigationBar/>
            <OrderHistory/>
            <Footer/>
        </div>
    )
}

export default OrderHistoryMain;