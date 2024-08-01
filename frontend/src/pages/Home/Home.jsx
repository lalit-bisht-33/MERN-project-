import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

function Home() {

    const [category,setcategory] = useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
    </div>
  )
}

export default Home
