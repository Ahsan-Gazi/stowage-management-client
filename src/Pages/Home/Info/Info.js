import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Info.css';

const Info = () => {
  return (
    <div className="mb-5">
      <CardGroup>
        <Card>
          <Card.Body>
            <h2 className=" text-success fw-bold"></h2>
            <p className=" text-secondary">Daily tracked items</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h2 className=" text-success fw-bold"></h2>
            <p className=" text-secondary">Order placed daily</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h2 className=" text-success fw-bold"></h2>
            <p className=" text-secondary">Provided service by us </p>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Info;
