import React, { } from 'react'
import {
  CWidgetIcon,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mywidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : "0",
            showLoading : false
        };
        
      }
      myData()
      {
        this.setState({showLoading: true  });
          fetch(this.props.url)
          .then(response => response.json())
          .then(
            json => {
              this.setState({data: json.length});
              this.timeout = setTimeout(() => {
                this.setState({showLoading: false  });
              }, 500)
            })
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myData();
        }, 500);
        
      }
      render() {
        const { history } = this.props;
        return <>
         <CWidgetIcon text="Total Open Chat" header={this.state.data} color={this.props.color}>
            <CIcon width={24} name="cil-bell"/>
          </CWidgetIcon>
        </>;
      }
  }


  export default Mywidget