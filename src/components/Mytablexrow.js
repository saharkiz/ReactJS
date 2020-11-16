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
class Mytablexrow extends React.Component {
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
        return <>
         <Myloading show={this.state.showLoading}/>
         <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Name</th>
                <th scope="col">Activity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                    {
                        Object.keys(this.state.data).map((key, i) => (
                          <>
                            <tr>
                              <td>{this.state.data[key]["id"]}</td>
                              <td>{this.state.data[key]["mdate"]}</td>
                              <td>{this.state.data[key]["name"]}</td>
                              <td>{this.state.data[key]["activity"]}</td>
                              <td>
                              <CButton
                                color="success"
                                variant="outline"
                                shape="square"
                                size="md"
                                onClick={()=>{history.push(`/${this.props.detail}/${this.state.data[key]["id"]}`)}}
                              >
                                Details
                              </CButton>
                                </td>
                            </tr>
                            <tr  class="table-warning">
                              <td>            </td>
                              <td colspan="4">{this.state.data[key]["note"]}</td>
                            </tr>
                          </>
                        ))
                      }
            </tbody>
          </table>
         </div>
            <br/>
        Total Records Loaded: {this.state.counter}<br/>
        </>;
      }
  }


  export default Mytablexrow