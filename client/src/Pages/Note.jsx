// import Navbar from "../Components/Navbar";
import "./pages.scss";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineRead } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";

function Note () {
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [main, setMain] = useState('');
    const [editing, setEditing] = useState(false);

    const { id } = useParams();
    const titleRef = useRef(null);

    const toggleReadEdit = () => {
        setEditing(!editing);
        if(editing == false) {
            titleRef.current.focus();
        }
    }

    const updateNote = async () => {
        const payload = { title, main };

        try {
            const response = await axios.put(`http://localhost:4000/notes/${id}`, payload);
            console.log(response.data);
        } catch (err) {
            console.log(err.message || 'Something went wrong');
        }
    }

    const deleteNote = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/notes/${id}`);
            console.log('Deleted successfully:', response.status);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    useEffect(() => {
        // Define an async function to fetch data
        const fetchNote = async () => {
          try {
            // Axios automatically resolves the JSON payload under response.data
            const response = await axios.get(`http://localhost:4000/notes/${id}`);
            setTitle(response.data.title); 
            setMain(response.data.main);

            setIsLoading(false);
          } catch (err) {
            console.log(err.message || 'Something went wrong');
          } finally {
            setIsLoading(false);
            // console.log(notes);
          }
        };
    
        fetchNote();
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <div className="note-page-container">
                <div className="note-actions-wrapper">
                    <div className="actions-wrapper">
                        <div className="main-actions">
                            <button 
                                className="active"
                            >
                                <h4>
                                    {
                                        editing ? "Edit Mode"
                                            : "Read Mode"
                                    }
                                </h4>
                            </button>
                            
                        </div>
                        <div className="sub-actions">
                            <button 
                                onClick={toggleReadEdit} 
                                className="read-edit btn"
                            >
                                {
                                    editing ? <AiOutlineRead className="icon edit" />
                                        :  <BiEdit className="icon edit"/>
                                }
                            </button>
                            <button 
                                onClick={deleteNote} 
                                className="save-btn"
                            >
                                <SlOptionsVertical className="icon options" />
                            </button>
                            <button 
                                onClick={updateNote} 
                                className="upload-btn"
                            >
                                <h3>Update</h3>
                            </button>
                        </div>
                       
                    </div>
                </div>
                {
                    isLoading ?
                        <div className="note-main-wrapper">
                            <h3></h3>
                            <p className="one"></p>
                            <p className="two"></p>
                        </div>
                    :   
                        <div className="note-main-wrapper">
                            <div className="note-title-wrapper">
                                <input 
                                    type="text" 
                                    id="note-title"
                                    className="note-title"
                                    ref={titleRef}
                                    placeholder="Note title..."
                                    defaultValue={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    readOnly={!editing}
                                />
                            </div>
                            <div className="note-content-wrapper">
                                <textarea 
                                    id="note-content"
                                    className="note-content"
                                    placeholder="Write your note..."
                                    defaultValue={main}
                                    onChange={(e) => setMain(e.target.value)}
                                    readOnly={!editing}
                                />
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default Note;
