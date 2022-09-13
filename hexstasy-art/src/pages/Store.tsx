import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={3} xs={2} lg={4} className='g-4'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
