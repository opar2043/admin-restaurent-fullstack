import Feature from "../Home/Feature"
import Popularitem from "../Home/Popularitem"
import Reviews from "../Home/Reviews"
import Banner from "../Pages/Banner"
import Category from "../Pages/Category"
import SectionTitle from "../SharedPage/SectionTitle"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <SectionTitle sub="From 11.00 AM  to 10.00 PM" heading='Order Online'></SectionTitle>
        <Category></Category>
        <Popularitem></Popularitem>
        <Feature></Feature>
        <Reviews></Reviews>
    </div>
  )
}

export default Home