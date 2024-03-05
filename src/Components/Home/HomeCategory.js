import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "../Category/CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/categorySlice";
import { useEffect } from "react";
import { store } from "redux/store";

const HomeCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryData.category);
  const isLoading = useSelector((state) => state.categoryData.loading);
  const error = useSelector((state) => state.categoryData.error);

  useEffect(() => {
    store.dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {isLoading === false ? (
          category.data ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={undefined}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};
export default HomeCategory;

{
  /* <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" /> */
  // import clothe from "../../images/clothe.png";
  // import cat2 from "../../images/cat2.png";
  // import labtop from "../../images/labtop.png";
  // import sale from "../../images/sale.png";
  // import pic from "../../images/pic.png";
}
