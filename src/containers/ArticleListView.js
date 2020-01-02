import React from "react";
import Articles from "./../components/Article";
import axios from "axios";
import CustomForm from "./../components/Form";
import { connect } from "react-redux";
import suspensefallback from "./Bean.svg";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get("api/")
      .then((res) => {
        this.setState({
          articles: res.data
        });
      })
      .then(this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="suspense">
            <img src={suspensefallback} alt="Articles are loading" />
            <br />
            <h3 style={{ position: "relative", left: "-15px" }}>loading...</h3>
          </div>
        ) : (
          <Articles data={this.state.articles} />
        )}
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
