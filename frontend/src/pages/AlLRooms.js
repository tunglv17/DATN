import React from 'react'
import FooterWebsite from '../components/Common/FooterWebsite'
import HeaderWebsite from '../components/Common/HeaderWebsite'
import ListRoom from '../components/componentsAllroom/ListRoom'
import RoomBanner from '../components/componentsAllroom/RoomBanner'
import ServicesRoom from '../components/componentsAllroom/ServicesRoom'



const AlLRooms = () => {
 return (
  <div>
   <HeaderWebsite />
   <RoomBanner />
   <ListRoom />
   <ServicesRoom />
   <FooterWebsite />
  </div>
 )
}

export default AlLRooms
