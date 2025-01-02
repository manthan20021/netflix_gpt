
import { useSelector } from "react-redux"


const Title = () => {
const selector = useSelector((store) => store.moves?.playMove)
if (!selector) return;

const mainMove = selector[2]

  return (
    <div className="absolute md:h-[800px] pt-[16%] pl-10 text-gray-300 w-[50%] bg-gradient-to-r from-black">

      <h1 className="sm:text-[40px] text-[15px] leading-[2.80vw] font-bold">{mainMove.name}</h1>
      <p className="hidden sm:block">{mainMove.overview}</p>
      <button className="bg-gray-100 sm:text-lg text-black sm:px-8 px-1 sm:py-2 sm:rounded-md rounded-sm opacity-50 mr-5 mt-5 hover:bg-gray-600">Play</button>
      <button className="bg-gray-800 sm:text-lg text-white sm:px-8 px-1 sm:py-2 sm:rounded-md rounded-sm opacity-50 mt-5 hover:bg-gray-600">More info</button>
    </div>
  )
}

export default Title
