import React from "react";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import { Padding } from "@mui/icons-material";
import Chip from '@mui/material/Chip';
import ChangeStatus from './ChangeStatus.jsx';
import { useEffect, useState } from "react";
import { api } from '../../ApiConfig';
import { useLocation,useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

const Orders = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [orders,setOrders] = useState();

    const URLParams = new URLSearchParams(location.search);
    const Page_no = URLParams.get("page_no") || 1;



    const fetchData = async () => {
        const data = {
            paage_no: Page_no - 1,
        }

        try {
            const response = await api.get(`/api/orders/orderAll?page_no=${data.paage_no}&paage_size=10`);
            setOrders(response?.data);
            console.log("order",response?.data?.content[1]);

        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    },[Page_no,orders]);

    const handleDelete = (id) => {
        const deleteData = async () => {
            
    
            try {
                const response = await api.delete(`/api/admin/orders/${id}/deleteOrder`);
                console.log(response);
    
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        }
        deleteData();
    };

    const HandlePagination = (event, value) => {
        const searchParams = new URLSearchParams(location.search);
        console.log("mk", searchParams);
        searchParams.set("page_no", value); // Update the page number parameter
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
        
    }

    return (
        <>
        
            <div>
            <div className="hidden ad:grid ad:grid-cols-10 ad:gap-x-3  text-white bg-gray-700 ">
                <div className="col-span-2">Items</div>
                <div className="col-span-3">Title</div>
                <div className="col-span-1">Id</div>
                <div className="col-span-1">Price</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">Update</div>
                <div className="col-span-1">Delete</div>
            </div>
            {orders?.content?.map((order) => (
            <div className="grid ad:grid-cols-10 ad:gap-x-3 ad:gap-y-3 pt-3 grid-cols-1 text-white border-white border-4 shadow-xl m-5 bg-gray-700 ">
                <div className=" ad:col-span-2  p-3">
                    <AvatarGroup max={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        {order?.orderList?.map((item) => (
                            
                            <Avatar alt="Remy Sharp" src={item?.product?.image_URL}/>
                            
                        ))}
                        
                        
                    </AvatarGroup>
                </div>
                <div className="ad:col-span-3 p-3">
                    {order?.orderList?.map((item) => (
                        <p>{item?.product?.title}</p>
                    ))}
                </div>
                <div className="col-span-1 inline p-3"><p className="ad:hidden">Order Id = {order.id}</p><p className="hidden ad:inline">{order.id}</p></div>
                <div className="col-span-1 p-3"><p className="ad:hidden">Price = ₹{order.total_Price}</p><p className="hidden ad:inline">₹{order.total_Price}</p></div>
                <div className="col-span-1 p-3"><Chip label={order.orderStatus} color="success" /></div>
                <div className="col-span-1 p-3">
                    <ChangeStatus id={order.id}/>
                </div>
                <div className="col-span-1 p-3">
                    <Button variant="outlined" color="error" onClick={() => handleDelete(order.id)}>Delete</Button>
                </div>
                
            </div>
             ))}
        </div>
       
            
        
       
        

    
    </>

    )

}

export default Orders;
