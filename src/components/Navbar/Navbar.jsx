import { useState } from 'react';
import icon from '../../assets/icon.png'
import './index.css'
import close from '../../assets/close.png'
import three from '../../assets/three.png'
function Navbar() {
    const [open, setOpen] = useState(false)
    const openManager = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    const navTitles = ['How does it work?', 'Solutions', 'Pricing', 'Tools', 'Academy']
    return (
        <div className="navbar_container">
            <div>
                <img src={icon} alt="" />
            </div>
            <div className="titles_fath">
                {navTitles.map(item => {
                    return (
                        <div className="hover-underline-animation">
                            <p className='text_nav '>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className="bts_fath">
                <button className="button_freeStart">Get Started for Free</button>
                <p className="login_txt">Login</p>
            </div>
            <div className="menu-mobile" onClick={openManager}>
                {!open ? <img src={three} alt='alt' /> : <img src={close} alt='' />}
            </div>
            {open && (
                <div className="drawer">
                    <p>How does it work?</p>
                    <p>Solutions</p>
                    <p>Pricings</p>
                    <p>Tools</p>
                    <p>Academy</p>
                    <p>Login</p>
                    <button className="button_freeStart">Get Started for Free</button>
                </div>
            )}
        </div>
    );
}

export default Navbar;