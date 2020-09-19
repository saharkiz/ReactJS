import React, { } from 'react'
import {
  CWidgetIcon,
  CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mysolution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solution: "",
            solution2: "",
            solution3: "",
            solution4: "",
            solution5:"",
            solution6:"",
            solution7:"",
            solevent : "cil-x-circle",
            solir : "",
            sievent : "text-danger",
            siir : "text-danger",
            siemail : "text-danger", 
            data : "0"
        };
        
      }
      myDataIR()
      {
          fetch("https://vregistration.the-v.net/verifyir.aspx?irid="+ this.props.id)
          .then(response => response.json())
          .then(
            json => 
            {
              if (json.length > 0){
                this.setState({solution3: "IR ID Valid on QNET Webservice", solir : "cil-check", siir : "text-success"});
                this.setState({solution5: "Click Resend Email to Email User his password and ask him to try again"});
              }
              else
              {
                this.setState({solution3: "- IR ID Not found on QNET Webservice. Chat with Us again using Correct Email and IR ID", siir:"cil-x-circle"});
                this.setState({solution4: "- Ask IR to refresh page and enter the correct EMail and IR ID used when purchasing and Chat with Us again"});
              }
            }
          )
      }
      myDataEventIR()
      {
        fetch("https://vconlive.the-v.net/moderator/user/"+ this.props.id)
        .then(response => response.json())
        .then(
          json => 
          {
              if (json.length !== 0){
                this.setState({solution: "IR has a Purchase", solevent : "cil-check", sievent : "text-success"});
                this.myDataIR();
              }
              else
              {
                this.setState({solution: "- IR ID Not part of Event. Verify Payment and Transaction on RHB or QNET. "});
                this.setState({solution2: "- If found, contact Finance to add IR to Event List"});
              }
              this.timeout = setTimeout(() => {
                this.setState({showLoading: false  });
              }, 500);
          }
        )
      }
      myDataEventEmail()
      {
        fetch("https://vconlive.the-v.net/moderator/useremail/"+ this.props.email)
          .then(response => response.json())
          .then(
            json => 
            {
                if (json.length !== 0){
                  this.setState({solution6: "- EMail Part of the event.", siemail: "text-success"});
                  this.setState({solution7: "- Click Resend Email to Email User his password and ask him to try again", siemail: "text-success"});
                }
                else
                {
                  this.setState({solution6: "- Email Not part of Event. Verify Payment and Transaction on RHB or QNET. "});
                  this.setState({solution7: "- If found, contact Finance to add IR to Event List"});
                }
            }
          )
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myDataEventIR();
          this.myDataEventEmail();
        }, 500);
        
      }
      render() {
        return <>
        <CRow>
        <span className={this.state.sievent}><CIcon width={24} name={this.state.solevent}/></span>&nbsp;&nbsp;
        <h4 className={this.state.sievent}>{this.state.solution}</h4>
        </CRow>
        <h4 className={this.state.sievent}>{this.state.solution2}</h4>
        <h4 className={this.state.siemail}>{this.state.solution6}</h4>
        <h4 className={this.state.siemail}>{this.state.solution7}</h4>

        <CRow>
        <span className={this.state.siir}><CIcon width={24} name={this.state.solir}/></span>&nbsp;&nbsp;
        <h4 className={this.state.siir}>{this.state.solution3}</h4>
        </CRow>
        <h4 className={this.state.siir}>{this.state.solution4}</h4>

        <h4 className="text-danger">{this.state.solution5}</h4>
        
        <h4 className="text-info">Make sure IR is using Chrome Browser</h4>
        </>;
      }
  }


  export default Mysolution