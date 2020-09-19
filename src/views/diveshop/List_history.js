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

const List_history = () => {
  const fields = ['createdon','name','status'];
  const history = useHistory()
  document.title="Rental & Maintenance List";
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Rental & Maintenance List
          </CCardHeader>
          <CCardBody>
              <Mytable fields={fields} 
                  url="https://admin.scubadiving.ae/api/historylist.php" 
                  detail="diveshop/view_shop"  history ={history}
                  />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default List_history
