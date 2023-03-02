import * as React from "react";
import { PageProps } from "gatsby";

import Home from '../components/Home';
import '../styles/global.css'

const IndexPage = () => {  
  return (
    <Home />
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>


