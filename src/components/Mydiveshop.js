import React, { } from 'react'
import { withRouter } from 'react-router-dom';
import {
  CFormGroup,
  CCol,
  CLabel,
  CRow,
  CInput,
  CCard,CSelect,
  CCardHeader,CButton,
  CCardBody,CTextarea
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mydiveshop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false,
            txtbooking : "",
            txtslottime : ""
        };
        this.myData = this.myData.bind(this);
        this.myUpdate = this.myUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      myUpdate()
      {
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(this.state.data);

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };

            this.setState({showLoading: true  });
              fetch("https://admin.scubadiving.ae/api/updatediveshop.php?id="+ this.state.data["id"], requestOptions)
              .then(response => response.text())
              .then(
                    json => 
                    {
                      alert(json);
                      this.setState({showLoading: false  });
                    }
              )
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

      handleChange(event)
      {
        this.state.data[event.target.name] = event.target.value;
      }
      render() {
        return <>
         <Myloading show={this.state.showLoading}/>
         <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Shop Rental/Maintenance: {this.state.data["id"]}
          </CCardHeader>
          <CCardBody>
          <CFormGroup>
                    <CLabel>Created On: <span className="badge badge-warning">{this.state.data["createdon"]}</span></CLabel>
            </CFormGroup>
          <CFormGroup>
                    <CLabel>Pickup Date <span className="badge badge-danger">{this.state.data["pickupdate"]}</span></CLabel>
                    <CInput type="date" placeholder={`Enter your Date`} defaultValue={this.state.data["pickupdate"]} name="pickupdate"  onChange={this.handleChange}/>
            </CFormGroup>
          <CFormGroup>
                    <CLabel>Return Date <span className="badge badge-danger">{this.state.data["returndate"]}</span></CLabel>
                    <CInput type="date" placeholder={`Enter your Date`} defaultValue={this.state.data["returndate"]} name="pickupdate"  onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>No. Days</CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["numdays"]}   name="numdays" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Type <span className="badge badge-danger">{this.state.data["type"]}</span></CLabel>
                <CSelect custom defaultValue={this.state.data["type"]} name="type" onChange={this.handleChange}>
                    <option value="">--Please Select--</option>
                    <option value="RENTAL">RENTAL</option>
                    <option value="MAINTENANCE">MAINTENANCE</option>
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Items</CLabel>
              <CTextarea type="text" placeholder="" defaultValue={this.state.data["items"]}   name="items" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Note</CLabel>
              <CTextarea type="text" placeholder="" defaultValue={this.state.data["note"]}   name="note" onChange={this.handleChange}/>
            </CFormGroup>
            </CCardBody>
        </CCard>
     </CCol>
     <CCol lg={6}>
        <CCard>
          <CCardHeader>Customer Details
          </CCardHeader>
          <CCardBody>
          <CFormGroup>
              <CLabel>Name</CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["name"]}   name="name" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Email <a className="badge badge-info" href={`mailto:${this.state.data["email"]}`} target="_blank">{this.state.data["email"]} </a></CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["email"]}   name="email" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Mobile <a className="badge badge-info" href={`tel://${this.state.data["mobile"]}`} target="_blank">{this.state.data["mobile"]} </a></CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["mobile"]}   name="mobile" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>ID No.</CLabel>
              <CTextarea type="text" placeholder="" defaultValue={this.state.data["idno"]}   name="idno" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Status <span className="badge badge-danger">{this.state.data["status"]}</span></CLabel>
              <CSelect custom defaultValue={this.state.data["status"]} name="status" onChange={this.handleChange}>
                        <option value="">-- Please Select --</option>
                        <option value="NORMAL">NORMAL</option>
                        <option value="RUSH">RUSH</option>
                        <option value="SPECIAL">SPECIAL</option>
                        <option value="CLOSED">CLOSED</option>
                </CSelect>
            </CFormGroup>
            <CRow className="align-items-center">
                <CCol col="6" xl className="mb-3 mb-xl-0">
                  <CButton block color="success" onClick={this.myUpdate}> Update </CButton>
                </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
     
        </>;
      }
  }


  export default Mydiveshop