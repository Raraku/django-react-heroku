import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { connect } from "react-redux";

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    const description = event.target.elements.description.value;
    console.log(title, content, description);
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
    };
    switch (requestType) {
      case "post":
        return axios
          .post("api/", {
            title: title,
            content: content,
            description: description
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      case "put":
        return axios
          .put(`/api/${articleID}/`, {
            title: title,
            content: content,
            description: description
          })
          .then(this.props.callbacktoreload)
          .catch((err) => console.log(err));
      default:
        return "error";
    }
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content" />
          </Form.Item>
          <Form.Item label="Description">
            <Input name="description" placeholder="Description" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};
export default connect(mapStateToProps)(CustomForm);
