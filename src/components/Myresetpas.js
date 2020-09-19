import React, { } from 'react'
import {
  CFormGroup,
  CCol,
  CLabel,
  CRow,
  CInput,
  CCard,
  CCardBody,
  CButton
} from '@coreui/react'
//REUSABLE COMPONENT
class Myresetpas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false,
            msg : ""
        };
        this.myData = this.myData.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      myData()
      {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":this.props.id,"newpass":this.state.msg});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://vconlive.the-v.net/moderator/changepassword", requestOptions)
          .then(response => response.text())
          .then(result => alert(result))
          .catch(error => console.log('error', error));
      }
      handleChange(event)
      {
        this.setState({msg: event.target.value});
      }
      componentDidMount() {
      }
      render() {
        return <>
         <CRow>
          <CCol xs="12">
            <CCard>
                <CCardBody>
                    <CFormGroup>
                      <CLabel htmlFor="txtissue">New Password*</CLabel>
                      <CInput id="txtpass" type="text" onChange={this.handleChange} placeholder="Enter New Password"/>
                    </CFormGroup>
                    <CFormGroup>
                      <CRow className="align-items-center">
                          <CCol col="6" sm="6" md="6" xl="6" className="mb-3 mb-xl-0">
                              <CButton block color="info" onClick={this.myData}>Update</CButton>
                          </CCol>
                      </CRow>
                    </CFormGroup>
            </CCardBody>
            </CCard>
          </CCol>
         </CRow>
        </>;
      }
  }


  export default Myresetpas