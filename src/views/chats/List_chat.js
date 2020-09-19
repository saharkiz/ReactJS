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
const List_chat = () => {
  const fields = ['email','status','serviceBy'];
  document.title="Chat List Page";
  const history = useHistory()
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Chat List
          </CCardHeader>
          <CCardBody>
              <Mytable fields={fields} url="https://vconlive.the-v.net/chat/listall" detail="chats/view_chat" history ={history}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default List_chat
