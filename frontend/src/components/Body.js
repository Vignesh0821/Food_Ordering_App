import React from 'react'
import img1 from "../img/grill.jpg"
import img2 from "../img/biriyani.jpg"
import img3 from "../img/ramen.jpg"
import { useState,useEffect } from 'react';

const Body = () => {
  let [resData,setResData]=useState([]);
  let imgBaseLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  let getData=()=>
  {
    let result=fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    result.then((data)=>data.json())
    .then((data)=>{
      console.log(data)
      setResData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    })
  }
  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="body_container">
      <div className="main_container">
        <div className='search'>
        <span className="search_btn">Top Restaurant</span>
        <input className="search_box"></input>
        </div>
      </div>
      <div className='body-container'>
       <div className='body-head'>
        <div class="red">Discover the best food &</div>
        <div class="white">drinks in your location</div>
       </div>
       <div className='body-image'>
        <img className='img1' src={img1}></img>
        <img className='img2' src={img2}></img>
        <img className='img3' src={img3}></img>
       </div>
      </div>
      <div className='secondary_container'>
          <div  className='card_container'>
              {
                resData.map((x,y,z)=>{
                  return (<div className="res_card">
                            <img className='cardImg' src={imgBaseLink+x.info.cloudinaryImageId}></img>
                            <div>{x.info.name}</div>
                            <div>{x.info.avgRating}</div>
                            <div>{x.info.cuisines.join(", ")}</div>
                            <div>{x.info.costForTwo}</div>
                          </div>)
                })
              }  
              {console.log(resData)}
          </div>
      </div>
    </div>
  )
}

export default Body