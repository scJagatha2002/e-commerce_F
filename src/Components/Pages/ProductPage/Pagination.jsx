import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
    const location = useLocation(); // Use 'useLocation' without 'new'
    const navigate = useNavigate(); // Use 'useNavigate' without 'new'
    const { product } = useSelector(store => store);
    
    const HandlePagination = (event, value) => {
        const searchParams = new URLSearchParams(location.search);
        console.log("mk",searchParams);
        searchParams.set("page_no", value); // Update the page number parameter
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
    }
    
    
    return (
        <Stack spacing={2}>
            <Pagination count={product.products?.totalPages} onChange={HandlePagination} />
        </Stack>
    );
}



