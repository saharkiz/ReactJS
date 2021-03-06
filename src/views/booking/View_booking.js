import React, { useState, useRef } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCollapse
} from '@coreui/react'


import { getLogin } from '../../libs/utils.js';
import Mybookingbooking from '../../components/Mybookingkitesurf.js'
import { useHistory } from 'react-router-dom'
const View_booking = ({match}) => {
  const myref = useRef(null);
  const myrefEvent = useRef(null);
  const [msg, setMsg] = useState("");

  const btnrefresh = (e) => {
    e.preventDefault()
    window.location.reload(false);
  }
  const btnwhatsapp = (e) => {
    e.preventDefault()
    window.open( '/api/getBookingWhatsapp.php?id=' + match.params.id
                ,'_blank'
    );
  }

  const btndel = (e) => {
    window.open( '/api/delBooking.php?mdid=' + match.params.id + '&usr=' + getLogin()
        ,'_blank'
    );
  }
  const btnkick = (e) => {
    e.preventDefault()
    window.open( '/#/dashboard'
        ,'_self'
    );
    
  }

  const history = useHistory();
  document.title="View User Booking";
  return (
    <>
    <Mybookingbooking url={`/api/getbooking.php?id=${match.params.id}`} />
    <CRow>
    <CCol lg={12}>
      <CCard>
          <CCardBody>
          <CRow className="align-items-center">
            <h4>{msg}</h4><br/></CRow>
          <CRow className="align-items-center">
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="success" onClick={btnwhatsapp}>Whatsapp</CButton>
            </CCol>
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="info" onClick={btnrefresh}>Refresh</CButton>
            </CCol>
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="danger" onClick={() => {if(window.confirm('Are you sure Delete the item?')){btndel()};}}>Delete</CButton>
            </CCol>
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="warning" onClick={btnkick}>Close</CButton>
            </CCol>
          </CRow>
          <br/>
          <CRow className="align-items-center">
            <CCol col="6" xl className="mb-3 mb-xl-0">
              <CButton block color="success"  onClick={()=>{history.push(`/booking/view_booking/${parseInt(match.params.id) - 1}`);window.location.reload(false);}}>Previous</CButton>
            </CCol>
            <CCol col="6" xl className="mb-3 mb-xl-0">
              <CButton block color="warning" onClick={()=>{history.push(`/booking/view_booking/${parseInt(match.params.id) + 1}`);window.location.reload(false);}}>Next</CButton>
            </CCol>
          </CRow>
          </CCardBody>
        </CCard>
    </CCol>
    </CRow>
    </>
  )
}

export default View_booking
