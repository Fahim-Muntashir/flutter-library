import Image from "next/image";
import Image1 from '../../../../public/assests/articles/article1.jpg'
import Image2 from '../../../../public/assests/articles/article2.jpg'
import Image3 from '../../../../public/assests/articles/article3.jpg'

const articleDetails = [
    {
        image: Image1,
        title: "Learn Flutter animation",
        date: "Mar 24, 2024",
        category: "Animation"
    },
    {
        image: Image2,
        title: "Onboarding Screen with Carousel & Animated Dots ", date: "Mar 24, 2024",
        category: "Animation"

    },
    {
        image: Image3,
        title: "Parallax Scroll Effect with PageView in Flutter", date: "Mar 24, 2024",
        category: "Animation"

    }
]
console.log(articleDetails[0].image);
const Articles = () => {
    return (
        <div className=" mt-[40px]">
            <div className="flex justify-between">
                <h1 className="text-[24px]">Articles</h1>

                <a href="" className="text-[12px] text-[#989898]">See all</a>
            </div>


            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[16px] pt-[16px]">
                {articleDetails.map((template, index) => (
                    <div key={index}>
                        <Image src={template.image} width={398.67} height={226} alt={template.title} className="mb-[8px]" />
                        <div className="">
                            <p className="flex text-[14px] mt-[16px] mb-[8px] text-[#989898] items-center">{template.date}

                                <span className="my-[7px]mx-[8px]"><svg className="mx-[8px]" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#F0F0F0" />
                                </svg>
                                </span>

                                {template.category}</p>
                            <p className="text[16px] font-bold">{template.title}</p>

                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default Articles;