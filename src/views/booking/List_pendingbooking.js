import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import Mytable from '../../components/Mytable.js'

const List_pendingbooking = () => {
  const fields = ['mdate','name','activity'];
  const history = useHistory()
  document.title="Pending Booking List";
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Booking List
          </CCardHeader>
          <CCardBody>
              <Mytable fields={fields} 
                  url="https://admin.scubadiving.ae/api/pendingbookinglist.php" 
                  detail="booking/view_booking"  history ={history}
                  />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default List_pendingbooking
