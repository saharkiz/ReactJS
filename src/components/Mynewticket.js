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
class Mynewticket extends React.Component {
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
      }
      render() {
        return <>
         <CRow>
          <CCol xs="12">
            <CCard>
                <CCardBody>
                    <CFormGroup>
                      <CLabel htmlFor="txtissue">IR Issue *</CLabel>
                      <CInput id="txtissue" type="text" placeholder="Enter IR Issue"/>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="txtsolution">Solution (Optional)</CLabel>
                      <CInput id="txtsolution" type="text" placeholder="Enter Solution given to IR"/>
                    </CFormGroup>
                    <CFormGroup>
                      <CRow className="align-items-center">
                          <CCol col="6" sm="6" md="6" xl="6" className="mb-3 mb-xl-0">
                              <CButton block color="success">Open Ticket</CButton>
                          </CCol>
                          <CCol col="6" sm="6" md="6" xl="6" className="mb-3 mb-xl-0">
                              <CButton block color="danger">Close Ticket</CButton>
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


  export default Mynewticket