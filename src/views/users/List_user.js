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
import Myupload from '../../components/Myupload.js'
const List_user = () => {
  const fields = ['name','email']
  document.title="Users List Page";
  const history = useHistory()
  return (
    <>
      <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
           Customer List
        </CCardHeader>
        <CCardBody>
          <Mytable fields={fields} url="https://admin.scubadiving.ae/api/userlist.php" detail="customer/view_customer" history ={history}/>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Actions
        </CCardHeader>
        <CCardBody>
          <Myupload url="https://admin.scubadiving.ae/api/userupload.php"/>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
    </>
  )
}

export default List_user
