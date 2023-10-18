
import {
  useDeleteProductMutation,
  useGetProductsQuery
} from "../Features/Api/postApi";


const Products = ({ productSelect }) => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
 
  
 

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap();
    } catch (error) {
      console.error("Errore cancellazione", error);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Errore nella richiesta</h1>;
  return (
    <div className="m-3 d-flex flex-wrap justify-content-center">
      <h5 className="m-3 col-11 text-bg-info">Lista Dei Prodotti:</h5>
      {products.map((product) => (
        <div
          key={product.id}
          className="card m-2 w-25 h-25 bg-light p-3"
          style={{ minWidth: "11rem" }}
        >
          <p className=" card-text">
            Titolo: <span className=" fw-semibold">{product.title}</span>
          </p>
          <p className=" card-text">
            Prezzo: <span className=" fw-semibold">{product.price}</span>
          </p>
          <p className=" card-text">
            Quantità: <span className=" fw-semibold">{product.quantity}</span>
          </p>
          <button onClick={()=> productSelect(product)} className="btn btn-warning m-1">
            Modifica
          </button>
          <button
            onClick={() => handleDelete(product.id)}
            className="btn btn-danger m-1"
          >
            Elimina
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
