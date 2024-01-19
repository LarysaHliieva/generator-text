import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import ProductCard from "./components/ProductCard";

import "bootstrap/dist/css/bootstrap.min.css";
// import GeneratorText from "./components/GeneratorText";
import GeneratorText from "./components/GeneratorTextBootstrap";

function App() {
  return (
    <div id="home">
      <Navbar bg="primary" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Мій проєкт</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Головна</Nav.Link>
            <Nav.Link href="#features">Галерея</Nav.Link>
            <Nav.Link href="#pricing">Генератор тексту</Nav.Link>
          </Nav>
          <Nav className="gap-2">
            <Button variant="warning">Реєстрація</Button>
            <Button variant="outline-warning">Вхід</Button>
          </Nav>
        </Container>
      </Navbar>

      <Row id="features" className="gap-5 justify-content-center m-3">
        <ProductCard title="Машинка" info="опис продукта 1" img="mini.jpg" />
        <ProductCard title="Велосипед" info="опис продукта 2" img="bike.png" />
        <ProductCard title="Машинка" info="опис продукта 1" img="mini.jpg" />
        <ProductCard title="Велосипед" info="опис продукта 2" img="bike.png" />
        <ProductCard title="Машинка" info="опис продукта 1" img="mini.jpg" />
        <ProductCard title="Велосипед" info="опис продукта 2" img="bike.png" />
        <ProductCard title="Машинка" info="опис продукта 1" img="mini.jpg" />
        <ProductCard title="Велосипед" info="опис продукта 2" img="bike.png" />
      </Row>

      <div id="pricing" className="generator">
        <GeneratorText />
      </div>
    </div>
  );
}

export default App;
