import React from 'react'
import FooterWebsite from '../components/Common/FooterWebsite'
import HeaderWebsite from '../components/Common/HeaderWebsite'
import BannerContact from '../components/componentsContact/BannerContact'
import FormContact from '../components/componentsContact/FormContact'


const ContactPage = () => {
 return (
  <div>
   <HeaderWebsite />
   <BannerContact />
   <FormContact />
   <FooterWebsite />
  </div>
 )
}

export default ContactPage
