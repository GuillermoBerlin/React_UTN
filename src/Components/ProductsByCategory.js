import React, { useState, useEffect } from 'react';
import firebase from '../Config/firebase';
import Producto from "./Producto"

import Loading from "./Loading";
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';


function ProductsByCategory() {
  const [category, setCategory] = useState('desks');
  const [products, setProducts] = useState([]);
  const [loading, setLoading]=useState(true)
  


  useEffect(() => {
    const getProductsByCategory = async () => {
      const categoryRef = firebase.firestore().collection('categories').doc(category);
      const querySnapshot = await firebase.firestore().collection('productos')
        .where('category', '==', categoryRef)
        .get();
      const products = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
      setProducts(products);
      setLoading(false)
      
    };
    getProductsByCategory();
  }, [category]);

  return (
    <>
      
      <Row className="justify-content-center">
      <ButtonGroup>
      <Button variant="outline-secondary" onClick={() => setCategory('desks')}>Desks</Button>
      <Button variant="outline-secondary" onClick={() => setCategory('tables')}>Tables</Button>
      <Button variant="outline-secondary" onClick={() => setCategory('chairs')}>Chairs</Button>
      </ButtonGroup>
      </Row>
      
      

      <Loading loading={loading}>
                <div>                            
                    <Row>
                    {products.map(listadoProducto=><Producto 
                        key={listadoProducto.id} 
                        nombre= {listadoProducto.name} 
                        precio={listadoProducto.price} 
                        id={listadoProducto.id} 
                        thumbnail={listadoProducto.thumbnail}
                        thumbnail2={listadoProducto.thumbnail2}  
                        descripcion={listadoProducto.description}
                        descripcionLarga={listadoProducto.descriptionLong}
                        
                    />)}
                    </Row>                 
                </div> 
      </Loading>              
    </>
  );
}

export default ProductsByCategory;
