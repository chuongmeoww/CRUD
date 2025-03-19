// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({ name: "", price: "", image: "" });
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error("Lỗi lấy sản phẩm:", err));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:3000/api/products/${id}`, product)
//       .then(() => {
//         setMessage("Cập nhật sản phẩm thành công!");
//         setTimeout(() => navigate("/"), 1500);
//       })
//       .catch((err) => console.error("Lỗi cập nhật sản phẩm:", err));
//   };

//   return (
//     <Container className="mt-4">
//       <h2>Cập nhật sản phẩm</h2>
//       {message && <Alert variant="success">{message}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Tên sản phẩm</Form.Label>
//           <Form.Control
//             type="text"
//             value={product.name}
//             onChange={(e) => setProduct({ ...product, name: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Giá</Form.Label>
//           <Form.Control
//             type="number"
//             value={product.price}
//             onChange={(e) => setProduct({ ...product, price: e.target.value })}
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Hình ảnh (URL)</Form.Label>
//           <Form.Control
//             type="text"
//             value={product.image}
//             onChange={(e) => setProduct({ ...product, image: e.target.value })}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">Cập nhật</Button>
//       </Form>
//     </Container>
//   );
// };

// export default EditProduct;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy thông tin sản phẩm ban đầu
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        const { name, price, image } = response.data;
        setName(name);
        setPrice(price);
        setImage(image);
      })
      .catch((error) => console.error("❌ Lỗi lấy sản phẩm:", error));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, {
        name,
        price,
        image,
      });
      navigate("/"); // Quay về trang Home sau khi cập nhật
    } catch (error) {
      console.error("❌ Lỗi khi sửa sản phẩm:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Sửa sản phẩm</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL Ảnh</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Cập nhật</Button>
      </Form>
    </Container>
  );
};

export default EditProduct;
