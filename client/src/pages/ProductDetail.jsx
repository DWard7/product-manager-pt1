import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/product/${id}`, { signal: controller.signal })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h3>Product Details:</h3>
      {product && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Description: {product.description}</p>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-end">
        <p>
          <Link to={"/"}>Home</Link>
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
