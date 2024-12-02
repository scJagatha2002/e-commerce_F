import react from "react";

import Button from '@mui/material/Button';
import ProductDetails from './ProductDetail.jsx';
import { api } from "../../ApiConfig.js";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";






const Products = () => {

    const [product, setProduuct] = useState();
    const location = useLocation(); 
    const navigate = useNavigate(); 


    const URLParams = new URLSearchParams(location.search);
    const Page_no = URLParams.get("page_no") || 1;


    const fetchData = async () => {
        const data = {
            paage_no: Page_no - 1,
        }
        try {
            let response = await api.get(`/api/product/productAll?page_no=${data.paage_no}&paage_size=10`);

            setProduuct(response?.data);

        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        fetchData();

    }, [Page_no, product]);

    const HandlePagination = (event, value) => {
        const searchParams = new URLSearchParams(location.search);
        console.log("mk", searchParams);
        searchParams.set("page_no", value); // Update the page number parameter
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
        //href={`http://localhost:3000/admin/productDetail/${item?.id}`}>
    }

    const DeleteData = async (id) => {
        console.log("gyrhujwio");

        try {
            console.log('enter')
            const response = await api.delete(`/api/admin/product/${id}/deleteProduct`);
            console.log(response);

        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const handleDelete = (id) => {

        DeleteData(id);
    }



    return (
        <>
            {product?.content?.map((item) => (
                <div className="border-2 flex cm:flex-row flex-col cm:h-auto cm:w-auto cm:justify-between items-center  shadow-lg bg-gray-700  w-[230px] h-[480px] my-5">
                    <div className="cm:w-24 cm:h-28 my-3 cm:mx-10 mx-auto w-[120px] h-[150px]">
                        <img
                            src={item.image_URL}
                            className="object-cover object-center w-full h-full"
                            alt="Product Image"
                        />
                    </div>
                    <div className="mx-10 my-2 cm:w-[34rem] text-white w-[230px]">
                        <p className="p-1">{item.brand}</p>
                        <p className="p-1">{item.title}</p>
                        <p className="p-1">ID:{item.id}</p>
                    </div>
                    <div className="w-32 m-2">
                        <a href={`http://localhost:3000/admin/productDetail/${item?.id}`}>
                            <Button variant="contained" color="success">
                                View
                            </Button>
                        </a>
                    </div>
                    <div className="w-32 m-2">
                        <a href={`http://localhost:3000/admin/productUpdate/${item?.id}`}>
                            <Button variant="contained" color="primary">
                                Update
                            </Button>
                        </a>
                    </div>
                    <div className="w-32 m-2">
                        <Button variant="contained" color="error" onClick={() => handleDelete(item?.id)}>
                            Delete
                        </Button>
                    </div>
                </div>
            ))}
            <div className='flex justify-center p-10'>
                <Stack spacing={2}>
                    <Pagination count={product?.totalPages} onChange={HandlePagination} />
                </Stack>

            </div>
        </>
    );

}

export default Products;

