import React, {useEffect, useState} from "react";
import axios from "axios";

export function Search() {

    const [search,setSearch] = useState([])
    const setCart = () => {
        axios.get("https://jsonapi.org/")
            .then((res) => {
                debugger
                setSearch(res.data)
            })
    }
    useEffect(() => {
        setCart()
    },[])

    return(
        <div>
            <div className="form">
                <form  className="search__form">
                    <input type="text" placeholder='search' className='search__input'/>
                </form>
            </div>
            {
                search.map((card,index) => {

                })
            }
        </div>
    )
}