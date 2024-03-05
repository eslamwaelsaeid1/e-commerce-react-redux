// import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
// // import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from "../type";

// import useGetData from "d:/R-e-commerce/e-commece-website/src/hooks/useGetData";
// // import { useInsertDataWithImage } from "../../hooks/useInsertData";
// //get all category

// export const getAllCategory = () => async (dispatch) => {
//   try {
//     const response = await useGetData("/api/v1/categories");

//     dispatch({
//       type: GET_ALL_CATEGORY,
//       payload: response,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error " + e,
//     });
//   }
// };

// // //get all category with pagination
// // export const getAllCategoryPage = (page) => async (dispatch) => {
// //     try {
// //         const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
// //         dispatch({
// //             type: GET_ALL_CATEGORY,
// //             payload: response,
// //         })

// //     } catch (e) {
// //         dispatch({
// //             type: GET_ERROR,
// //             payload: "Error " + e,
// //         })
// //     }
// // }

// // //get all category with pagination
// // export const createCategory = (formData) => async (dispatch) => {
// //     try {
// //         const response = await useInsertDataWithImage(`/api/v1/categories`, formData);
// //         dispatch({
// //             type: CREATE_CATEGORY,
// //             payload: response,
// //             loading: true
// //         })

// //     } catch (e) {
// //         dispatch({
// //             type: GET_ERROR,
// //             payload: "Error " + e,
// //         })
// //     }
// // }
