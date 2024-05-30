


import React from 'react'
import Btn from '../../components/button/Btn'
import Banner from './banner/Banner'
import JobList from './job_category_list/JobList'
import FeaturedJob from './featured_jogs/FeaturedJob'
import {Helmet} from 'react-helmet-async'
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
      <JobList />
      <FeaturedJob />
    </div>
  )
}

export default Home
