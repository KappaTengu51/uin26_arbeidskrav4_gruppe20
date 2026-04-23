import { useEffect, useState } from "react"
import client from "./helpers/client"

import FrideProfile from "./components/FrideProfile"
export default function App(){
    const [sanityProducts, setSanityProducts] = useState(null)

    useEffect(() => {
        async function fetchProfiles() {
            const allProfiles = await client.fetch("*[_type == 'profiles']{_id, name, email,}")
            setSanityProducts(allProfiles)
            
        }
        fetchProfiles()
    },[])
    return(
        <div>
            {sanityProducts?.map(p => <FrideProfile key={p._id} p={p} />)}
        </div>
    )
}