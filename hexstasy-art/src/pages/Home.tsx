import { Card } from "react-bootstrap";

export function Home() {
  return (
    <Card className='d-flex justify-content-center'>
      <Card.Title>Home</Card.Title>
      <p>
        Welcome to Hexstasy Art, here you will find art pieces made by Candace
        Heckstall. All items are available for purchase. Please sign in to
        purchase a piece of art.
      </p>
    </Card>
  );
}
