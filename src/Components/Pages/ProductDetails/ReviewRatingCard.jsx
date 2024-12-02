import React from 'react';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { api } from '../../../ApiConfig';
import { useState,useEffect } from 'react';

const ReviewRatingCard = (props) => {
    console.log(props.review);
    let Rate = 2;

    const fetchRating = async () => {
        try {
          const response = await api.get(`/api/rating/get/${props.id}`);
          
          //console.log(response.data);
          response.data.rating.forEach(item => {
            const rateing = item.rating;
            console.log(rateing);
        });
          
          
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };

      useEffect(() => {
        fetchRating();
      }, [props.id]);
    
    
    return (
        <div className='flex flex-row p-6 text-black'>
            <div class="avatar">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{props.review?.user.firstName.charAt(0)}</Avatar>
            </div>
            <div className='flex flex-col ml-2'>
                <p className='text-left'>{props.review?.user.firstName}</p>
                <p className='text-left'>{props.review?.createdAt && props.review?.createdAt.substring(0, 10)}</p>
                
                <p className='text-left'>"{props.review?.review}"</p>
            </div>
        </div>
    )
}

export default ReviewRatingCard;