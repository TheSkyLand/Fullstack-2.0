import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const MainPage = () => {
const navigate = useNavigate()

    return (
        <div>
            sagsa
            <button onClick={() => navigate("/About")}>sagas</button>
        </div>
    )
}

export default MainPage