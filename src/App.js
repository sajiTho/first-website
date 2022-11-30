import React from 'react'

export default function App() {
  return (
    <div className="whole">
      <div className="left">
        <h1 className="heading1">Team Details</h1>
        <h3 className="heading3">Team Name</h3>
        <input type="text" className="searchbar" />
        <h1 className="access">Workflow access</h1>
        <input type="text" className="workaccess" />
        <div>
          <button className="btn-primary">
            <span className='Boss'>Analytics</span>
          </button>
          <button className="btn-primary1">
            <span className='Boss'>Accounts</span>
            </button>
          <button className="btn-primary2"><span className='Boss'>Shipping</span>
          </button>
          <button className="btn-primary3"><span className='Boss'>Inventory</span>
          </button>
        </div>
        <h3 className="headings">Invite Message</h3>
        <div className="texta">
          <div className="textb">You have been added to this team and have access to new workflows. Check your Fueled.ai profile!</div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

