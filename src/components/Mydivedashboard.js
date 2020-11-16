import React, { } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,CLink,
  CCallout,
  CWidgetIcon,CWidgetBrand
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mydivedashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false
        };
        
        this.myData = this.myData.bind(this);
        this.myUpdate = this.myUpdate.bind(this);
      }
      myUpdate()
      {
        alert(this.state.data.content);
      }
      myData()
      {
        this.setState({showLoading: true  });
          fetch("/api/dashboard.php")
          .then(response => response.json())
          .then(
            json => 
            {
                if (json.length !== 0){
                  this.setState({data: json[0]});
                }
                else
                {
                  this.setState({data: {error: "No  Found"}});
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
         <CCol sm="6" lg="3">
      <CWidgetBrand
        color="gradient-danger"
        rightHeader={this.state.data.active}
        rightFooter="Active Bookings"
        leftHeader={this.state.data.pending}
        leftFooter="Pending Bookings"
      >
        <CIcon
          name="cil-calendar"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="twitter"
        rightHeader={this.state.data.today}
        rightFooter="Guests Today"
        leftHeader={this.state.data.tomorrow}
        leftFooter="Guests Tomorrow"
      > 
        <CIcon
          name="cib-twitter"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="linkedin"
        rightHeader={this.state.data.users}
        rightFooter="Users"
        leftHeader={this.state.data.course}
        leftFooter="Courses"
      >
        <CIcon
          name="cib-linkedin"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader={this.state.data.rental}
        rightFooter="Rentals"
        leftHeader={this.state.data.maintenance}
        leftFooter="Maintenance"
        color="gradient-warning"
      >
        <CIcon
          name="cil-bell"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>
 
        </>;
      }
  }


  export default Mydivedashboard