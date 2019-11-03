import React from "react";
import Articles from "./../components/Article";
import axios from "axios";
import CustomForm from "./../components/Form";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        articles: res.data
      });
    });
  }
  componentDidChange() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        articles: res.data
      });
    });
    console.log(this.state.articles);
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
export default ArticleList;
