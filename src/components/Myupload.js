import React from 'react'
import {  
  CAlert,
  CInputFile,
  CButton,
  CCol,
  CRow,
  CModal,CModalHeader,CModalTitle,CModalBody,CModalFooter
} from  '@coreui/react'

import Myloading from './Myloading.js'

//REUSABLE COMPONENT
class Myupload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showCard : false,
            showLoading : false,
            file : '',
            modal : false,
            msg : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.myData = this.myData.bind(this);
      }
      handleChange(selectorFiles)
      {
          this.setState({ file: selectorFiles });
      }
      myData = () =>
      {
        if (this.state.file.length > 0)
        {
        this.setState({showLoading: true  })
        console.log("sending Data...another")
        var formdata = new FormData();
        formdata.append("files", this.state.file[0], this.state.file[0].name);

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch(this.props.url, requestOptions)
          .then(response => response.text())
          .then(result => {
                console.log(result);
                this.timeout = setTimeout(() => {
                  this.setState({showLoading: false  });
                  let outputresult = JSON.parse(result);
                  if (outputresult["output"])
                  {
                    var resout = "<br/><br/>";
                    outputresult["output"].forEach(function(newItem) {
                        resout = resout + JSON.stringify(newItem.email) + "<br/>";
                    }, this);   
                    this.setState({modal: true, msg : "File Uploaded: Issues:" + resout})
                  }
                  else
                  {
                    this.setState({modal: true, msg : "File Uploaded: Issues:<strong>" + outputresult["filename"] + "</strong>"})
                  }
                }, 1000)
            }
          )
          .catch(error => console.log('error', error));
        }
        else
        {
          this.setState({modal: true, msg : "No File Selected"})
        }
      }
      
      componentDidMount() {
      }
      render() {
        return <>
        <Myloading show={this.state.showLoading}/>
            <CAlert color="info" show={this.state.showCard} closeButton>
              Upload Complete. Processing Data...
            </CAlert>
            <div>
              Email, Name, Mobile, Unique ID
            </div>
            <CRow className="align-items-center">
                <CCol col="6" sm="4" md="4" xl="6" className="mb-3 mb-xl-0">
                          <CInputFile
                          id="file-multiple-input" 
                          name="file-multiple-input" 
                          multiple
                          onChange={ (e) => this.handleChange(e.target.files) }
                          />
                </CCol>
                <CCol col="6" sm="4" md="4" xl="6" className="mb-3 mb-xl-0">
                    <CButton color="info" onClick={this.myData}>Update</CButton>
                </CCol>
            </CRow>
            <CModal 
              show={this.state.modal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Error</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <div dangerouslySetInnerHTML={{ __html: this.state.msg }} />
                
              </CModalBody>
              <CModalFooter>
                <CButton 
                  color="success" 
                  onClick={() => this.setState({modal: false})}
                >Cancel</CButton>
              </CModalFooter>
            </CModal>
        </>;
      }
  }


  export default Myupload