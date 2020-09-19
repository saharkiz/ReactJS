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
import Mynewitem from '../../components/Mynewitem.js'
import { useHistory } from 'react-router-dom'
const New_item = ({match}) => {
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
  document.title="New Rental/Maintenance";
  return (
    <>
    <Mynewitem id={match.params.id}/>
    </>
  )
}

export default New_item
