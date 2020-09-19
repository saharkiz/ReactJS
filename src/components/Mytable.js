import React, { } from 'react'
import {
  CDataTable,
  CButton,
  CInputCheckbox,
  CFormGroup,
  CLabel,
  CBadge, CRow,CCol
} from '@coreui/react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mytable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showLoading : false,
            counter: 0,
            page : 1
        };
        
        this.myData = this.myData.bind(this);

        this.pagechangeup = this.pagechangeup.bind(this);
        this.pagechangedown = this.pagechangedown.bind(this);
      }
      pagechangeup(){
        var mypage = this.state.page + 1;
        this.setState({page: mypage});
          this.myData(mypage);
      }
      pagechangedown(){
        var mypage = this.state.page - 1;
        if (mypage == 0)
        {
          mypage = 1;
        }
        this.setState({page: mypage});
          this.myData(mypage);
      }
      myData(npage)
      {
          fetch(this.props.url + '?page=' + npage)
          .then(response => response.json())
          .then(
            json => 
            {
              this.setState({data: json});
              this.setState({counter: json.length});
              this.timeout = setTimeout(() => {
                this.setState({showLoading: false  });
              }, 500);
            }
          )
      }
      componentDidMount() {
        this.setState({showLoading: true  });
        setTimeout(() => {
          this.myData(1);
        }, 500);
        
      }
      render() {
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
              itemsPerPage={50}
              itemsPerPageSelect
              sorter
              columnFilter
              tableFilter
              clickableRows
              /*onRowClick={(item) => history.push(`/${this.props.detail}/${item.id}`)}*/
              scopedSlots = {{
                'checkbox':
                  (item)=>(
                    <td>
                      <CFormGroup variant="custom-radio" inline>
                      <CInputCheckbox 
                        id={`checkbox${item.id}`}
                        name={`checkbox${item.id}`}
                        value={item.id} 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor={`checkbox${item.id}`}>
                        <h5><CBadge color="info">{item.id}</CBadge></h5>
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
                            onClick={()=>{history.push(`/${this.props.detail}/${item.id}`)}}
                          >
                            Details
                          </CButton>
                        </td>
                        )
                      }
              }}
            />
            <br/>
        Total Records Loaded: {this.state.counter}<br/>
        Page : {this.state.page}
              <br/>
         <CRow className="row">
                <CCol  lg={2} col="2" className="mb-3 mb-xl-0">
                  <CButton block color="primary" onClick={this.pagechangedown}>{`<<<<`}  Previous Page </CButton>
                </CCol>
                <CCol  lg={2} col="2" className="mb-3 mb-xl-0">
                  <CButton block color="primary" onClick={this.pagechangeup}>  Next Page {`>>>>`}</CButton>
                </CCol>
            </CRow>
        </>;
      }
  }


  export default Mytable