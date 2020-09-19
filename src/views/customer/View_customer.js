import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import Mycustomer from '../../components/Mycustomer.js'
const View_customer = ({match}) => {
  document.title="View Customer";
  return (
    <>
       <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Customer: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <Mycustomer url={`https://admin.scubadiving.ae/api/getuser.php?id=${match.params.id}`} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default View_customer
