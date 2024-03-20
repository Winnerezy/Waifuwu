export default function Type(){
    return (
        <div>
            <select name="types" id="types" className="bg-white rounded-full p-4 w-24 h-12 text-sm">
                <option value="SFW">SFW</option>
                <option value="NSFW">NSFW</option>
            </select>

            <select name="cateory" id="category" className="bg-white rounded-full p-4 w-24 h-12 text-sm">
                <option value="waifu">Waifu</option>
                <option value="neko">Neko</option>
                <option value="shinobu">Shinobu</option>
                <option value="megumin">Megumin</option>
                <option value="bully">Bully</option>
            </select>
        </div>
    )
}