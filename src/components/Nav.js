import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Nav.css';


function Nav() {

        // Defining useState

    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    

        // Executing functions for useState

    const handleClick =() => setClick(!click)

    const closeMobileMenu =() => setClick(false)

    const showButton =() =>{
        if(window.innerWidth<= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton();
    }, []);



    window.addEventListener('resize',showButton)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to='./Home' className='navbar-logo' onClick={closeMobileMenu}> My Brand <i className='fab fa-typo3' /></Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>

                         <li className='nav-item'> 
                        <Link to='./Home' className='nav-links' onClick= {closeMobileMenu}> Home </Link>
                        </li>

                        <li className='nav-item'> 
                        <Link to='./services' className='nav-links' onClick={closeMobileMenu}> Services </Link>
                        </li>

                        <li className='nav-item'> 
                        <Link to='./Contact' className='nav-links' onClick={closeMobileMenu}> Contact </Link>
                        </li>

                       
                        <li className='nav-item'> 
                        <Link to='./sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyles='btn--outline'> SIGN UP</Button>}
                </div>
            </div>
        </>
    )
}

export default Nav
       
