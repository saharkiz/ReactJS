import React, { } from 'react'
import {
  CFormGroup,
  CCol,
  CLabel,
  CBadge
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myir extends React.Component {
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
            json => 
            { 
              if (json.length > 0){
                this.setState({data: json[0]});
              }
              this.timeout = setTimeout(() => {
                this.setState({showLoading: false  });
              }, 500);
              
            }
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
         <CFormGroup row>
            <CCol md="3">
              <CLabel>IR ID</CLabel>
            </CCol>
            <CCol xs="12" md="9">
            <h4><CBadge color="danger">{this.state.data.irid}</CBadge></h4>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Full Name</CLabel>
            </CCol>
            <CCol xs="12" md="9">
            <h3><p className="form-control-static">{this.state.data.irname}</p></h3>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Email</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <p className="form-control-static">{this.state.data.email}</p>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Country</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <p className="form-control-static">{this.state.data.country}</p>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Mobile Contact</CLabel>
            </CCol>
            <CCol xs="12" md="9">
            <CBadge color="info">{this.state.data.contactMobile}</CBadge>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Home Contact</CLabel>
            </CCol>
            <CCol xs="12" md="9">
            <CBadge color="info">{this.state.data.contactHome}</CBadge>
            </CCol>
          </CFormGroup>
        </>;
      }
  }


  export default Myir