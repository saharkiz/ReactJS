import React, { } from 'react'
import {
  CFormGroup,
  CCol,
  CRow,CButton
} from '@coreui/react'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mynewemail extends React.Component {
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
          fetch("http://admin.scubadiving.ae/api/getemail.php?id=2")
          .then(response => response.json())
          .then(
            json => 
            {
                if (json.length !== 0){
                  this.setState({data: json[0]});
                }
                else
                {
                  this.setState({data: {error: "No Email Found"}});
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
         <CKEditor 
                    editor={ ClassicEditor }
                    data={this.state.data.content}
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                        editor.editing.view.change(writer => {
                          writer.setStyle(
                            "height",
                            "500px",
                            editor.editing.view.document.getRoot()
                          );
                        });
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.state.data["content"] = data;
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
<br/><br/>
          <CRow className="align-items-center">
            <CCol col="6" xl className="mb-3 mb-xl-0">
              <CButton block color="success"  onClick={this.myUpdate}>Update and Save</CButton>
            </CCol>
          </CRow>
        </>;
      }
  }


  export default Mynewemail