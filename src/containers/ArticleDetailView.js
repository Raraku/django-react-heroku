import React from "react";
import axios from "axios";
import { Card } from "antd";
import CustomForm from "../components/Form";
import { Button, Form, Alert } from "react-bootstrap";
import { production_url } from "./../production_url";
class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      show: false
    };
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`${production_url}/api/${articleID}`).then((res) => {
      this.setState({
        article: res.data
      });
    });
  }
  componentDidChange() {
    const articleID = this.props.match.params.articleID;
    axios.get(`${production_url}/api/${articleID}`).then((res) => {
      this.setState({
        article: res.data,
        response: ""
      });
    });
  }
  handleDelete = (event) => {
    event.preventDefault();
    const articleID = this.props.match.params.articleID;
    axios.delete(`${production_url}/api/${articleID}`).then(() => {
      this.setState({
        ...this.state,
        article: "Your article has been deleted",
        show: true
      });
      this.props.history.push("/");
    });
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

export default ArticleDetail;
