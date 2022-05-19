import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://powerful-shore-67258.herokuapp.com/products`
      );
      // console.log(data);
      // all products
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useProducts;
