import Card from "react-bootstrap/Card";

function Column({ img, title, des }) {
  return (
    <center>
      <Card style={{ width: "18rem", border: "none", padding: "25px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>{des}</Card.Text>
        </Card.Body>
      </Card>
    </center>
  );
}

export default Column;
