import React from 'react';
import logo from '../../../../public/assests/logo.png'
import Image from 'next/image';
import twitter from '../../../../public/assests/x.png';
import linkedin from '../../../../public/assests/linkedin.png';
import instagram from '../../../../public/assests/instagram.png';
import facebook from '../../../../public/assests/facebook.png';


const Footer = () => {
    return (
        <footer className="mt-10">
            <div className='flex justify-between border-b-[1.4px] pb-[34px]'>
                <div>
                    <Image src={logo} width={120} height={23} alt='logo'></Image>
                    <p className='text-[12px] text-[#989898] mt-4'>
                        Beautifully designed, expertly crafted Flutter components and templates, to jumpstart <br />
                        your projects and speed up your development process.
                    </p>
                    <div className='flex gap-2 my-4'>
                        <a className='' href="
    ">
                            <Image className='w-8 h-8 p-2 rounded-full bg-black text-white' src={twitter} alt='X'></Image>
                        </a>
                        <a className='' href="
    ">
                            <Image className='w-8 h-8 p-2 rounded-full bg-black text-white' src={linkedin} alt='X'></Image>
                        </a>
                        <a className='' href="
    ">
                            <Image className='w-8 h-8 p-2 rounded-full bg-black text-white' src={instagram} alt='X'></Image>
                        </a>
                        <a className='' href="
    ">
                            <Image className='w-8 h-8 p-2 rounded-full bg-black text-white' src={facebook} alt='X'></Image>
                        </a>
                    </div>

                </div>
                <div className='font-[14px] flex '>
                    <div className='grid grid-col mr-10 gap-y-2'>
                        <p className='font-bold'>Explore</p>
                        <p>Blog</p>
                        <p>Templates</p>
                        <p>Screen</p>
                    </div>
                    <div className='grid grid-col gap-y-2'>
                        <p className='font-bold'>Support</p>
                        <p>Pricing</p>
                        <p>Become a Sponsor</p>
                        <p>Hire Top Flutter Devs</p>
                    </div>
                </div>

            </div>


            <div className='flex justify-between text-[#989898] py-5'>
                <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
                <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
            </div>
        </footer >
    );
};

export default Footer;