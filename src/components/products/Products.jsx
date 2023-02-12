import "./Product.scss";
import { useOutletContext } from "react-router-dom";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

function Products() {
  const data = useOutletContext();

  return (
    <div className="containerProduct">
      <div className="sales">
        <div className="textSales">
          <p>SALES%</p>
          <p>Special Week Offer</p>
        </div>
        <div className="imgSales">
          {/* {data.data && <img src={data?.data[2].picture} />} */}
        </div>
      </div>
      <h1>Our Products</h1>
      <div className="products">
        {data?.data.map((el, _id) => (
          <div key={el._id} className="cardProducts">
            <img src={el.picture} />
            <h2>Title: {el.title}</h2>
            <h3> Artist: {el.artist}</h3>
            <h4> Year: {el.year}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
