import { createContext, useEffect, useState } from "react"
import Waifu from "./waifu"
export const WaifuContext = createContext()

export default function Type(){
    const [types, setTypes] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    const handleChange = (e) =>{
        setTypes(e.target.value)
    }

    const handleCategoryChange = (e) =>{
        setCategory(e.target.value)
    }

    useEffect(()=>{
        async function FetchWaifu(){
            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            const res = await fetch(`https://api.waifu.pics/${types}/${category}`, options)
            const ans = await res.json()
            setImage(ans.url)
        }
        if(types && category){
        FetchWaifu()
        }
    }, [types, category])

    return (
        <WaifuContext.Provider value={image}>
        <section className="flex flex-col gap-y-12">
        <div className="flex gap-x-8 items-center justify-center mt-8">
            <select value={types} name="types" id="types" className="bg-white rounded-2xl p-4 w-24 h-12 text-sm" onChange={handleChange}>
                <option value="sfw">SFW</option>
                <option value="nsfw">NSFW</option>
            </select>

            <select value={category} name="category" id="category" className="bg-white rounded-2xl p-4 w-36 h-12 text-sm" onChange={handleCategoryChange}>
                <option value="waifu">Waifu</option>
                <option value="neko">Neko</option>
                <option value="shinobu">Shinobu</option>
                <option value="megumin">Megumin</option>
                <option value="bully">Bully</option>
            </select>
        </div>

        <Waifu/>
        </section>
        </WaifuContext.Provider>


    )
}