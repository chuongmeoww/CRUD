



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Card, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const [pets, setPets] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/products?t=${new Date().getTime()}`)
//       .then(response => setPets(response.data))
//       .catch(error => console.error("❌ Lỗi API:", error));
//   }, []);

//   const deleteProduct = (id) => {
//     axios.delete(`http://localhost:3000/api/products/${id}`)
//       .then(() => setPets(pets.filter(pet => pet._id !== id)))
//       .catch(err => console.error("Lỗi xóa sản phẩm:", err));
//   };

//   return (
//     <Container>
//       <h2 className="text-center my-4">Danh sách thú cưng</h2>
//       <Link to="/add-product">
//         <Button variant="success" className="mb-3">Thêm sản phẩm</Button>
//       </Link>

//       <div className="d-flex flex-wrap justify-content-center">
//         {pets.length === 0 ? (
//           <p className="text-center">Không có sản phẩm nào!</p>
//         ) : (
//           pets.map((pet) => (
//             <Card key={pet._id} className="m-2" style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={pet.image || "https://via.placeholder.com/300"} />
//               <Card.Body>
//                 <Card.Title>{pet.name}</Card.Title>
//                 <Card.Text>Giá: {pet.price.toLocaleString()} VNĐ</Card.Text>

//                 {/* Nút Sửa */}
//                 <Button
//                   variant="warning"
//                   className="me-2"
//                   onClick={() => navigate(`/edit-product/${pet._id}`)}
//                 >
//                   Sửa
//                 </Button>

//                 {/* Nút Xóa */}
//                 <Button variant="danger" onClick={() => deleteProduct(pet._id)}>
//                   Xóa
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Home;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Card, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const [pets, setPets] = useState([]);
//   const [user, setUser] = useState(null); // 👈 Thêm state để lưu user
//   const navigate = useNavigate();

//   // Lấy thông tin user từ localStorage
//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/products?t=${new Date().getTime()}`)
//       .then(response => setPets(response.data))
//       .catch(error => console.error("❌ Lỗi API:", error));
//   }, []);

//   const deleteProduct = (id) => {
//     axios.delete(`http://localhost:3000/api/products/${id}`)
//       .then(() => setPets(pets.filter(pet => pet._id !== id)))
//       .catch(err => console.error("Lỗi xóa sản phẩm:", err));
//   };

//   // Đăng xuất
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     alert("Đã đăng xuất!");
//     navigate("/");
//   };

//   return (
//     <Container>
//       <h2 className="text-center my-4">🐾 Danh sách thú cưng 🐾</h2>

//       {/* Hiển thị tên người dùng */}
//       {user ? (
//         <div className="user-info">
//           <p>Xin chào, <b>{user.name}</b>!</p>
//           <Button variant="danger" onClick={handleLogout}>Đăng xuất</Button>
//         </div>
//       ) : (
//         <div className="auth-buttons">
//           <Link to="/login">
//             <Button variant="primary" className="me-2">Đăng nhập</Button>
//           </Link>
//           <Link to="/register">
//             <Button variant="success">Đăng ký</Button>
//           </Link>
//         </div>
//       )}

//       <Link to="/add-product">
//         <Button variant="success" className="mb-3">+ Thêm sản phẩm</Button>
//       </Link>

//       <div className="d-flex flex-wrap justify-content-center">
//         {pets.length === 0 ? (
//           <p className="text-center">Không có sản phẩm nào!</p>
//         ) : (
//           pets.map((pet) => (
//             <Card key={pet._id} className="m-2" style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={pet.image || "https://via.placeholder.com/300"} />
//               <Card.Body>
//                 <Card.Title>{pet.name}</Card.Title>
//                 <Card.Text>Giá: {pet.price.toLocaleString()} VNĐ</Card.Text>
//                 <Button variant="warning" className="me-2" onClick={() => navigate(`/edit-product/${pet._id}`)}>
//                   Sửa
//                 </Button>
//                 <Button variant="danger" onClick={() => deleteProduct(pet._id)}>
//                   Xóa
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Home;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation"; // ✅ Sử dụng Navbar

const Home = () => {
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Lấy thông tin user từ localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products?t=${new Date().getTime()}`)
      .then(response => setPets(response.data))
      .catch(error => console.error("❌ Lỗi API:", error));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/api/products/${id}`)
      .then(() => setPets(pets.filter(pet => pet._id !== id)))
      .catch(err => console.error("Lỗi xóa sản phẩm:", err));
  };

  // Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    alert("Đã đăng xuất!");
    navigate("/");
  };

  return (
    <>
      <Navigation user={user} handleLogout={handleLogout} />
      <Container className="my-4">
        <h2 className="text-center mb-4">Danh sách sản phẩm</h2>

        <Link to="/add-product">
          <Button variant="success" className="mb-3">+ Thêm sản phẩm</Button>
        </Link>

        <div className="d-flex flex-wrap justify-content-center">
          {pets.length === 0 ? (
            <p className="text-center">Không có sản phẩm nào!</p>
          ) : (
            pets.map((pet) => (
              <Card key={pet._id} className="m-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pet.image || "https://via.placeholder.com/300"} />
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>Giá: {pet.price.toLocaleString()} VNĐ</Card.Text>
                  <Button variant="warning" className="me-2" onClick={() => navigate(`/edit-product/${pet._id}`)}>
                    Sửa
                  </Button>
                  <Button variant="danger" onClick={() => deleteProduct(pet._id)}>
                    Xóa
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
