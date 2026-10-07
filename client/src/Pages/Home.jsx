import { Link, useSearchParams, NavLink, useLocation } from "react-router-dom";
import "./pages.scss";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import { FiSearch } from "react-icons/fi";

function Home () {
    // 2. Initialize state for data, loading, and errors
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    const [ searchParams ] = useSearchParams();
    const currentTab = searchParams.get("category"); 
    const divRef = useRef(null);

    const location = useLocation();
    // console.log(currentTab);

    const [height, setHeight] = useState(0);
    // const divRef = useRef(null);

    useEffect(() => {
        // console.log('The URL has changed!', location);
        console.log(currentTab);

        // Define an async function to fetch data
        const fetchNotes = async () => {
            try {
                // Axios automatically resolves the JSON payload under response.data
                const response = await axios.get('http://localhost:4000', {
                    params: {
                        category: currentTab
                    }
                });

                setNotes(response.data); 
                setIsLoading(false);
            } catch (err) {
              setError(err.message || 'Something went wrong');
              // setIsLoading(true);
            } finally {
              setIsLoading(false);
              // console.log(notes);
            }
        };
      
        fetchNotes();
  
        return () => {
            setIsLoading(true);
        }
                
    }, [location.search]);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchNotes = async () => {
          try {
            const response = await axios.get('http://localhost:4000', {
                params: {
                    category: currentTab
                }
            });
              setNotes(response.data); 
              setIsLoading(false);
          } catch (err) {
            setError(err.message || 'Something went wrong');
            // setIsLoading(true);
          } finally {
            setIsLoading(false);
            // console.log(notes);
          }
        };
    
        fetchNotes();

        return () => {
            setIsLoading(true);
        }
      }, []);

    return (
        <div className="home-root-container">
            <div ref={divRef} className="nav-and-tools-container">
                <Navbar />
            </div>

            <div className="home-nav-container">
                <div className="home-nav-wrapper">
                    <div className="nav-items-wrapper">
                        <NavLink 
                            to="/"
                            className={({ isActive }) => 
                                isActive && currentTab === null ? 
                                "nav-link active" : "nav-link"
                            }
                        >
                            <h4>All</h4>
                        </NavLink>
                        <NavLink 
                            to="?category=favourites" 
                            className={({ isActive }) => 
                                isActive && currentTab === "favourites" ? "nav-link active" : "nav-link"
                            }
                        >
                            <h4>Favourites</h4>
                        </NavLink>
                    </div>
                    <div className="nav-search-container">
                        <div 
                            className= {
                                isFocused ?
                                    "nav-search-wrapper focused"
                                :   "nav-search-wrapper"
                            }
                        >
                            <FiSearch className="search icon" />
                            <input 
                                type="text" 
                                className="search-input" 
                                placeholder="Search..."
                                onFocus={()=>setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-container">
                {/* {height} */}
                <div className="home-wrapper">
                    <div className="main-wrapper">
                        {
                            isLoading ? 
                                <>
                                    <div className="note-wrapper loading">
                                        <h4></h4>
                                        <p className="one"></p>
                                        <p className="two"></p>
                                    </div>

                                    <div className="note-wrapper loading">
                                        <h4></h4>
                                        <p className="one"></p>
                                        <p className="two"></p>
                                    </div>

                                    <div className="note-wrapper loading">
                                        <h4></h4>
                                        <p className="one"></p>
                                        <p className="two"></p>
                                    </div>
                                </>
                            : <>
                                {notes.map((note)=> (
                                    <Link className="link" key={note.noteId} to={`notes/${note.noteId}`}>
                                        <div className="note-wrapper" >
                                            <h3>{note.title}</h3>
                                            <p>{note.main}</p>
                                        </div>
                                    </Link>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
