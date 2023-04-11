import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./CategoryCard.scss";

const CategoryCard = ({ category, idx }) => {
  return (
    <Card>
      <Card.Img
        className="image "
        crossOrigin="anonymous"
        variant="top"
        src={category.image}
      />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button variant="primary">View all</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
