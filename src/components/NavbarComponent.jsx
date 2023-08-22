import React, { useState } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useContext } from 'react';
import { CartContext } from '../createContext';
import CardProduct from './CardProduct';

const NavbarComponent = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url){
        window.location.assign(response.url);
      }
    })
  }

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>Cart {productCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Shopping Cart</Modal.Header>
        <Modal.Body>
          {productCount > 0 ?
            <>
              <p>Items in Your Cart:</p>
              {cart.items.map((currentProduct, id) => (
                <CardProduct key={id} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))}
              <h1>Total : {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant='success' onClick={checkout}>Purchase Items!</Button>
            </>
            : <h1>There is no Items in the Cart</h1>
          }
        </Modal.Body>


      </Modal>

    </>

  )
}

export default NavbarComponent
