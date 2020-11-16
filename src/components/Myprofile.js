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
  CCardBody,CTextarea
} from '@coreui/react'

import { getLogin } from '../libs/utils.js';
import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false,
            txtbooking : "",
            txtslottime : ""
        };
        this.myData = this.myData.bind(this);
        this.myUpdate = this.myUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
              fetch("/api/updateprofile.php?id="+ getLogin(), requestOptions)
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
          fetch("/api/getprofile.php?id=" + getLogin())
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
        
      }

      handleChange(event)
      {
        this.state.data[event.target.name] = event.target.value;
      }
      render() {
        return <>
         <Myloading show={this.state.showLoading}/>
         <CCard>
              <CCardBody>
                    <form class="form-horizontal form-material">
                        <div class="form-group">
                            <label for="example-email" class="col-md-12">Email</label>
                            <div class="col-md-12">
                                <CInput type="email"  defaultValue={this.state.data["email"]} autoComplete="none" name="email" placeholder="johnathan@admin.com" className="form-control form-control-line" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">New Password</label>
                            <div class="col-md-12">
                                <CInput type="password" className="form-control form-control-line" autoComplete="none" name="pwd" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-12">Phone No</label>
                            <div class="col-md-12">
                                <CInput type="text"  defaultValue={this.state.data["mobile"]}  placeholder="123 456 7890"  name="mobile" className="form-control form-control-line" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <CButton color="success" onClick={this.myUpdate}> Update Profile </CButton>
                            </div>
                        </div>
                    </form>
              </CCardBody>
            </CCard>
        </>;
      }
  }


  export default Myprofile