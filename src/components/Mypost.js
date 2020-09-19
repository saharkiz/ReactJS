import React, { lazy, useState } from 'react'
import {  
  CAlert,
  CLink,CSpinner
} from  '@coreui/react'
//REUSABLE COMPONENT
class Mypost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
      }
      myData()
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"id":"11","name":"Jack Doe"});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://sheet.best/api/sheets/21f15574-2d0c-4d61-854a-6b99c251f0c6", requestOptions)
          .then(response => response.text())
          .then(result => this.setState({data: result }))
          .catch(error => console.log('error', error));
      }
      
      componentDidMount() {
        //wait 1000 miliseconds
        /*this.timeout = setTimeout(() => {
          this.myData();
        }, 1000)*/
      }
      componentWillUnmount() {
        clearTimeout(this.timeout)
      }
      render() {
        return <h2>
          <CSpinner size="lg" variant="grow" />
            Body: {this.state.data}
        </h2>;
      }
  }


  export default Mypost