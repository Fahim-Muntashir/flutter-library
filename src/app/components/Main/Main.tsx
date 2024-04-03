import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Templates from './Templates';
import Articles from './Articles';
import Screens from './Screens';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='col-span-10 px-[20px] py-[16px] '>
            <Navbar></Navbar>
            <Banner></Banner>
            <Templates></Templates>
            <Articles></Articles>
            <Screens></Screens>
            <Footer></Footer>
        </div>
    );
};

export default Main;