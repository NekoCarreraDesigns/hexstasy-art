import { Card } from "react-bootstrap";
import "./About.css";

export function About() {
  return (
    <Card className='d-flex justify-content-center'>
      <Card.Title>About</Card.Title>
      <p>
        Candace Heckstall is a multimedia artist, travel blogger, podcaster, and
        believer in living life to the fullest. inspired by nature and her
        travels to various places. she uses bold bright colors, and draws deeply
        from the emotions felt from the experiences she has had.
      </p>
      <img
        alt='Candace-holding-a-cat-named-spike'
        src='./images/Candace_with_Spike.jpg'
        className='candace-picture'></img>
    </Card>
  );
}
