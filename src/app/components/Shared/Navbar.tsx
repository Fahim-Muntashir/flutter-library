import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className='flex'>


                <input type="text" placeholder='Search....' className='w-[400px] h-[48px] px-[50px] py-[10px] rounded-[40px] bg-[#F0F0F0]' />
                <span className='relative -ms-[379px] mt-4'>
                    <svg width="16" height="17"
                        className='z-40'
                        viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 1.41663C4.63135 1.41663 1.90054 4.14743 1.90054 7.51604C1.90054 10.8847 4.63135 13.6155 7.99999 13.6155C11.3686 13.6155 14.0994 10.8847 14.0994 7.51604C14.0994 4.14743 11.3686 1.41663 7.99999 1.41663ZM0.650543 7.51604C0.650543 3.45708 3.94099 0.166626 7.99999 0.166626C12.0589 0.166626 15.3494 3.45708 15.3494 7.51604C15.3494 9.75513 14.3481 11.7604 12.7687 13.1084L14.8932 15.823C15.106 16.0949 15.0581 16.4877 14.7862 16.7004C14.5144 16.9131 14.1216 16.8652 13.9089 16.5934L11.7517 13.837C10.6535 14.4903 9.37058 14.8655 7.99999 14.8655C3.94099 14.8655 0.650543 11.575 0.650543 7.51604Z" fill="#111111" />
                    </svg>
                </span>


            </div>
            <div className='flex gap-[16px]'>
                <button><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.5C10.4142 0.5 10.75 0.83579 10.75 1.25V3.68421C10.75 4.09842 10.4142 4.43421 10 4.43421C9.5858 4.43421 9.25 4.09842 9.25 3.68421V1.25C9.25 0.83579 9.5858 0.5 10 0.5ZM2.92868 3.42892C3.22157 3.13602 3.69645 3.13602 3.98934 3.42892L5.35704 4.79662C5.64993 5.08951 5.64993 5.56438 5.35704 5.85728C5.06415 6.15017 4.58927 6.15017 4.29638 5.85728L2.92868 4.48958C2.63579 4.19668 2.63579 3.72181 2.92868 3.42892ZM17.0704 3.42892C17.3633 3.72181 17.3633 4.19668 17.0704 4.48958L15.7027 5.85728C15.4098 6.15017 14.9349 6.15017 14.642 5.85728C14.3491 5.56438 14.3491 5.08951 14.642 4.79662L16.0097 3.42892C16.3026 3.13602 16.7775 3.13602 17.0704 3.42892ZM5.35526 10.5C5.35526 7.93478 7.43478 5.85526 10 5.85526C12.5652 5.85526 14.6447 7.93478 14.6447 10.5C14.6447 13.0652 12.5652 15.1447 10 15.1447C7.43478 15.1447 5.35526 13.0652 5.35526 10.5ZM10 7.35526C8.2632 7.35526 6.85526 8.7632 6.85526 10.5C6.85526 12.2368 8.2632 13.6447 10 13.6447C11.7368 13.6447 13.1447 12.2368 13.1447 10.5C13.1447 8.7632 11.7368 7.35526 10 7.35526ZM0 10.5C0 10.0858 0.33579 9.75 0.75 9.75H3.18421C3.59842 9.75 3.93421 10.0858 3.93421 10.5C3.93421 10.9142 3.59842 11.25 3.18421 11.25H0.75C0.33579 11.25 0 10.9142 0 10.5ZM16.0658 10.5C16.0658 10.0858 16.4016 9.75 16.8158 9.75H19.25C19.6642 9.75 20 10.0858 20 10.5C20 10.9142 19.6642 11.25 19.25 11.25H16.8158C16.4016 11.25 16.0658 10.9142 16.0658 10.5ZM14.6576 15.1571C14.9505 14.8642 15.4254 14.8642 15.7183 15.1571L17.0713 16.5102C17.3642 16.803 17.3642 17.2779 17.0713 17.5708C16.7784 17.8637 16.3035 17.8637 16.0106 17.5708L14.6576 16.2178C14.3647 15.9249 14.3647 15.45 14.6576 15.1571ZM5.34242 15.1574C5.63531 15.4503 5.63531 15.9251 5.34242 16.218L3.98939 17.571C3.6965 17.8639 3.22163 17.8639 2.92873 17.571C2.63584 17.2782 2.63584 16.8033 2.92873 16.5104L4.28176 15.1574C4.57465 14.8645 5.04953 14.8645 5.34242 15.1574ZM10 16.5658C10.4142 16.5658 10.75 16.9016 10.75 17.3158V19.75C10.75 20.1642 10.4142 20.5 10 20.5C9.5858 20.5 9.25 20.1642 9.25 19.75V17.3158C9.25 16.9016 9.5858 16.5658 10 16.5658Z" fill="#111111" />
                </svg>
                </button>
                <button className='btn border'>Login</button>
                <button className='btn bg-black text-white'>Get Pro</button>
            </div>
        </div>
    );
};

export default Navbar;