import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/products", {
        name,
        price,
        image,
      });
      console.log("✅ Sản phẩm đã thêm:", response.data);
      navigate("/"); // Quay lại trang Home sau khi thêm sản phẩm
    } catch (error) {
      console.error("❌ Lỗi khi thêm sản phẩm:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Thêm sản phẩm mới</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL Ảnh</Form.Label>
          <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">Thêm sản phẩm</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
