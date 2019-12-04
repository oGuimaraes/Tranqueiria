import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { bindActionCreators } from "redux";
import { Card as CardBoot, Button, Form } from "react-bootstrap";
import StarRating from "../components/StarRating";

class ProductRating extends Component {
  state = { currentComment: { name: "", email: "", rating: 0, comment: "" } };

  handleChangeInput = event => {
    const { currentComment } = this.state;
    const { name, value } = event.target;

    this.setState({
      currentComment: {
        ...currentComment,
        [name]: value
      }
    });
  };

  handleChangeRating = value => {
    const { currentComment } = this.state;

    this.setState({
      currentComment: {
        ...currentComment,
        rating: value
      }
    });
  };

  handleSubmitForm = event => {
    const { addComment } = this.props;
    const { currentComment } = this.state;
    const { id: productId } = this.props.product;

    event.preventDefault();

    addComment(productId, currentComment);
  };

  showComment(element, index, array) {
    console.log("a[" + index + "] = " + element);
  }

  render() {
    const { comments } = this.props.product;
    const { name, email, rating, comment } = this.state.currentComment;

    const totalRating =
      comments.length != 0
        ? comments.reduce((acc, cur) => acc + cur.rating, 0) / comments.length
        : 0;

    return (
      <CardBoot style={{ width: "56rem" }}>
        <div className="row">
          <div className="col-md-6">
            <CardBoot.Body>
              <CardBoot.Title>Avaliação de Clientes</CardBoot.Title>
              <CardBoot.Text>
                Média de Avaliações: {totalRating.toFixed(2)}
                <StarRating rating={totalRating} changeRatingValue={null} />
              </CardBoot.Text>
              <CardBoot.Title>Comentários</CardBoot.Title>
              <CardBoot className="commentsContainer">
                {comments.map(({ name, comment }, commentKey) => (
                  <div key={commentKey}>
                    <h3>{name}</h3>
                    <p>{comment}</p>
                  </div>
                ))}
              </CardBoot>
            </CardBoot.Body>
          </div>
          <div className="col-md-6">
            <CardBoot.Body>
              <CardBoot.Title>Faça sua Avaliação</CardBoot.Title>
              <Form onSubmit={this.handleSubmitForm}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Insira seu nome"
                  onChange={this.handleChangeInput}
                />
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Insira email"
                  onChange={this.handleChangeInput}
                />
                <Form.Label>Comentário:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="comment"
                  value={comment}
                  placeholder="Insira seu comentário"
                  onChange={this.handleChangeInput}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px"
                  }}
                >
                  <StarRating
                    rating={rating}
                    changeRatingValue={this.handleChangeRating}
                  />
                  <Button variant="primary" type="submit">
                    Avaliar
                  </Button>
                </div>
              </Form>
            </CardBoot.Body>
          </div>
        </div>
      </CardBoot>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductRating);
