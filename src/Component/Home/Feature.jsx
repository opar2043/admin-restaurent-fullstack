import SectionTitle from "../SharedPage/SectionTitle"
import featured from '../../assets/home/featured.jpg'
import './Feature.css'
const Feature = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);


  return (


    <div className="item my-10 py-10 text-white ">
        <SectionTitle sub="Check It Out" heading='From Our Menu'></SectionTitle>  
        <div className="flex flex-col w-2/3 mx-auto md:flex-row gap-5 justify-center">
            <img src={featured} className="w-[200px] rounded-md" />
            <div>
            <p className=" italic">{formattedDate}</p>
                    <p className=" leading-relaxed">
                        <span className="text-lg font-semibold block mb-2">March 20, 2023</span>
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                        Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
<button className="btn text-white btn-outline btn-wide border-0 hover:border-4 hover:border-white hover:bg-transparent border-b-4 border-white mt-3 delay-500 ">Default</button>
            </div>
        </div>
    </div>
  )
}

export default Feature