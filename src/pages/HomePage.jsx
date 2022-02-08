import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'


export class HomePage extends Component {
  render() {
    return (
      <Fragment> 
  <div className='Desktop'>

    <NavMenuDesktop />
    <HomeTop />

    </div>

   <div className='Mobile'>
   <NavMenuMobile/>   
   <HomeTopMobile />
   </div>

    
    
      <FeaturedProducts />
      <NewArrival />
      <Collection />
      <Categories />

 </Fragment>
    )
  }
}

export default HomePage
