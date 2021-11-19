import React from 'react'
import FooterWebsite from '../components/Common/FooterWebsite'
import HeaderWebsite from '../components/Common/HeaderWebsite'
import AboutBanner from '../components/componentsAbout/AboutBanner'
import AboutContent from '../components/componentsAbout/AboutContent'

const AboutPage = () => {
    return (
        <div>
           <HeaderWebsite />
           <AboutBanner />
           <AboutContent />
           <FooterWebsite />
        </div>
    )
}

export default AboutPage
