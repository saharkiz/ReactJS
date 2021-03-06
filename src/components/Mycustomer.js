import React, { } from 'react'
import { withRouter } from 'react-router-dom';
import {
  CFormGroup,
  CCol,
  CLabel,
  CRow,
  CInput,
  CCard,CSelect,
  CCardHeader,CButton,
  CCardBody,CTextarea,CInputFile,CImg
} from '@coreui/react'

import Myloading from './Myloading.js'
import { getLogin } from '../libs/utils.js';
//REUSABLE COMPONENT
class Mycustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            datatrans : [],
            showLoading : false,
            txtbooking : "",
            txtslottime : "",
            file : '',
        };
        this.myData = this.myData.bind(this);
        this.myUpdate = this.myUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTrans = this.handleChangeTrans.bind(this);
        this.myUpdateTrans = this.myUpdateTrans.bind(this);

        this.handleChangeProfile = this.handleChangeProfile.bind(this);
        this.uploadprofilepic = this.uploadprofilepic.bind(this);
      }
      handleChangeProfile(selectorFiles)
      {
          this.setState({ file: selectorFiles });
          this.uploadprofilepic();
      }
      uploadprofilepic()
      {
          this.setState({showLoading: true  });
          if (this.state.file.length > 0)
          {
          this.setState({showLoading: true  })
          console.log("sending Data...another")
          var formdata = new FormData();
          formdata.append("files", this.state.file[0], this.state.file[0].name);

          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };

          fetch("/api/uploadprofile.php?id="+ this.state.data["id"], requestOptions)
            .then(response => response.text())
            .then(result => {
                  console.log(result);
                  this.setState({showLoading: false  });
                  this.timeout = setTimeout(() => {
                    this.setState({showLoading: false  });
                    let outputresult = JSON.parse(result);
                    if (outputresult["output"])
                    {
                      var resout = "<br/><br/>";
                      outputresult["output"].forEach(function(newItem) {
                          resout = resout + JSON.stringify(newItem.email) + "<br/>";
                      }, this);   
                      this.setState({modal: true, msg : "File Uploaded: Issues:" + resout})
                    }
                    else
                    {
                      this.setState({modal: true, msg : "File Uploaded:<strong>" + outputresult["filename"] + "</strong>"})
                      window.location.reload(false);
                    }
                  }, 1000)
              }
            )
            .catch(error => console.log('error', error));
          }
          else
          {
            this.setState({modal: true, msg : "No File Selected"});
            this.setState({showLoading: false  });
          }
      }
      myUpdateTrans()
      {
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(this.state.datatrans);

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };

            this.setState({showLoading: true  });
              fetch("/api/newtrans.php?id="+ this.state.data["id"], requestOptions)
              .then(response => response.text())
              .then(
                    json => 
                    {
                      alert(json);
                      this.setState({showLoading: false  });
                      window.location.reload(false);
                    }
              )
      }
      myUpdate()
      {
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(this.state.data);

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };

            this.setState({showLoading: true  });
              fetch("/api/updateuser.php?id="+ this.state.data["id"], requestOptions)
              .then(response => response.text())
              .then(
                    json => 
                    {
                      alert(json);
                      this.setState({showLoading: false  });
                    }
              )
      }
      myData()
      {
        this.setState({showLoading: true  });
          fetch(this.props.url)
          .then(response => response.json())
          .then(
            json => this.setState({data: json[0]}),
            this.timeout = setTimeout(() => {
              this.setState({showLoading: false  });
            }, 500)
          )
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myData();
        }, 500);
        
        this.state.datatrans = {"memid":this.props.id,"creator":getLogin(),"point":"0","action":"NOTHING"};
        this.forceUpdate();
      }

      handleChange(event)
      {
        this.state.data[event.target.name] = event.target.value;
      }
      handleChangeTrans(event)
      {
        this.state.datatrans[event.target.name] = event.target.value;
      }
      render() {
        return <>
         <Myloading show={this.state.showLoading}/>
         <CRow>
      <CCol lg={4}>
        <CCard>
          <CCardBody>
          <CFormGroup>
              <CLabel>Customer ID: {this.state.data["id"]}</CLabel>
          </CFormGroup>
          <CFormGroup>
                    <CLabel>Agency <span className="badge badge-danger">{this.state.data["agency"]}</span></CLabel>
                    <CSelect custom defaultValue={this.state.data["agency"]} name="agency" onChange={this.handleChange}>
                            <option value="">-- Please Select --</option>
                            <option value="PADI">PADI</option>
                            <option value="NAUI">NAUI</option>
                            <option value="IANTD">IANTD</option>
                            <option value="SSI">SSI</option>
                            <option value="TDI">TDI</option>
                            <option value="SDI">SDI</option>
                    </CSelect>
            </CFormGroup>
          <CFormGroup>
              <CLabel>Diver Number <span className="badge badge-info">{this.state.data["divenum"]} </span></CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["divenum"]}   name="divenum" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
                    <CLabel>Member Since <span className="badge badge-danger">{this.state.data["memsince"]}</span></CLabel>
                    <CInput type="date" placeholder={`Enter your Date`} defaultValue={this.state.data["memsince"]} name="memsince"  onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Note</CLabel>
              <CTextarea type="text" placeholder="" defaultValue={this.state.data["note"]}   name="note" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Consumable Points :: <h2 className="label label-warning">{this.state.data["cash"]} pts</h2></CLabel>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Member Card :: <h2 className="label label-info">{this.state.data["memnum"]}</h2></CLabel>
            </CFormGroup>
            </CCardBody>
        </CCard>
     </CCol>
     <CCol lg={4}>
        <CCard>
          <CCardHeader>Customer Details
          </CCardHeader>
          <CCardBody>
          <CFormGroup>
            <CLabel>Profile Picture</CLabel>
            <CInputFile
                          id="file-multiple-input" 
                          name="file-multiple-input" 
                          multiple
                          onChange={ (e) => this.handleChangeProfile(e.target.files) }
                          />
             <CButton block color="warning" onClick={this.uploadprofilepic}> UPLOAD </CButton>
          </CFormGroup>
          <CFormGroup>
              <CLabel>Name :: {this.state.data["name"]}</CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["fname"]}   name="fname" onChange={this.handleChange}/>
              <CInput type="text" placeholder="" defaultValue={this.state.data["lname"]}   name="lname" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Email <a className="badge badge-info" href={`mailto:${this.state.data["email"]}`} target="_blank">{this.state.data["email"]} </a></CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["email"]}   name="email" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Mobile <a className="badge badge-info" href={`tel://${this.state.data["mobile"]}`} target="_blank">{this.state.data["mobile"]} </a></CLabel>
              <CInput type="text" placeholder="" defaultValue={this.state.data["mobile"]}   name="mobile" onChange={this.handleChange}/>
            </CFormGroup>
            <CFormGroup>
                    <CLabel>Date of Birth <span className="badge badge-danger">{this.state.data["dob"]}</span></CLabel>
                    <CInput type="date" placeholder={`Enter your Date`} defaultValue={this.state.data["dob"]} name="dob"  onChange={this.handleChange}/>
            </CFormGroup>
            <CRow className="align-items-center">
                <CCol col="6" xl className="mb-3 mb-xl-0">
                  <CButton block color="success" onClick={this.myUpdate}> Update </CButton>
                </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={4}>
        <CCard>
          <CCardBody>
            <CImg src={`/api/profileimage.php?id=${this.state.data["id"]}`} className="inbox_people"/>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Transactions
          </CCardHeader>
          <CCardBody>
          <CFormGroup>
              <CLabel>Transaction :: {this.state.data["action"]}</CLabel>
              <CInput type="text" placeholder="" name="action" onChange={this.handleChangeTrans}/>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Points</CLabel>
              <CInput type="number" placeholder="" name="point" onChange={this.handleChangeTrans}/>
            </CFormGroup>
            <CRow className="align-items-center">
                <CCol col="6" xl className="mb-3 mb-xl-0">
                  <CButton block color="success" onClick={this.myUpdateTrans}> New Transaction </CButton>
                </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
     
        </>;
      }
  }


  export default Mycustomer