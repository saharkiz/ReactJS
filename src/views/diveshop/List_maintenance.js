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

const List_maintenance = () => {
  const fields = ['createdon','name','status'];
  const history = useHistory()
  document.title="Maintenance List";
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
          Maintenance List
          </CCardHeader>
          <CCardBody>
              <Mytable fields={fields} 
                  url="https://admin.scubadiving.ae/api/maintenancelist.php" 
                  detail="diveshop/view_shop"  history ={history}
                  />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default List_maintenance
