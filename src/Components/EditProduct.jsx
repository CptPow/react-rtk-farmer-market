import React from "react";
import { useUpdateProductMutation } from "../Features/Api/postApi";
import { useState } from "react";
import { useEffect } from "react";


const EditProduct = ({product, productSelect}) => {
  const [updatedProduct] = useUpdateProductMutation();
  const [editInput, setEditInput] = useState({title: "", price: "", quantity: ""});

  
  useEffect(() => {
    setEditInput(product ? {title: product.title, price: product.price, quantity: product.quantity} : {title: "", price: "", quantity: ""});
  },[product])
  
  const handleEditProductChange = (e) => {
    setEditInput({ ...editInput, [e.target.id]: e.target.value});
  }

  
  const handleEditForm = async (e) => {
    e.preventDefault();
    try {
       await updatedProduct({ id: product.id, ...editInput}).unwrap();
      productSelect(null)
    } catch (error) {
      console.error("Errore modifica prodotto", error)
    }
  }

  return(
    <React.Fragment>
        <div className='w-50'>
        <h5 className=' mb-3 fw-bold'>Modifica un prodotto:</h5>
        <form onSubmit={handleEditForm} className= 'w-50 d-flex flex-column text-center'>
            {/* TITOLO */}
            <label htmlFor='product-title' className='fw-semibold'>Titolo prodotto: </label>
            <input type='text' id='product-title' 
            value={editInput.title}
            onChange={handleEditProductChange}
            />
            {/* PREZZO */}
            <label htmlFor='product-price' className='fw-semibold mt-4'>Prezzo prodotto: </label>
            <input type='text' id='product-price' 
            value={editInput.price}
            onChange={handleEditProductChange}
            />
            {/* QUANTITA */}
            <label htmlFor='product-quantity' className='fw-semibold mt-4'>Quantità prodotto: </label>
            <input type='text' id='product-quantity' 
            value={editInput.quantity}
            onChange={handleEditProductChange}
            />
<button className='btn btn-primary mt-4' type="submit">Modifica prodotto</button>
        </form>
        
        </div>
   </React.Fragment>
  )
  
};

export default EditProduct;
