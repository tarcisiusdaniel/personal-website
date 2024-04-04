import './Navbar.css';
// import { BiMoon } from "react-icons/bi";
// import { BiSun } from "react-icons/bi";
import React, { useEffect, useState } from 'react';
import MenuIcon from '../../assets/menu-icon.png';
import MenuModal from './MenuModal';
import Sections from './Sections';

export default function Navbar() {
    const [screenDimension, setScreenDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [showModal, setShowModal] = useState(false);

    function handleToggleModal() {
        setShowModal(prevShowModal => !prevShowModal);
        console.log(showModal);
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        // if (showModal && screenDimension.width > 900) {
        //     const handleModalToggling = () => {
        //         handleToggleModal();
        //     }
        // }
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    

    return (
        <div className = "navbar" style = {{backgroundColor: 'black'}}>
            <h1 className = "logo-name line anim-typewriter">Tarcisius Daniel</h1>
            {screenDimension.width > 900 ?
            <Sections className = "shortcuts-options-navbar" parentSection = "navbar"/>
            :
            <button className = "menu-icon-clickable" onClick = {handleToggleModal}>
                <img src = {MenuIcon} className = "menu-icon"/>
            </button>
            
            }
            {
                showModal && <MenuModal handleToggleModal = {handleToggleModal}/>
            }
        </div>
    );
}