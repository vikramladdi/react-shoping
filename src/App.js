import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/cart/Cart';
import React, { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getproducts();
  }, [])

  const getproducts = async () => {
    const res = await fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': "application/json"
      }
    })

    const products = await res.json();
    setProducts(products.products)
    //console.log(products);
  }

  const handleCart = (item) => {
    console.log(item)
    const isItemInCart = cartItems.find((cartItem) =>  cartItem.id === item.id );

    if (isItemInCart) {
      setCartItems(cartItems.map((cartItem) => 
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem // otherwise, return the cart item
      ))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }

  }

  //Remove items from cart

  const removeFromCart = (item) => {
      console.log(item);

      const isItemInCart = cartItems.find((cartItem)=>cartItem.id ===item.id)

      if(isItemInCart.quantity===1){
          setCartItems(cartItems.filter((cartItem)=>cartItem.id!==item.id))
      }else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
              : cartItem
          )
        );
      }

  }


  return (
    <div>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route exact path='/' element={<Products products={products} handleCart={handleCart} />} />
          <Route exact path='/product/:id' element={<ProductDetail products={products} />} />
          <Route exact path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} handleCart={handleCart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
