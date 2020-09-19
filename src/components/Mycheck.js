import React from 'react'
//REUSABLE COMPONENT
class Mycheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
      }
      render() {
        /*let eventSource = new EventSource("https://vconlive.the-v.net/live/check");
        
        eventSource.onmessage = e => this.setState({data: e.data});
        eventSource.onerror = function() {
          eventSource.close();
        };*/
        return <>{this.state.data}</>;
      }
  }


  export default Mycheck