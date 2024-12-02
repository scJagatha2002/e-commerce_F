
import NavigationBar from './NavigationBar.jsx';
import Carousal from './Carousal.jsx';
import ProductListCarousal from './ProductListCarousal';
import Dresses from '../../../Data/Dresses.js'
import MenJeans from '../../../Data/MenJeans.js';
import MenKurta from '../../../Data/MenKurta.js';
import MenShirt from '../../../Data/MenShirt.js';
import WomenJeans from '../../../Data/WomenJeans.js';
import WomenTops from '../../../Data/WomenTops.js';
import Footer from './footer.jsx';
import { useSelector } from 'react-redux';
import { api } from '../../../ApiConfig.js';
import { useState, useEffect } from 'react';


const Home = () => {
  const [Dresses, setDresses] = useState();
  const [WomenTops, setWomenTops] = useState();
  const [MensTops, setMenTops] = useState();
  const [Girls, setGirls] = useState();
  const [Boys, setBoys] = useState();



  const fetchDresses = async () => {
    try {
      const response = await api.get('/api/product/products?category=Dresses&colors=&size=&min_discount=0&sort=&stock=in-stock&page_no=0&paage_size=10');
      setDresses(response.data.content);
      
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchWomenTops = async () => {
    try {
      const response = await api.get('/api/product/products?category=Womens-Tops&colors=&size=&min_discount=0&sort=&stock=in-stock&page_no=0&paage_size=10');
      setWomenTops(response.data.content);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchMenTops = async () => {
    try {
      const response = await api.get('/api/product/products?category=Mens-Shirt&colors=&size=&min_discount=0&sort=&stock=in-stock&page_no=0&paage_size=10');
      setMenTops(response.data.content);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchGirls = async () => {
    try {
      const response = await api.get('/api/product/products?category=Girls&colors=&size=&min_discount=0&sort=&stock=in-stock&page_no=0&paage_size=10');
      setGirls(response.data.content);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchBoys = async () => {
    try {
      const response = await api.get('/api/product/products?category=Boys&colors=&size=&min_discount=0&sort=&stock=in-stock&page_no=0&paage_size=10');
      setBoys(response.data.content);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    fetchGirls();
    fetchBoys();
    fetchMenTops();
    fetchDresses();
    fetchWomenTops();
  }, []);





  return (
    <div className="bg-orange-100" >
      <NavigationBar />
      <Carousal />
      <div className='space-y-10 flex py-20 flex-col px-10'>
        {Dresses && <ProductListCarousal Product={Dresses} SectionName={"DRESSES"}  />}
        {WomenTops && <ProductListCarousal Product={WomenTops} SectionName={"WOMEN_TOPS"} />}
        {MensTops && <ProductListCarousal Product={MensTops} SectionName={"WOMEN_TOPS"} />}
        {Girls && <ProductListCarousal Product={Girls} SectionName={"WOMEN_TOPS"} />}
        {Boys && <ProductListCarousal Product={Boys} SectionName={"WOMEN_TOPS"} />}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
