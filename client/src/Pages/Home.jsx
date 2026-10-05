import { Link } from "react-router-dom";
// import Navbar from "../Components/Navbar";
import "./pages.scss";
import axios from "axios";
import { useEffect, useState } from "react";

// impo


function Home () {

    // 2. Initialize state for data, loading, and errors
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchNotes = async () => {
          try {
              // Axios automatically resolves the JSON payload under response.data
              const response = await axios.get('http://localhost:4000');
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
      }, []);

    return (
        <>
            {/* <Navbar /> */}
            <div className="home-container">
                <div className="home-wrapper">
                    
                    <div className="home-nav-container">
                        <div className="nav-items-wrapper">
                            <h4>All</h4>
                            <h4>Latest</h4>
                            <h4>Favourites</h4>
                        </div>
                        <div className="nav-btn-wrapper">
                            <Link className="link" to="/createnote">
                                Add Note
                            </Link>
                        </div>
                    </div>
                
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
                                            <h4>{note.title}</h4>
                                            <p>{note.main}</p>
                                        </div>
                                    </Link>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
