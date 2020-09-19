import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2020 Bermuda Diving Centre.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by Scubadiving.ae</span>
       
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
