import React, { Component } from 'react';

class Fetcher extends Component {
  state = {
    fetching: false,
    data: []
  };

  componentDidMount = () => {
    const { url } = this.props;
    this.setState({ fetching: true });
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }/*,
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })*/
    })
    .then(res => res.json())
    .then(
      (result)=>{
        //console.log(result);
        this.setState({
                    fetching: false,
                    data: result
                  });
      },
        (error) => {
          this.setState({
            fetching: false,
            error
          });
        }
    )
  };

  render = () => {
    const { props } = this;
    return React.cloneElement(props.children, this.state);
  };
}

export default Fetcher;
