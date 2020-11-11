import React from 'react'

import Review from "./Review"
import { useParams} from "react-router-dom";



function Recipe() {
    const { id } = useParams()
    return (
        <div>
          <h2> You are in the {id} page </h2>  
        </div>
    )
}

export default Recipe

