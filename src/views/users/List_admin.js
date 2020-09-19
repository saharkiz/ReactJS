import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'

import Mytable from '../../components/Myplaintable.js'
const List_admin = () => {
  const fields = ['email','username','passwrd']
  document.title="Admin List Page";
  const history = useHistory()
  return (
    <>
      <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          Admin Users List
          <div className="card-header-actions">
                  <a href="/#/users/new_admin"  className="btn btn-outline-dark" >New Admin</a>
                </div>
        </CCardHeader>
        <CCardBody>
          <Mytable fields={fields} url="https://admin.scubadiving.ae/api/adminuser.php"/>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
    </>
  )
}

export default List_admin
