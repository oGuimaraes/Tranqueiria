import React, { Component } from "react";
import { connect } from "react-redux";
import { Card as CardBoot, Button, Form } from "react-bootstrap";
import StarRating from "../components/StarRating";

export default class ProductRating extends Component {
  render() {
    const { comments } = this.props.product;
    return (
      <CardBoot style={{ width: "56rem" }}>
        <div className="row">
          <div className="col-md-6">
            <CardBoot.Body>
              <CardBoot.Title>Avaliação de Clientes</CardBoot.Title>
              <CardBoot.Text>{comments}</CardBoot.Text>
            </CardBoot.Body>
          </div>
          <div className="col-md-6">
            <CardBoot.Body>
              <CardBoot.Title>Faça sua Avaliação</CardBoot.Title>
              <Form>
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="name" placeholder="Insira seu nome" />
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Insira email" />
                <StarRating />
                <Button variant="primary" type="submit">
                  Avaliar
                </Button>
              </Form>
            </CardBoot.Body>
          </div>
        </div>
      </CardBoot>
    );
  }
}
