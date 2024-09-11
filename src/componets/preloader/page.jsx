import React from "react";
import { withRouter } from "react-router-dom";

class PagePreloader extends React.Component {

  componentDidUpdate(prevProps) {

    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
      document.querySelector('.preloader').style = 'display: block';
        setTimeout(() => {
            document.querySelector('.preloader').style = 'display: none';
        }, 900);
    }
  }


  componentWillUnmount() {
      document.querySelector('.preloader').style = 'display: block';
  }

    render() {
    return null;
  }
}

export default withRouter(PagePreloader);
