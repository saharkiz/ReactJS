import React, { } from 'react'
import {
  CFormGroup,
  CCol,
  CLabel,
  CBadge
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myuser extends React.Component {
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
          fetch("https://vregistration.the-v.net/verifyir.aspx?irid="+ this.props.ir)
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
          //this.myData();
        }, 500);
        
      }
      render() {
        return <>
         <Myloading show={this.state.showLoading}/>
         <CFormGroup row>
            <CCol md="3">
              <CLabel>IR ID</CLabel>
            </CCol>
            <CCol xs="12" md="9">
            <h4><CBadge color="danger">{this.state.data.irid}</CBadge></h4>
            </CCol>
          </CFormGroup>
        </>;
      }
  }


  export default Myuser