import { useState } from "react"
import CreateProduct from "./Components/CreateProduct"
import EditProduct from "./Components/EditProduct"
import Products from "./Components/Products"
import { postApi } from "./Features/Api/postApi"
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react"


function App() {
const [productSelected, setProductSelected] = useState(null);

  return (
    <ApiProvider api={postApi}>
      <div className="d-flex mt-3">
    <CreateProduct />
    <EditProduct product={productSelected} productSelect={setProductSelected} />
    </div>
    <Products productSelect={setProductSelected} />
    </ApiProvider>
  )
}

export default App
