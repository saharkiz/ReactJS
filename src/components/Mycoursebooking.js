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
class Mycoursebooking extends React.Component {
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
              fetch("https://admin.scubadiving.ae/api/updatecourse.php?id="+ this.state.data["id"], requestOptions)
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
            Course Booking ID: {this.state.data["id"]}
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
                    <CLabel>BOOKING DATE <span className="badge badge-danger">{this.state.data["bookingDate"]}</span></CLabel>
                    <CInput type="date" placeholder={`Enter your Date`} defaultValue={this.state.data["bookingDate"]} name="bookingDate"  onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
                    <CLabel>SLOT TIME <span className="badge badge-danger">{this.state.data["slotTime"]}</span></CLabel>
                    <CSelect custom defaultValue={this.state.data["slotTime"]} name="slotTime" onChange={this.handleChange}>
                            <option value="">-- Please Select --</option>
                            <option value="9:00am-12:00pm">9:00am-12:00pm</option>
                            <option value="12:00pm-3:00pm">12:00pm-3:00pm</option>
                            <option value="3:00pm-6:00pm">3:00pm-6:00pm</option>
                    </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel>ACTIVITY <span className="badge badge-danger">{this.state.data["activity"]}</span></CLabel>
                <CSelect custom defaultValue={this.state.data["activity"]} name="activity" onChange={this.handleChange}>
                    <option value="">--Please Select--</option>
                    <option value="Promo Try Scuba Diving Tour">Promo Try Scuba Diving Tour - AED 299.00</option>
                    <option value="Luxury Try Scuba Diving Tour">Luxury Try Scuba Diving Tour - AED 450.00</option>
                    <option value="VIP Try Scuba Diving Tour">VIP Try Scuba Diving Tour - AED 550.00</option>
                    <option value="Dive Trip">Dive Trip - AED 700.00</option>
                    <option value="Open Water Course">Open Water Course - AED 1500.00</option>
                    <option value="Advance Open Water Course">Advance Open Water Course - AED 1300.00</option>
                    <option value="Rescue Diver Course">Rescue Diver Course - AED 1800.00</option>
                    <option value="Dive Master Course">Dive Master Course - AED 4500.00</option>
                    <option value="FREEDIVING">FREEDIVING - AED 2500.00</option>
                    <option value="Refresher Course">Refresher Course - AED 450.00</option>
                    <option value="Pool DSD">Pool DSD - AED 99.00</option>
                    <option value="Specialty Course">Specialty Course</option>
                    <option value="Equipment Rental">Equipment Rental</option>
                    <option value="Pool Rental">Pool Rental</option>
                    <option value="Classroom Rental">Classroom Rental</option>
                    <option value="Beach Diving Rental">Beach Diving Rental</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Groupon">Groupon</option>
                </CSelect>
            </CFormGroup>
            <CFormGroup>
                <CLabel>No. Of Divers</CLabel>
                <CInput type="text" placeholder="Number of divers" defaultValue={this.state.data["numberOfDivers"]}  name="numberOfDivers" onChange={this.handleChange}/>
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
              <CLabel>Address</CLabel>
              <CTextarea type="text" placeholder="" defaultValue={this.state.data["address"]}   name="address" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Status <span className="badge badge-danger">{this.state.data["status"]}</span></CLabel>
              <CSelect custom defaultValue={this.state.data["status"]} name="status" onChange={this.handleChange}>
                        <option value="">-- Please Select --</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="New">New</option>
                </CSelect>
            </CFormGroup>
            <CRow className="align-items-center">
                <CCol col="6" xl className="mb-3 mb-xl-0">
                  <CButton block color="success" onClick={this.myUpdate}> Update </CButton>
                </CCol>
                <CCol col="6" xl className="mb-3 mb-xl-0">
                  <CButton block color="info" onClick={this.myData}>Email Confirmation</CButton>
                </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
     
        </>;
      }
  }


  export default Mycoursebooking