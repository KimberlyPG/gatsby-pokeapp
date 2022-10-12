import * as React from "react";

import Home from '../components/Home';
import '../styles/global.css'

const IndexPage = () => {  
  return (
    <div className='grid grid-cols-5'>
      Pokemon list
      <Home />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>


