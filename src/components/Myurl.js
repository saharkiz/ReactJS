import React, { } from 'react'
import { withRouter } from 'react-router-dom';
import {
  CDataTable,
  CButton,
  CInputCheckbox,
  CFormGroup,
  CLabel
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Myurl extends React.Component {
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
            json => this.setState({data: json}),
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
      render() {
        /*let eventSource = new EventSource("http://localhost:5000/live/check");
        
        eventSource.onmessage = e => console.log(e.data);
        eventSource.onerror = function() {
          //console.log("EventSource failed.");
          //eventSource.close();
          //history.push(`/dashboard`)
        };*/
        const { history } = this.props;
        return <>
         <Myloading show={this.state.showLoading}/>
          <CDataTable
              items={this.state.data}
              fields={this.props.fields}
              itemsPerPage={5}
              itemsPerPageSelect
              pagination
              sorter
              columnFilter
              tableFilter
              clickableRows
              onRowClick={(item) => history.push(`/${this.props.detail}/${item.irId}`)}
              scopedSlots = {{
                'checkbox':
                  (item)=>(
                    <td>
                      <CFormGroup variant="custom-radio" inline>
                      <CInputCheckbox 
                        id={`checkbox${item.id}`}
                        name={`checkbox${item.id}`}
                        value={item.irId} 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor={`checkbox${item.id}`}>{item.irId}</CLabel>
                      </CFormGroup>
                    </td>
                  ),
                  'show_details':
                    (item, index)=>{
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={()=>{history.push(`/${this.props.detail}/${item.irId}`)}}
                          >
                            Details
                          </CButton>
                        </td>
                        )
                      }
              }}
            />
        </>;
      }
  }


  export default Myurl