import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Card } from "antd";
import CustomForm from "../components/Form";
import { Button, Form, Alert } from "react-bootstrap";
class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      show: false
    };
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${newProps.token}`
      };
      const articleID = this.props.match.params.articleID;
      axios.get(`/api/${articleID}/`).then((res) => {
        this.setState({
          article: res.data
        });
      });
    }
  }

  componentDidChange() {
    const articleID = this.props.match.params.articleID;
    axios.get(`/api/${articleID}/`).then((res) => {
      this.setState({
        article: res.data,
        response: ""
      });
    });
  }
  handleDelete = (event) => {
    event.preventDefault();
    if (this.props.token !== null) {
      const articleID = this.props.match.params.articleID;
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
      };
      axios.delete(`/api/${articleID}/`).then(() => {
        this.setState({
          ...this.state,
          article: "Your article has been deleted",
          show: true
        });
        this.props.history.push("/");
      });
    } else {
      //show some message
    }
  };

  render() {
    if (this.state.show === false) {
      return (
        <div>
          <Card title={this.state.article.title}>
            <p>{this.state.article.content}</p>
          </Card>
          <br />
          <CustomForm
            requestType="put"
            btnText="Update"
            articleID={this.props.match.params.articleID}
            reloadCallback={() => this.componentDidChange()}
          />
          <Form onSubmit={this.handleDelete}>
            <Button type="submit" variant="outline-danger">
              Delete
            </Button>
          </Form>
          <br />
        </div>
      );
    } else {
      return (
        <Alert variant="warning" show={this.state.show}>
          Your article has been deleted
        </Alert>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};
export default connect(mapStateToProps)(ArticleDetail);
