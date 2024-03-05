import { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/categorySlice";

const AllCategoryPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoryData.category);
  const isLoading = useSelector((state) => state.categoryData.loading);
  const error = useSelector((state) => state.categoryData.error);
  console.log(data);
  console.log(isLoading);
  console.log(error);

  useEffect(() => {
    dispatch(getAllCategory("/api/v1/categories"));
  }, [dispatch]);

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
