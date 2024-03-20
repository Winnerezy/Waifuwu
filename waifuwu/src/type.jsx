import { useEffect, useState } from "react"

export default function Type(){
    const [types, setTypes] = useState('sfw')
    const [category, setCategory] = useState('waifu')

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
            console.log(ans)
        }
        FetchWaifu()
    }, [types, category])

    return (
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
    )
}