import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
    if (dish !== undefined) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(dish) {
    if (dish !== undefined) {
      const comments = dish.comments.map((comment) => {
        return (
          <li>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          <div>
            <ul className="list-unstyled">{comments}</ul>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-sm-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
