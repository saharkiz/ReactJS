import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import Mynewemail from '../../components/Mynewemail.js'
const New_email = ({match}) => {
  document.title="New Admin";
  return (
    <>
       <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            
          </CCardHeader>
          <CCardBody>
              <Mynewemail />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default New_email
