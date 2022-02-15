import React from 'react'
import { Link } from 'react-router-dom'
import Snacks from "../Snacks/Snacks"

const Index = () => {
  return (
    <div>

<div className="new">
        <Link to="/snacks/new">New Snack</Link>
        <Snacks />
      </div> 
    </div>
  )
}

export default Index