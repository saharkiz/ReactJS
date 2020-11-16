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
import Mynewbooking from '../../components/Mynewkitesurf.js'
import { useHistory } from 'react-router-dom'
const New_booking = ({match}) => {
  const myref = useRef(null);
  const myrefEvent = useRef(null);
  const [msg, setMsg] = useState("");

  const btnrefresh = (e) => {
    e.preventDefault()
    window.location.reload(false);
  }

  const btnkick = (e) => {
    e.preventDefault()
    
  }

  const history = useHistory();
  document.title="New Booking";
  return (
    <>
    <Mynewbooking id={match.params.id}/>
    </>
  )
}

export default New_booking
