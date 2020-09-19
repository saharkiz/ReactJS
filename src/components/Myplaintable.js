import React, { } from 'react'
import {
  CDataTable,
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myplaintable extends React.Component {
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
          fetch(this.props.url)
          .then(response => response.json())
          .then(
            json => {
              this.setState({data: json});
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
         <Myloading show={this.state.showLoading}/>
          <CDataTable
              items={this.state.data}
              fields={this.props.fields}
              clickableRows
              onRowClick={(item) => history.push(`/${this.props.detail}/${item.id}`)}
            />
        </>;
      }
  }


  export default Myplaintable