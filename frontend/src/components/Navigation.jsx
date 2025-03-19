import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="navbar-custom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Pet-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Trang Chủ</Nav.Link>
            <Nav.Link as={Link} to="/products">Sản Phẩm</Nav.Link>
            <Nav.Link as={Link} to="/about">Giới Thiệu</Nav.Link>
            <Nav.Link as={Link} to="/contact">Liên Hệ</Nav.Link>
          </Nav>

          {/* Hiển thị tên người dùng */}
          {user ? (
            <div className="d-flex align-items-center">
              <span className="text-light me-3">👤 {user.name}</span>
              <Button variant="outline-light" onClick={handleLogout}>Đăng xuất</Button>
            </div>
          ) : (
            <div className="d-flex">
              <Link to="/login">
                <Button variant="outline-light" className="me-2">Đăng nhập</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-success">Đăng ký</Button>
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
