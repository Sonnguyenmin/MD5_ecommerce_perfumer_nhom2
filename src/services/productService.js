import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, formAxios } from "../api";
import { GET, POST, PUT } from "../constants/httpMethod";




export const listProductByCategory = createAsyncThunk("newProduct", async () => {
  const res = await BASE_URL[GET]("/product/top");
  return res;
})


export const findAllProduct = createAsyncThunk(
  "product/findAll",
  async ({ page, search }) => {
    const res = await BASE_URL[GET](
      `admin/products?page=${page - 1}&search=${search}`
    );
    return res.data.content;
  }
);

export const addProduct = createAsyncThunk("product/add", async (product) => {
  const res = formAxios[POST]("admin/products", product);
  console.log(res);
  return res;
});

export const editProduct = createAsyncThunk(
  "product/edit",
  async ({ id, product }) => {
    const res = formAxios[PUT](`admin/products/${id}`, product);
    console.log(res);
    return res;
  }
);

export const deleteProduct = createAsyncThunk("product/add", async (id) => {
  const res = BASE_URL.delete(`admin/products/${id}`);
  console.log(res);
  return res;
});

// export const addProduct = createAsyncThunk("product/add", async (product) => {
//   const res = formAxios.post("admin/products", product);
//   console.log(res);
//   return res;
// });
