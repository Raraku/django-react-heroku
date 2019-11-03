import React, { Component } from "react";
import CustomLayout from "./containers/layout";
import { Container } from "react-bootstrap";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as actions from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <Container>
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
