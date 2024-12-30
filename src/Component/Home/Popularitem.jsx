import { useEffect, useState } from "react"
import SectionTitle from "../SharedPage/SectionTitle"
import MainItem from "../SharedPage/MainItem"

const Popularitem = () => {

    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
             const popularItems = data.filter(item => item.category == 'popular');
             setMenu(popularItems)
        })
    },[])
  return (
    <div className="my-5">
        <SectionTitle sub="Check it out" heading='FROM OUR MENU'></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 border p-2 gap-6">
            {
                menu.map( item => <MainItem key={item._id} item = {item}></MainItem>)
            }
        </div>
    </div>
  )
}

export default Popularitem