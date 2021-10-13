import React from 'react'
import {stockData} from '../utils/Data'
const MainLayout = ()=> {
  
 
  return (
    <>
     {stockData.map((data, key) => {
       return(
    <div className="grid-container spacing" key={key}>
    <div className="item1">{data.company}</div>
    <div className="item2">{data.ticker}</div>
    <div className="item3">{data.stockPrice}</div>  
    <div className="item4">{data.timeElapsed}</div>
  
  </div>
       )})}
    </>
  )
}

export default MainLayout
