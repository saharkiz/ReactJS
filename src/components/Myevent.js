import React, { } from 'react'
import {
  CFormGroup,
  CCol,
  CLabel,
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myevent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false
        };
        
      }
      myData()
      {
        this.setState({showLoading: true  });
          fetch("https://vconlive.the-v.net/moderator/user/"+ this.props.ir)
          .then(response => response.json())
          .then(
            json => 
            {
                if (json.length !== 0){
                  this.setState({data: json[0]});
                }
                else
                {
                  this.setState({data: {error: "No Purchase Found"}});
                }
                this.timeout = setTimeout(() => {
                  this.setState({showLoading: false  });
                }, 500);
            }
          )
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myData();
        }, 500);
        
      }
      render() {
        return <>
         <Myloading show={this.state.showLoading}/>
         {
                      Object.keys(this.state.data).map((key, i) =>  {
                      return "IR Has no Purchase" && (
                        <CFormGroup key={i}>
                          <CCol md="3">
                            <CLabel><CLabel htmlFor={key}>{key.replace(/([a-z])([A-Z])/g, `$1 $2`).toUpperCase()}</CLabel></CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                          <h4><p className="form-control-static">{this.state.data[key]}</p></h4>
                          </CCol>
                          </CFormGroup>
                      )
                      }
                      )
        }
        </>;
      }
  }


  export default Myevent