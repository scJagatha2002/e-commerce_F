import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import AddProduct from './AddProduct.jsx';
import Products from './Products.jsx';
import ProductDetail from './ProductDetail.jsx';
import Orders from './Orders.jsx';
import Customer from './Customer.jsx';

export default function Navigation() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{minWidth: '350px', minHeight: '1000px', backgroundColor:'white' }}
    >
      <TabList>
        
        <Tab>Products</Tab>
        <Tab>Add Products</Tab>
        <Tab>Customers</Tab>
        <Tab>Orders</Tab>
      </TabList>

      
      <TabPanel value={0}>
        <Products/>
      </TabPanel>

      <TabPanel value={1}>
        <AddProduct />
      </TabPanel>

      <TabPanel value={2}>
        <Customer/>
      </TabPanel>

      <TabPanel value={3}>
        <Orders/>
      </TabPanel>
    </Tabs>
  );
}
