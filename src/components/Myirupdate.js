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
class Myirupdate extends React.Component {
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
        if (this.state.msg !== "")
        {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"newemail":this.state.msg});

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };

            this.setState({showLoading: true  });
              fetch("https://vconlive.the-v.net/moderator/changeemail/"+ this.props.id, requestOptions)
              .then(response => response.text())
              .then(
                    json => 
                    {
                      console.log(json);
                    }
              )
        }
        else
        {
            alert("Please enter New Email");
        }
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
                      <CLabel htmlFor="txtissue">New Email Change *</CLabel>
                      <CInput id="txtemail" type="text" placeholder="Enter New Email Address" onChange={this.handleChange}/>
                    </CFormGroup>
                    <CFormGroup>
                      <CRow className="align-items-center">
                          <CCol col="6" sm="6" md="6" xl="6" className="mb-3 mb-xl-0">
                              <CButton block color="warning"  onClick={this.myData}>Update</CButton>
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


  export default Myirupdate