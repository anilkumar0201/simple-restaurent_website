import React from 'react'
import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <h1 className="Heading">Top Dishes</h1>
                <Featured />
                <h1 className="homeTitle">Our Newest recipies</h1>
                <PropertyList />
                <h1 className="homeTitle">The Food at your Doorsteps</h1>
                <FeaturedProperties />
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}
export default Home;