// import Navbar from "../Components/Navbar";
import "./pages.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Note () {
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [main, setMain] = useState('');

    const { id } = useParams();

    const editNote = () => {
        console.log({title, main});
        setEditing(true);
    }

    const updateNote = async () => {
        const payload = { title, main };

        try {
            // setLoading(true);
            // Axios automatically resolves the JSON payload under response.data
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
            setLoading(true);
            // Axios automatically resolves the JSON payload under response.data
            const response = await axios.get(`http://localhost:4000/notes/${id}`);
            setTitle(response.data.title); 
            setMain(response.data.main);
          } catch (err) {
            console.log(err.message || 'Something went wrong');
          } finally {
            setLoading(false);
            // console.log(notes);
          }
        };
    
        fetchNote();
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <div className="actions-container">
                <div className="actions-wrapper">
                    <div className="sub-actions">
                        <button 
                            onClick={deleteNote} 
                            className="save-btn"
                        >
                            Delete
                        </button>
                        <button 
                            onClick={updateNote} 
                            className="update-btn"
                        >
                            Update
                        </button>
                    </div>
                    <div className="main-actions">
                        <button 
                            onClick={editNote} 
                            className="read-btn"
                        >
                            Read
                        </button>
                        <button 
                            onClick={editNote} 
                            className="edit-btn"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <div className="add-note-container">
                <div className="add-note-wrapper">
                    <div className="heading-wrapper">
                        <input 
                            type="text" 
                            className="note-title"
                            placeholder="Note title..."
                            defaultValue={title}
                            onChange={(e) => setTitle(e.target.value)}
                            readOnly={!editing}
                        />
                    </div>
                    <div className="main-wrapper">
                        <textarea 
                            className="note-editor"
                            placeholder="Write your note..."
                            defaultValue={main}
                            onChange={(e) => setMain(e.target.value)}
                            readOnly={!editing}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note;
