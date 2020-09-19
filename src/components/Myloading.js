import React from 'react'
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CSpinner,
  CImg
} from '@coreui/react'

//REUSABLE COMPONENT
class Myloading extends React.Component {
      render() {
        return <>
          <CModal 
              show={this.props.show}
              onClose={() => this.props.show }
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle> Loading... Please Wait...</CModalTitle>
              </CModalHeader>
              <CModalBody className="text-center">
              <div className="img-thumbnail">
              <CImg
                  src={'avatars/logo.png'}
                  alt="Loading, Please Wait"
                />
                </div>
                <br/>
              <CSpinner size="lg" variant="grow" />
              </CModalBody>
            </CModal>
        </>;
      }
  }


  export default Myloading