import React from 'react';


import Phone1 from '../../../../public/assests/Screen/Phone1.png'
import Phone2 from '../../../../public/assests/Screen/Phone2.png'
import Phone3 from '../../../../public/assests/Screen/Phone3.png'
import Phone4 from '../../../../public/assests/Screen/Phone4.png'
import Phone5 from '../../../../public/assests/Screen/Phone5.png'
import Phone6 from '../../../../public/assests/Screen/Phone6.png'
import Phone7 from '../../../../public/assests/Screen/Phone7.png'
import Phone8 from '../../../../public/assests/Screen/Phone8.png'
import Phone9 from '../../../../public/assests/Screen/Phone9.png'
import Phone10 from '../../../../public/assests/Screen/Phone10.png'
import filterImg from '../../../../public/assests/filter.svg'
import Image from 'next/image';


const Screens = () => {
    const buttonData = [
        'New', 'Populer', ' Onboarding ', 'Auth', 'Shop ', 'Chat', 'Top Verification', 'Dashboard', 'Food', 'Restaurant', 'Fitness'
    ]

    const screensData = [
        {
            img: Phone1,
            alt: "phone"
        },
        {
            img: Phone2,
            alt: "phone"
        },
        {
            img: Phone3,
            alt: "phone"
        },
        {
            img: Phone4,
            alt: "phone"
        },
        {
            img: Phone5,
            alt: "phone"
        },
        {
            img: Phone6,
            alt: "phone"
        },
        {
            img: Phone7,
            alt: "phone"
        },
        {
            img: Phone8,
            alt: "phone"
        },
        {
            img: Phone9,
            alt: "phone"
        },
        {
            img: Phone10,
            alt: "phone"
        },
    ]

    return (
        <div className=' mt-[40px]'>
            <div className="flex justify-between">
                <h1 className="text-[24px]">Screens</h1>

                <a href="" className="text-[12px] text-[#989898]">See all</a>
            </div>
            <div className='py-4  items-center flex'>
                <button className='py-2 px-4 flex items-center bg-[#F5F5F5] rounded-[20px]'>
                    <Image src={filterImg} alt="" className='mr-2' />  Filter
                </button>


                <span className='px-4'>
                    <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" x2="1" y2="24" stroke="#F0F0F0" stroke-width="2" />
                    </svg>
                </span>




                <div className='w-full grid grid-flow-col gap-x-1'>
                    <button className='py-1 px-3 flex items-center bg-black text-white rounded-[20px]'>
                        All
                    </button>

                    {
                        buttonData.map((button, index) => (
                            <button key={index} className='py-2 px-4 flex items-center border rounded-[20px]'>
                                {button}
                            </button>
                        ))
                    }

                    <button>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3246 0.76254C9.6363 0.48982 10.1102 0.52147 10.3829 0.83323L15.5643 6.7563C15.8116 7.0391 15.8116 7.4612 15.5643 7.7439L10.3829 13.667C10.1101 13.9788 9.6363 14.0104 9.3246 13.7377C9.0128 13.465 8.98119 12.9911 9.25389 12.6794L13.3472 8.0001H0.999756C0.585536 8.0001 0.249756 7.6643 0.249756 7.2501C0.249756 6.8359 0.585536 6.5001 0.999756 6.5001H13.3472L9.25389 1.82084C8.98119 1.50908 9.0128 1.03526 9.3246 0.76254Z" fill="#111111" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-[16px]'>
                {screensData.map((screen, index) => (

                    <Image key={index} src={screen.img} alt={screen.alt} className="mb-[8px]" />

                ))
                }
            </div>

        </div>
    );
};

export default Screens;