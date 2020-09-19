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
import Mytable from '../../components/Myplaintable.js'
import { useHistory } from 'react-router-dom'
const View_result = ({match}) => {
  

  const fields = ['bookingDate','name','activity'];
  const history = useHistory();
  document.title="View Results";
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Search Results for <h2>{match.params.term}</h2>
          </CCardHeader>
          <CCardBody>
              <Mytable fields={fields} 
                  url={`https://admin.scubadiving.ae/api/result_booking.php?term=${match.params.term}`}
                  detail="booking/view_booking"  history ={history}
                  />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default View_result
