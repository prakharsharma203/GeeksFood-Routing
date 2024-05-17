import { Route, Routes } from "react-router-dom"
import { Home } from "./components/home/home"
import { data } from "./components/quotes/data"
import { Card } from "./components/quotes/quotes"
import RecipePage from "./components/foods/food"
import FoodDetailsPage from "./components/foods/foodDetails"
import {Contact} from "./components/contacts/contact"
import "./App.css"
import { NavBar } from "./components/navbar/navbar"
import { FooTers } from "./components/footer/footer"
import { Navbar } from "./components/restaurants/nav"
import { useState } from "react"
import { Cards } from "./components/restaurants/restaurants"
import { RestaurantName} from "./components/restaurants/data1"
function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/home" element = {<Home/>}/>
    <Route path="/quotes" element={<>{data.map((detail) => (<Card detail={detail}/>))}</>} />
    <Route path="/restaurants" element = {<RestaurantFinalData/>}/>
    <Route path="/foods" element = {<RecipePage/>}/>
    <Route path="/foods/:id" element = {<FoodDetailsPage/>}/>
    <Route path="/contact" element = {<Contact/>}/>
    </Routes>
    <FooTers/>
    </>
  )
}

export default App







export function RestaurantFinalData() {
  
  const[filterData,setfilterData] = useState(RestaurantName);
  

  return (
    <>
      <Navbar setfilterData={setfilterData}  filterData={filterData} data={RestaurantName}/>
      <div className="ResData">
      {filterData.map((detail) => (
        <Cards detail={detail} />
      ))}
      </div>
    </>
  )
}


