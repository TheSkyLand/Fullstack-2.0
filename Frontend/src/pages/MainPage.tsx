import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const MainPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("/")}>Main</button>
            <button onClick={() => navigate("/About")}>About</button>
            <button onClick={() => navigate("/Create")}>Create</button>
            

            <div>
                <button onClick={() => navigate("/Product/:id")}>Product</button>
            </div>


        </div>
    )
}

export default MainPage