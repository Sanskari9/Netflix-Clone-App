import React from 'react'
import "./PlansScreen.css"

const PlansScreen = () => {
  return (
    <div className="plansScreen_plan">
        <div className="plansScreen_info">
            <div className="plan">
            <h5>Premium</h5>
            <h6>4k + HDR</h6>
            </div>
            <button className="currentPackage">Current Package</button>
        </div>
        <div className="plansScreen_info">
            <div className="plan">
            <h5>Basic</h5>
            <h6>720p</h6>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="plansScreen_info">
            <div className="plan">
            <h5>Standard</h5>
            <h6>1080p</h6>
            </div>
            <button>Subscribe</button>
        </div>
           
    </div>
  )
}

export default PlansScreen
