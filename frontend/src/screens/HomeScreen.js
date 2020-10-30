import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../../../backend/data/products';

const HomeScreen = () => {
  return (
    <div>
      <h1>Últimos Lançamentos</h1>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
