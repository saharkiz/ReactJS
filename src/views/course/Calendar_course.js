import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'

import { useScript,useCSS }  from '../../libs/utils.js';

const Calendar_course = () => {
  document.title="Course Page";
  useScript('https://scubadiving.ae/media/js/jquery/jquery.js?ver=1.12.4');
  useScript('https://scubadiving.ae/media/js/jquery/jquery-migrate.min.js?ver=1.4.1');
  useScript('https://scubadiving.ae/divecenter/moment.min.js');
  useScript('https://scubadiving.ae/divecenter/fullcalendar.min.js?ver=1');
  useScript('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js');
  useScript('https://scubadiving.ae/divecenter/fullcalendar.min.css');
  useScript('https://admin.scubadiving.ae/api/customcourse.js');
  useCSS('https://scubadiving.ae/divecenter/fullcalendar.min.css');
  return (
    <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Course Calendar
          </CCardHeader>
          <CCardBody>
              <div id="calendar"></div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default Calendar_course
