import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import Mynewcustomer from '../../components/Mynewcustomer.js'
const New_admin = ({match}) => {
  document.title="New Admin";
  return (
    <>
       <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Customer: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <Mynewcustomer />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default New_admin
