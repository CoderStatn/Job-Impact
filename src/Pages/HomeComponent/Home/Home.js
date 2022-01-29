import React from 'react';
import Banner from '../Banner/Banner';
import CareerTips from '../CareerTips/CareerTips';
import EmployBanner from '../EmployerFeatures/EmployBanner';
import EmployerFeatures from '../EmployerFeatures/EmployerFeatures';
import Footer from '../Footer/Footer';
import JobCategories from '../JobCategories/JobCategories';
import JobFeatures from '../JobFeatures/JobFeatures';
import MemberShip from '../MemberShip/MemberShip';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import RegisterCompany from '../RegisterCompany/RegisterCompany';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <JobFeatures></JobFeatures>
            <EmployerFeatures></EmployerFeatures>
            <EmployBanner></EmployBanner>
            <MemberShip></MemberShip>
            <Testimonial></Testimonial>
            <RegisterCompany></RegisterCompany>
            <CareerTips></CareerTips>
            <Footer></Footer>
        </div>
    );
};

export default Home;