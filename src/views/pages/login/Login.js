import React, {useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg,
  CModal,CModalHeader,CModalTitle,CModalBody,CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { login } from '../../../libs/utils.js';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [modal, setModal] = useState(false)

  const handleLogin = () => {
    
    if (email === "")
    {
          setModal(!modal);
          setEmail("");
          setPass("");
          return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"email":email,"passwrd":pass});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://admin.scubadiving.ae/api/adminlog.php?action=login", requestOptions)
      .then(response => response.text())
      .then(result => {
        try{
            let jsn = JSON.parse(result);
            if (result.length > 3)
            {
              console.log(result);
              login(result.replace(/['"]+/g, ''));
              window.location.reload(false)
            }
            else
            {
              setModal(!modal);
              setEmail("");
              setPass("");
            }
          }
          catch(error) {
              setModal(!modal);
              setEmail("");
              setPass("");
          }
      })
      .catch(error => console.log('error', error));


    
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                <div  className="text-center  d-lg-none d-xs">
                    <CImg
                      src={'avatars/logob.png'}
                      alt="Moderator"
                      width="120px"
                    />
                  </div>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" value={pass} onChange={(e) => setPass(e.target.value)}  placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={() => handleLogin()}>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-warning py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <CImg
                      src={'avatars/logo.png'}
                      alt="Moderator"
                    />
                    <h4>SCUBADIVING.AE</h4>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <CModal 
              show={modal} 
            >
              <CModalHeader closeButton>
                <CModalTitle>Error</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Invalid Login Credentials
              </CModalBody>
              <CModalFooter>
                <CButton 
                  color="success" 
                  onClick={() => setModal(false)}
                >Cancel</CButton>
              </CModalFooter>
            </CModal>
    </div>
  )
}

export default Login
