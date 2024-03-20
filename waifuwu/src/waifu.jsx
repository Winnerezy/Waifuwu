import { useContext } from "react"
import { WaifuContext } from "./type"

function Waifu(){
const image = useContext(WaifuContext)
  return(
    <main className="flex items-center justify-center">
    <img src={image} className="w-96 rounded-2xl"/>
    </main>

  )
}

export default Waifu