import React, {useState} from "react";
import {NavLinks} from "../navLinks/NavLinks";
import {VscMenu} from "@react-icons/all-files/vsc/VscMenu";
import {GrClose} from "@react-icons/all-files/gr/GrClose";

export const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const hamburgerIcon = <VscMenu className='Hamburger' onClick={() => setOpen(!open)}/>
    const closeIcon = <GrClose className='Hamburger' onClick={() => setOpen(!open)}/>

    return (
        <div>
            <nav className='MobileNavigation'>
                {open ? closeIcon : hamburgerIcon}
                {open && <NavLinks/>}
            </nav>
        </div>
    )
}


/*
* font-size: 27px;
  margin-left: 26px;
* */

