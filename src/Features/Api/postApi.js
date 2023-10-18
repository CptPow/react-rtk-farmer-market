import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'
import Products from '../../Components/Products';

export const postApi = createApi({
reducerPath: "postApi",
baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
endpoints: (builder) => ({
    //TUTTI I PRODOTTI
    getProducts: builder.query ({
        query: () => "products"
    }),
    //PRODOTTO SINGOLO CON ID
    getProduct: builder.query ({
        query: (id) => `products/${id}`
    }),
    //CREO PRODOTTO METODO POST
    createProduct: builder.mutation({
        query: (newProduct) => ({
            url: "products",
            method: "POST",
            body: newProduct
        })
    }),
        //UPDATE PRODOTTO CON PUT E ID
        updateProduct: builder.mutation({
            query: ( {id, updatedProduct} ) => ({
                url: `products/${id}`,
                method: "PUT",
                body: updatedProduct
            })
        }),
        //DELETE PRODUCT CON DELETE
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE"
            })
        })
    })
})
;

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = postApi;