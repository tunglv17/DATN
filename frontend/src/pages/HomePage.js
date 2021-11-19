import React from 'react'
import ComponentsBlog from '../components/componentsHome/ComponentsBlog'
import ComponentsRoom from '../components/componentsHome/ComponentsRoom'
import ComponentSlide from '../components/componentsHome/ComponentSlide'
import ComponentsBooking from '../components/componentsHome/ComponentsBooking'
import ComponentsAbout from '../components/componentsHome/ComponentsAbout'
import ComponentsServices from '../components/componentsHome/ComponentsServices'
import ComponentsRestaurant from '../components/componentsHome/ComponentsRestaurant'
import ComponentsCounter from '../components/componentsHome/ComponentsCounter'
import Video from '../components/componentsHome/Video'
import HeaderWebsite from '../components/Common/HeaderWebsite'
import FooterWebsite from '../components/Common/FooterWebsite'
import Instagram from '../components/Common/Instagram'
const HomePage = (props) => {
  return (
    <div>
      <HeaderWebsite />
      <ComponentSlide />
      <ComponentsBooking />
      <ComponentsAbout />
      <ComponentsServices />
      <ComponentsRoom {...props} />
      <Video />
      <ComponentsRestaurant />
      <ComponentsCounter />
      <ComponentsBlog />
      <Instagram />
      <FooterWebsite />
    </div>
  )
}

export default HomePage
