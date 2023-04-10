import React, { useState } from 'react';
import firebase from '../Config/firebase';
import { Button } from 'react-bootstrap';

function AddToCart(props) {
  const [cart, setCart] = useState({});

  const handleAddToCart = async (product) => {
    const userId = firebase.auth().currentUser.uid;
    const cartRef = firebase.db.collection('carts').doc(userId);
    const cartSnapshot = await cartRef.get();
    const cartData = cartSnapshot.data();

    
    if (cartData) {
      cartRef.update({
        products: [...cartData.products, product],
      });
    } else {
      
      cartRef.set({
        userId,
        products: [product],
      });
    }

    setCart({
      ...cart,
      products: [...cart.products, product],
    });
  };

  return (
    <Button onClick={() => handleAddToCart(props.product)}>
      Add to Cart
    </Button>
  );
}

export default AddToCart;

