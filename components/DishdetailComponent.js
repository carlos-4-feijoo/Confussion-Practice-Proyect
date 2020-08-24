import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
    if (dish != null) {
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
    if (dish != null) {
      const comments = dish.comments.map((comment) => {
        var date = new Date(comment.date);
        var monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        var dateFormat =
          monthNames[date.getMonth()] +
          " " +
          date.getDate() +
          "," +
          date.getFullYear();
        return (
          <li>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author}, {dateFormat}
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
      <div className="row">
        <div className="col-12 col-sm-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-sm-5 m-1">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
