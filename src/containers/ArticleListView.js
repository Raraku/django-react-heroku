import React from "react";
import Articles from "./../components/Article";
import axios from "axios";
import CustomForm from "./../components/Form";
import { connect } from "react-redux";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${newProps.token}`
      };
      axios.get("api/").then((res) => {
        this.setState({
          articles: res.data
        });
      });
    }
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2 id="form-header">Create an Article</h2>
        <CustomForm
          requestType="post"
          articleID={null}
          btnText="Create"
          reloadCallback={() => this.componentDidChange()}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};
export default connect(mapStateToProps)(ArticleList);
