import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
import "./ProductCarousel.scss";

function ProductCarousel() {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100 sliders"
          src="/images/images13.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-list/category/Laptops">
            <h3>Bestseller in Laptops Category</h3>
          </LinkContainer>
          <p>Apple 2023 MacBook Pro Laptop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliders"
          src="/images/cameras12.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-list/category/Cameras">
            <h3>Bestseller in Cameras Category</h3>
          </LinkContainer>

          <p>
            Canon EOS Rebel T7 18-55mm DC III Kit with Full HD Video Wi-Fi and
            NFC Kit
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliders"
          src="/images/audiobeats.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-list/category/Headphones">
            <h3>Bestseller in Headphones Category</h3>
          </LinkContainer>
          <p>Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
