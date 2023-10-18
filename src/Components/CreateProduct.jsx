import React, { useState } from 'react'
import { useCreateProductMutation } from '../Features/Api/postApi';

const CreateProduct = () => {
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [createdProduct, setCreatedProduct] = useState(null);
const [createProduct, {isLoading}] = useCreateProductMutation();

const handleInputTitle = (e) => {
    setTitle(e.target.value);
}
const handleInputPrice = (e) => {
    setPrice(e.target.value);
}
const handleInputQuantity = (e) => {
    setQuantity(e.target.value);
}
const handleForm = async (e) => {
    e.preventDefault();
    try {
        const result = await createProduct({ title, price, quantity }).unwrap();
        setCreatedProduct(result);
        setTitle("");
        setPrice("");
        setQuantity("");
    } catch (error) {
        console.error("Errore creazione Prodotto", error)
    }
}

  return (
    <React.Fragment>
        <div className='offset-0 ms-5 w-50'>
        <h5 className=' mb-3 fw-bold'>Crea un prodotto:</h5>
        <form onSubmit={handleForm} className= 'w-50 d-flex flex-column text-center'>
            {/* TITOLO */}
            <label htmlFor='product-title' className='fw-semibold'>Titolo prodotto: </label>
            <input type='text' id='product-title' 
            value={title}
            onChange={handleInputTitle}
            />
            {/* PREZZO */}
            <label htmlFor='product-price' className='fw-semibold mt-4'>Prezzo prodotto: </label>
            <input type='text' id='product-price' 
            value={price}
            onChange={handleInputPrice}
            />
            {/* QUANTITA */}
            <label htmlFor='product-quantity' className='fw-semibold mt-4'>Quantità prodotto: </label>
            <input type='text' id='product-quantity' 
            value={quantity}
            onChange={handleInputQuantity}
            />
<button className='btn btn-primary mt-4' disabled={isLoading}>Crea prodotto</button>
        </form>
        {createdProduct && 
        <>
        <div className='alert alert-success mt-3 w-50'>Prodotto creato</div>
        <h6 className='text-success'>Prodotto titolo:<span className='text-dark'>           {createdProduct.title}</span></h6>

        <h6 className='text-success'>Prodotto prezzo:<span className='text-dark'> {createdProduct.price}</span></h6>
        <h6 className='text-success'>Prodotto quantità:<span className='text-dark'> {createdProduct.quantity}</span></h6>
        </>
        }
        </div>
   </React.Fragment>
  )
}

export default CreateProduct