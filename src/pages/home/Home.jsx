


import React from 'react'
import Btn from '../../components/button/Btn'
import Banner from './banner/Banner'
import JobList from './job_category_list/JobList'
import FeaturedJob from './featured_jogs/FeaturedJob'

const Home = () => {
  return (
    <div>
      <Banner />
      <JobList />
      <FeaturedJob />
    </div>
  )
}

export default Home
