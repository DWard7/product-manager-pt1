import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    products &&
    products.map((product) => {
      return (
        <div key={product._id} className="d-flex justify-content-center">
          <ul>
            <li>
              <h4>
                <Link to={`/${product._id}`}>{product.title}</Link>
              </h4>
            </li>
          </ul>
        </div>
      );
    })
  );
}

export default ProductList;
