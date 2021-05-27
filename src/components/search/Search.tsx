import React, {useEffect, useState} from "react";
import './search.css'
import axios from "axios";
import search from '../../img/search.png';


export function Search() {

    const [search1,setSearch] = useState([])

    const setCart = () => {
        axios.get("https://jsonapi.org/")
            .then((res) => {
                // debugger
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
                    <input type="text" placeholder='Search our store' className='search__input'/>
                    <span className='search__form_block'>
                        <button className='search__form_btn'>
                            <span className='search__form_icon'>
                                <img src={search} alt={"search"}/>
                            </span>
                        </button>
                    </span>
                </form>
            </div>
            {/*{*/}
            {/*    search.map((card,index) => {*/}
            {/*        */}
            {/*    })*/}
            {/*}*/}
        </div>
    )
}