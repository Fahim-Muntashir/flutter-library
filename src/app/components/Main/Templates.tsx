import Image from "next/image";
import Image1 from '../../../../public/assests/templates/TV1.jpg'
import Image2 from '../../../../public/assests/templates/TV2.png'
import Image3 from '../../../../public/assests/templates/TV3.png'
import Image4 from '../../../../public/assests/templates/TV4.png'
import Image5 from '../../../../public/assests/templates/TV5.png'
import Image6 from '../../../../public/assests/templates/TV6.png'
import Mobile from '../../../../public/assests/mobile.svg'
import Download from '../../../../public/assests/download.svg'
const templatesDetails = [
    {
        image: Image1,
        title: "Foodly Restaurent App Template",
        like: 28,
        download: 546,
    },
    {
        image: Image2,
        title: "Flutter Animation Template",
        like: 28,
        download: 546,
    },
    {
        image: Image3,
        title: "Flutter Animation Template",
        like: 28,
        download: 546,
    },
    {
        image: Image4,
        title: "Flutter Animation Template",
        like: 28,
        download: 546,
    },
    {
        image: Image5,
        title: "Flutter Animation Template",
        like: 28,
        download: 546,
    },
    {
        image: Image6,
        title: "Flutter Animation Template",
        like: 28,
        download: 546,
    },
]
console.log(templatesDetails[0].image);
const Templates = () => {
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-[24px]">Templates</h1>

                <a href="" className="text-[12px] text-[#989898]">See all</a>
            </div>


            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[16px] pt-[16px]">
                {templatesDetails.map((template, index) => (
                    <div key={index}>
                        <Image src={template.image} width={398.67} height={226} alt={template.title} className="mb-[8px]" />
                        <div className="flex justify-between w-[398px]">
                            <p className="text[16px] font-bold">{template.title}</p>
                            <div className="text-[14px] font-semibold flex">
                                <div className="flex items-center mr-[8px]">
                                    <Image src={Mobile} height={
                                        13.33} width={9.71} alt="mobile icon" className="mr-[7.14px]"></Image>


                                    <p>{template.like} </p>
                                </div>

                                <div className="flex items-center">
                                    <Image className="mr-[6px]" src={Download} height={
                                        10} width={13.71} alt="mobile icon"></Image>
                                    <p> {template.download}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default Templates;