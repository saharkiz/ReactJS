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
const List_ticket = () => {
  const fields = ['email','status'];
  document.title="Tickets List Page";
  const history = useHistory()
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Tickets List
          </CCardHeader>
          <CCardBody>
              <Mytable fields={fields} url="https://vconlive.the-v.net/ticket/list" detail="chats/view_chat" history ={history}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default List_ticket
