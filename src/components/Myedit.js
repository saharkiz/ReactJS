import React, { } from 'react'
import { withRouter } from 'react-router-dom';
import {
  CFormGroup,
  CCol,
  CLabel,
  CRow,
  CInput,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myedit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false
        };
        
      }
      myData()
      {
        this.setState({showLoading: true  });
          fetch(this.props.url)
          .then(response => response.json())
          .then(
            json => this.setState({data: json[0]}),
            this.timeout = setTimeout(() => {
              this.setState({showLoading: false  });
            }, 500)
          )
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myData();
        }, 500);
        
      }
      render() {
        return <>
         <Myloading show={this.state.showLoading}/>
                    {
                      Object.keys(this.state.data).map((key, i) => (
                        <CFormGroup key={i}>
                            <CLabel htmlFor={key}>{key.replace(/([a-z])([A-Z])/g, `$1 $2`).toUpperCase()}</CLabel>
                            <CInput id={key} type="text" placeholder={`Enter your ${key}`} defaultValue={this.state.data[key]} />
                          </CFormGroup>
                      ))
                    }
        </>;
      }
  }


  export default Myedit