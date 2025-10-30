import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const apiCall = () => {
  axios.get('http://localhost:3001/api/shop').then((data) => {
    console.log(data)
  })
}
const MainPage = () => {
const navigate = useNavigate()

    return (
        <div>
            sagsa


            <button onClick={() => navigate("/About")}>sagas</button>
            <button onClick={apiCall}>make api call</button>
        </div>
    )
}

export default MainPage