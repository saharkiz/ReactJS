import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import Myir from '../../components/Myir.js'
import Myuser from '../../components/Myuser.js'
const View_ticket = ({match}) => {
  document.title="View Ticket Page";
  return (
    <>
       <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            User id: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <Myuser id={match.params.id} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>IR Details
          </CCardHeader>
          <CCardBody>
              <Myir ir={match.params.id}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default View_ticket
