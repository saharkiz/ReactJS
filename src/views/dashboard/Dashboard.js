import React from 'react'
import { useHistory } from 'react-router-dom'
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

import Mytable from '../../components/Myplaintable.js'
import Mydivedashboard from '../../components/Mydivedashboard.js'

const Dashboard = () => {
  const history = useHistory();
  const currentdate = new Date().toISOString().slice(0,10);
  const fields = [{ key: 'mdate', label: 'Date', sorter: false, filter: false },
  { key: 'name', label: 'Name', sorter: false, filter: false },{ key: 'activity', label: 'Activity', sorter: false, filter: false }];


  const fieldss = ['createdon','name','status'];
  const fieldsss = ['mtime','name','activity'];
  return (
    <>
    <CRow>
      <CCol xs="12" sm="12" lg="3">
          <CWidgetIcon 
            text="Today" 
            header="Schedule" 
            color="success" 
            iconPadding={false}
            footerSlot={
              <CCardFooter className="card-footer px-3 py-2">
                <CLink
                  className="font-weight-bold font-xs btn-block text-muted"
                  href="https://admin.scubadiving.ae/api/print2.php"
                  rel="noopener norefferer" 
                  target="_blank"
                >
                  Open for Print
                  <CIcon name="cil-arrow-right" className="float-right" width="16"/>
                </CLink>
              </CCardFooter>
            }
          >
            <CIcon width={24} name="cil-print" className="mx-5"/>
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="12" lg="3">
          <CWidgetIcon 
            text="Today" 
            header="Schedule" 
            color="success" 
            iconPadding={false}
            footerSlot={
              <CCardFooter className="card-footer px-3 py-2">
                <CLink
                  className="font-weight-bold font-xs btn-block text-muted"
                  href="https://admin.scubadiving.ae/api/whatsapptoday.php"
                  rel="noopener norefferer" 
                  target="_blank"
                >
                  Send via Whatsapp
                  <CIcon name="cil-arrow-right" className="float-right" width="16"/>
                </CLink>
              </CCardFooter>
            }
          >
            <CIcon width={24} name="cil-star" className="mx-5"/>
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="12" lg="3">
          <CWidgetIcon 
            text="Tomorrow" 
            header="Schedule" 
            color="info" 
            iconPadding={false}
            footerSlot={
              <CCardFooter className="card-footer px-3 py-2">
                <CLink
                  className="font-weight-bold font-xs btn-block text-muted"
                  href="https://admin.scubadiving.ae/api/print.php"
                  rel="noopener norefferer" 
                  target="_blank"
                >
                  Open for Print
                  <CIcon name="cil-arrow-right" className="float-right" width="16"/>
                </CLink>
              </CCardFooter>
            }
          >
            <CIcon width={24} name="cil-print" className="mx-5"/>
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="12" lg="3">
          <CWidgetIcon 
            text="Tomorrow" 
            header="Schedule" 
            color="info" 
            iconPadding={false}
            footerSlot={
              <CCardFooter className="card-footer px-3 py-2">
                <CLink
                  className="font-weight-bold font-xs btn-block text-muted"
                  href="https://admin.scubadiving.ae/api/whatsapptomorrow.php"
                  rel="noopener norefferer" 
                  target="_blank"
                >
                  Send via Whatsapp
                  <CIcon name="cil-arrow-right" className="float-right" width="16"/>
                </CLink>
              </CCardFooter>
            }
          >
            <CIcon width={24} name="cil-star" className="mx-5"/>
          </CWidgetIcon>
        </CCol>
    </CRow>
    <CRow>
      <Mydivedashboard/>
   </CRow>
    
  <CRow>
      <CCol xs="12" sm="6" lg="6">
          <CCard>
            <CCardHeader>Pending Bookings
            <div className="card-header-actions">
                  <a href={`/#/booking/new_booking/${currentdate}`}  className="btn btn-outline-dark" >New Booking</a>
                </div></CCardHeader>
            <CCardBody>
            <Mytable  fields={fields} 
                  url="https://admin.scubadiving.ae/api/pendingbookinglist.php" 
                  detail="booking/view_booking"  history ={history}/>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>Bookings Today</CCardHeader>
            <CCardBody>
             <Mytable  fields={fieldsss} 
                  url="https://admin.scubadiving.ae/api/todaybooking.php" 
                  detail="booking/view_booking"  history ={history}/>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" lg="6">
          <CCard>
            <CCardHeader>Rentals
            <div className="card-header-actions">
                  <a href="/#/diveshop/new_item" className="btn btn-outline-dark" >New Rental/Maintenance</a>
                </div>
            </CCardHeader>
            <CCardBody>
            <Mytable  fields={fieldss} 
                  url="https://admin.scubadiving.ae/api/rentallist.php" 
                  detail="diveshop/view_shop"  history ={history}/>
              </CCardBody>
              </CCard>
            <CCard>
            <CCardHeader>Maintenance</CCardHeader>
            <CCardBody>
             <Mytable  fields={fieldss} 
                  url="https://admin.scubadiving.ae/api/maintenancelist.php" 
                  detail="diveshop/view_shop"  history ={history}/>
            </CCardBody>
          </CCard>
        </CCol>
    </CRow>
    </>
  )
}

export default Dashboard
