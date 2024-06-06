import React from 'react'
import './DownloadApp.css'
import playtore from '../../assets/play_store.png'
import appstore from '../../assets/app_store.png'
function DownloadApp() {
  return (
   <div className="DownloadApp" id='download-app'>
    <div className="headingdownload">
        <h1>For better experience,download the our app now</h1>
    </div>
    <div className="playstore">
        <img src={playtore} className='plays' alt="" />
        <img src={appstore} className='apps' alt="" />
    </div>
   </div>
  )
}

export default DownloadApp