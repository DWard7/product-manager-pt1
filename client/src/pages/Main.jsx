import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../components/Form";

function Main() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/", { signal: controller.signal })
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2>Product Manager</h2>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Main;
