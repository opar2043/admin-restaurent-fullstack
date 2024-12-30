

const MainItem = ({item}) => {
    const {name,price,recipe,image} = item
  return (
    <div className="flex  py-2">
        <img src={image} className="w-16 rounded-xl" />
        <div className=" ml-2">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-sm font-semibold">{recipe}</p>
        </div>
        <p className="text-xl font-semibold text-yellow-500">{price}</p>
    </div>
  )
}

export default MainItem