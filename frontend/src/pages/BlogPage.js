import React from 'react'
import FooterWebsite from '../components/Common/FooterWebsite'
import HeaderWebsite from '../components/Common/HeaderWebsite'
import ComponentsBanner from '../components/componentsBlog/ComponentsBanner'
import ListBlog from '../components/componentsBlog/ListBlog'


const BlogPage = () => {
 return (
  <div>
   <HeaderWebsite />
   <ComponentsBanner />
   <ListBlog />
   <FooterWebsite />
  </div>
 )
}

export default BlogPage
