import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CourseElement() {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
