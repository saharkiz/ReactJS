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
import { useHistory } from 'react-router-dom'

import Mydiveshop from '../../components/Mydiveshop.js'
const View_shop = ({match}) => {
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
  document.title="View Dive shop";
  return (
    <>
    <CRow>
    <CCol lg={12}>
      <CCard>
          <CCardBody>
              <Mydiveshop url={`https://admin.scubadiving.ae/api/getdiveshop.php?id=${match.params.id}`} />
          </CCardBody>
        </CCard>
    </CCol>
    </CRow>
    </>
  )
}

export default View_shop
