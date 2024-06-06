
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import OurMenu from '../../Components/OurMenu/OurMenu'
import Header from '../Header/Header'
import DownloadApp from '../../Components/DownloadApp/DownloadApp';
import'./Home.css'
import React, { useState } from 'react'
function Home() {
  const [category,setcategory] = useState("All");
  return (
    <div className='home'>
        <Header/>
        <OurMenu category={category} setcategory={setcategory}/>
       <FoodDisplay category={category}/>
        <DownloadApp/>
    </div>
  )
}

export default Home