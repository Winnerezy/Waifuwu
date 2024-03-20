import { useContext } from "react"
import { WaifuContext } from "./type"

function Waifu(){
const image = useContext(WaifuContext)
  return(
    <main className="flex items-center justify-center">
    <img src={image} className="w-48"/>
    </main>

  )
}

export default Waifu