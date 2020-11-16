import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import Mytablexrow from '../../components/Mytablexrow.js'

const List_pendingbooking = () => {
  const fields = ['mdate','name','activity','note'];
  const history = useHistory()
  document.title="Pending Booking List";
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Pending Booking List
          </CCardHeader>
          <CCardBody>
              <Mytablexrow fields={fields} 
                  url="/api/pendingbookinglist.php" 
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
