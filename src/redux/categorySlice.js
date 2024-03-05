// import { createAsyncThunk } from "@reduxjs/toolkit";
// const axios = require("axios");
import useGetData from "hooks/useGetDate";
const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = { category: [], loading: false, error: null };

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData("/api/v1/categories");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.category = action.payload; // Assuming action.payload is an array of categories
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      });
  },
});

export default categorySlice.reducer;

// module.exports = categorySlice.reducer;
module.exports.getAllCategory = getAllCategory;
//-------------------------------------------------------//
// export const { , , } = categorySlice.actions;

// const categorySlice = createSlice({
//   name: "category",
//   initialState,
//   // reducers: {}, //No reducers needed as everything is handled by async thunks
//   extraReducers: {
//     [getAllCategory.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [getAllCategory.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.error = null;
//       state.category = action.payload;
//       // console.log(action.payload);
//     },
//     [getAllCategory.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action?.error?.message; // Access error message directly
//     },
//   },
// });
