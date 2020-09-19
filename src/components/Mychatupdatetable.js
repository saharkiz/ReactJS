import React, { } from 'react'
import {
  CDataTable,
  CButton,
  CInputCheckbox,
  CFormGroup,
  CLabel,
  CBadge
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mychatupdatetable extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false,
            eventSource : undefined
        };
        this.myData = this.myData.bind(this);
      }
      myData()
      {
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
        this.setState({showLoading: true  });
        setTimeout(() => {
          this.myData();
        }, 500);
        
      }
      componentWillUnmount() {
        if(this.eventSource)
        this.eventSource.close();
      }
      render() {
        if(this.eventSource)
          { this.eventSource.close(); }
        this.eventSource = new EventSource("https://vconlive.the-v.net/live/checkchat");
        
        this.eventSource.onmessage = e => {
          this.myData();
        }
        const { history } = this.props;
        let allFields = this.props.fields;
        let checkboxField = [{ key: 'checkbox', label: 'ID', sorter: false, filter: false }];
        let detailField = [{ key: 'show_details', label: '', sorter: false, filter: false }];
        let finalFields = [...checkboxField, ...allFields, ...detailField];
        return <>
         <Myloading show={this.state.showLoading}/>
          <CDataTable
              items={this.state.data}
              fields={finalFields}
              itemsPerPage={5}
              itemsPerPageSelect
              pagination
              sorter
              columnFilter
              tableFilter
              clickableRows
              /*onRowClick={(item) => history.push(`/${this.props.detail}/${item.irId}`)}*/
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
                      <CLabel variant="checkbox" className="form-check-label" htmlFor={`checkbox${item.id}`}>
                        <h5><CBadge color="info">{item.irId}</CBadge></h5>
                      </CLabel>
                      </CFormGroup>
                    </td>
                  ),
                  'show_details':
                    (item, index)=>{
                      return (
                        <td className="py-2">
                          <CButton
                            color="success"
                            variant="outline"
                            shape="square"
                            size="md"
                            onClick={()=>{history.push(`/${this.props.detail}/${item.irId}/${item.email}`)}}
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


  export default Mychatupdatetable