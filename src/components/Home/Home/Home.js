import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorkingItems from '../WorkingItems/WorkingItems';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyInfo></CompanyInfo>
            <Services></Services>
            <WorkingItems></WorkingItems>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;