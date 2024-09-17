import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from "../styles/Brands.module.css"
import Nav from '../components/Nav';
import Shop from '../pages/Shop';
import NewArrivals from './NewArrivals'
import OnSale from './OnSale';
function Brands() {

  return (
    <>
    <OnSale></OnSale>
    </>
  )
}

export default Brands