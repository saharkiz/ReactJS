import React, { useState, useRef } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCollapse
} from '@coreui/react'
import Myir from '../../components/Myir.js'
import Myevent from '../../components/Myevent.js'
import Myeventemail from '../../components/Myeventemail.js'
import Mychat from '../../components/Mychat.js'
import Mytable from '../../components/Myplaintable.js'
import Mynewticket from '../../components/Mynewticket.js'
import Myirupdate from '../../components/Myirupdate.js'
import Myresetpas from '../../components/Myresetpas.js'
import Myticketdetail from '../../components/Myticketdetail.js'
import Mysolution from '../../components/Mysolution.js'


const View_chat = ({match}) => {
  const [collapse, setCollapse] = useState(false)
  const [collapseir, setCollapseir] = useState(false)
  const [collapseticket, setCollapseticket] = useState(false)
  const [collapsereset, setCollapsereset] = useState(false)
  const [ticket, setTicket] = useState(false)
  const myref = useRef(null);
  const myrefEvent = useRef(null);
  const [msg, setMsg] = useState("")
  const toggle = (e) => {
    setCollapse(!collapse)
    setCollapseir(false)
    setCollapsereset(false)
    e.preventDefault()
  }
  const toggleir = (e) => {
    setCollapseir(!collapseir)
    setCollapse(false)
    setCollapsereset(false)
    e.preventDefault()
  }
  const btnresend = (e) => {
    e.preventDefault()
    setMsg("Please Wait... Processing....");
    
          
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({"email":match.params.email});

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("https://vconlive.the-v.net/moderator/forgotpassword", requestOptions)
            .then(response => response.text(),)
            .then(result => {
              setTimeout(() => {
                alert(result);
                setMsg("");
            }, 500);
            })
            .catch(error => console.log('error', error));
    

  }
  const btnclose = (e) => {
    e.preventDefault()
    setMsg("Please Wait... Processing....");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://vconlive.the-v.net/chat/close/"+ match.params.email, requestOptions)
      .then(response => response.text())
      .then(result => setMsg(""),myrefEvent.current.myData(),alert("Chat Session Closed."))
      .catch(error => console.log('error', error));
      myrefEvent.current.myData();
  }
  const btnkick = (e) => {
    e.preventDefault()
    setMsg("Please Wait... Processing....");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://vconlive.the-v.net/moderator/kick/"+ match.params.email, requestOptions)
      .then(response => response.text())
      .then(result => setMsg(""),myrefEvent.current.myData(),alert("User Kick Success."))
      .catch(error => console.log('error', error));
      myrefEvent.current.myData();
  }
  const btnreset = (e) => {
    setCollapsereset(!collapsereset)
    setCollapseir(false)
    setCollapse(false)
    e.preventDefault()
  }

  const handleTicket = (ticketvalue) => {
    setTicket(ticketvalue);
    setCollapseticket(!collapseticket);
    myref.current.myData(ticketvalue);
}

  document.title="View User Chat";
  const fields = ['id','status'];
  const fieldsattempt = ['email','login','ip','browserid'];
  return (
    <>
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Recommended Solution:
          </CCardHeader>
          <CCardBody>
              <Mysolution email={match.params.email} id={match.params.id} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
       <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            User Email: {match.params.email}
          </CCardHeader>
          <CCardBody>
              <Mychat email={match.params.email} id={match.params.id} />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
          <CRow className="align-items-center">
            <h4>{msg}</h4><br/></CRow>
          <CRow className="align-items-center">
            <CCol col="6" sm="6" md="6" xl className="mb-3 mb-xl-0">
              <CButton block color="info" onClick={btnclose}>Close Chat</CButton>
            </CCol>
            <CCol col="6" sm="6" md="6" xl className="mb-3 mb-xl-0">
              <CButton block color="danger" onClick={btnkick}>Kick IR</CButton>
            </CCol>
          </CRow>
          <br/>
          <CRow className="align-items-center">
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="primary" onClick={toggle}>New Ticket</CButton>
            </CCol>
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="secondary" onClick={toggleir}>Update IR</CButton>
            </CCol>
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="success" onClick={btnresend}>Resend Email</CButton>
            </CCol>
            <CCol col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <CButton block color="warning" onClick={btnreset}>Reset Password</CButton>
            </CCol>
          </CRow>
          </CCardBody>
        </CCard>
        <CCollapse show={collapse}>
        <CCard>
          <CCardHeader>
          Create a New Ticket for IR: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <Mynewticket id={match.params.id} />
          </CCardBody>
        </CCard>
        </CCollapse>
        <CCollapse show={collapseir}>
        <CCard>
          <CCardHeader>
          Update Event Details for IR: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <Myirupdate id={match.params.id} />
          </CCardBody>
        </CCard>
        </CCollapse>
        <CCollapse show={collapseticket}>
        <CCard>
          <CCardHeader>
          Update Open Ticket: {ticket}
          </CCardHeader>
          <CCardBody>
              <Myticketdetail ref={myref}/>
          </CCardBody>
        </CCard>
        </CCollapse>
        <CCollapse show={collapsereset}>
        <CCard>
          <CCardHeader>
          Reset Password:  {match.params.id}
          </CCardHeader>
          <CCardBody>
              <Myresetpas id={match.params.email} />
          </CCardBody>
        </CCard>
        </CCollapse>
      </CCol>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>IR Details (QNET Webservice)
          </CCardHeader>
          <CCardBody>
              <Myir ir={match.params.id}/>
          </CCardBody>
        </CCard>
        <CCard>
              <CCardHeader>Login Attempts
              </CCardHeader>
              <CCardBody>
                  <Mytable fields={fieldsattempt} url={`https://vconlive.the-v.net/moderator/attempt/${match.params.email}`}/>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>Event Details based on IR ID:{match.params.id} (Uploaded Data)
              </CCardHeader>
              <CCardBody>
                  <Myevent ir={match.params.id} ref={myrefEvent}/>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>Event Details based on Email:{match.params.email} (Uploaded Data)
              </CCardHeader>
              <CCardBody>
                  <Myeventemail email={match.params.email} ref={myrefEvent}/>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>Tickets
              </CCardHeader>
              <CCardBody>
                  <Mytable fields={fields} url={`https://vconlive.the-v.net/ticket/list/${match.params.email}`} onSelectTicket={handleTicket}/>
              </CCardBody>
            </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default View_chat
