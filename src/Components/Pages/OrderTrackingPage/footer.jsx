import { Button } from '@mui/material';
import React from 'react';

const footer = () => {

    return(
        <div className='flex flex-col sm:flex-row justify-around  pt-10 pb-16 bg-gray-700 text-white ' >
            <div className='flex flex-col  text-lg mb-2'>
                <h5 className='font-semibold text-lg mb-2'>COMAPANY</h5>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>About</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Blog</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Job</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Press</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Partners</p></Button></div>
            </div>
            <div className='flex flex-col '>
                <h5 className='font-semibold text-lg mb-2'>SOLUTION</h5>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Marketing</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Analytics</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Commerce</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Insights</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Suport</p></Button></div>
            </div>
            <div className='flex flex-col '>
                <h5 className='font-semibold text-lg mb-2'>DOCUMENTATION</h5>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Guides</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>API Status</p></Button></div>
            </div>
            <div className='flex flex-col '>
                <h5 className='font-semibold text-lg mb-2'>LEGAL</h5>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Claim</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Privacy</p></Button></div>
                <div><Button><p className='font-normal text-sm text-black capitalize text-white hover:text-sky-400'>Terms</p></Button></div>
            </div>
        </div>
    )
}

export default footer;