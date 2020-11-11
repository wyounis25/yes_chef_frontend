import React from 'react'

import Review from "./Review"
import { useParams, useLocation} from "react-router-dom";



function Recipe() {
    const { id } = useParams()
    const location = useLocation()
    const myrecipe = location.state.recipe
    console.log(myrecipe)
    return (
        <div>
          <h2>{myrecipe.label}</h2> 
        </div>
    )
}

export default Recipe

