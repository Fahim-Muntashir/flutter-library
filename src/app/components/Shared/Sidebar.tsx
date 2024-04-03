import Image from "next/image";
import Logo from '../../../../public/assests/logo.png'
import DiscoverIcon from '../../../../public/assests/SidebarIcons/6.png'
import uiIcon from '../../../../public/assests/SidebarIcons/1.png'
import screenIcon from '../../../../public/assests/SidebarIcons/2.png'
import articleIcon from '../../../../public/assests/SidebarIcons/3.png'
import sponserIcon from '../../../../public/assests/SidebarIcons/4.png'
import hireIcon from '../../../../public/assests/SidebarIcons/5.png'

const Sidebar = () => {
    return (
        <div className="col-span-2">
            <Image width={150} className="my-7 mx-4" src={Logo} alt="logo"></Image>

            <ul className="grid gap-y-2">
                <li className="side-link bg-[#f0f0f0] text-black flex items-center">
                    <Image className="w-4 h-4" src={DiscoverIcon} alt="icon"></Image><a className="ms-2" href="">
                        Discover</a>
                </li>
                <li className="side-link flex items-center">
                    <Image className="w-4 h-4" src={uiIcon} alt="icon"></Image><a className="ms-2" href="">
                        UI Kits</a>
                </li>
                <li className="side-link flex items-center">
                    <Image className="w-4 h-4" src={screenIcon} alt="icon"></Image><a className="ms-2" href="">
                        Screens</a>
                </li>
                <li className="side-link flex items-center">
                    <Image className="w-4 h-4" src={articleIcon} alt="icon"></Image><a className="ms-2" href="">
                        Articles</a>
                </li>
                <li className="side-link flex items-center">
                    <Image className="w-4 h-4" src={sponserIcon} alt="icon"></Image><a className="ms-2" href="">
                        Become Sponsor</a>
                </li>
                <li className="side-link flex items-center">
                    <Image className="w-4 h-4" src={hireIcon} alt="icon"></Image><a className="ms-2" href="">
                        Hire Flutter Dev</a>
                </li>


            </ul>

            <div className="mx-4 mt-5">
                <p className="font-bold">All Screens</p>
                <div className="p-3 text-[#989898] grid gap-y-2 ">
                    <p className="flex justify-between">
                        <span>
                            Sign in
                        </span>
                        <span>10</span>
                    </p>
                    <p className="flex justify-between">
                        <span>
                            Chat
                        </span>
                        <span>5</span>
                    </p>
                    <p className="flex justify-between">
                        <span>
                            Onboarding
                        </span>
                        <span>18</span>
                    </p>
                    <p className="flex justify-between">
                        <span>
                            E-commerce
                        </span>
                        <span>9</span>
                    </p>
                    <p className="flex justify-between">
                        <span>
                            Checkout      </span>
                        <span>10</span>
                    </p>
                    <p className="flex justify-between">
                        <span>
                            Error                        </span>
                        <span>16</span>
                    </p>

                </div>

            </div>

        </div>


    );
};

export default Sidebar;