import "./components.scss";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { RiQuillPenAiLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";


function Navbar () {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('Navbar')
    }, []);

    return (
        <div className="navbar-container">
             <div className="navbar-wrapper">
                <div className="nav-title-wrapper">
                    <Link to="/" className="home-btn link">
                        <h3>📒NoteBook</h3>
                    </Link>
                </div>
                <div className="nav-actions-wrapper">
                    <Link to="/createnote" className="create-note btn">
                        {/* <RiQuillPenAiLine className="quill icon" /> */}
                        <h3>Create Note</h3>
                    </Link>
                    <button className="option-btn">
                        <SlOptionsVertical className="icon options" />
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;
