import axios from "axios"
import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"


const CreatePage = () => {
    const navigate = useNavigate()

    const [data, setData] = React.useState()



    return (
        <div>

            <button onClick={() => navigate("/Create/new")}>CREATE NEW</button>

            <button onClick={() => navigate("/Create/Edit/:id")}>EDIT</button>
            
        </div>
    )
}

export default CreatePage