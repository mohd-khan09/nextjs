import React from 'react'
import Layout from '../components/layout'
import SearchBar from '../components/searchBar'
import ImageGrid from '../components/imagegrid'
const HomePage: React.FC = () => {
  return (
    <Layout>
      <SearchBar />
<ImageGrid/>
    </Layout>
  )
}

export default HomePage
