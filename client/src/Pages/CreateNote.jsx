// import Navbar from "../Components/Navbar";
import "./pages.scss";
import axios from "axios";
import { useState } from "react";

function CreateNote () {
    const [title, setTitle] = useState('');
    const [main, setMain] = useState('');
    // const [loading, setLoading] = useState(true);

    const createNote = async (e) => {
        e.preventDefault();
        const payload = { title, main };

        try {
            await axios
                .post('http://localhost:4000/createnote', payload)
                .then((response) => {
                    setTitle('')
                    setMain('')
                    console.log(response.data)
                });

            // console.log(response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        } finally {
            console.log('Done');
        }
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="add-note-container">
                <div className="add-note-wrapper">
                    <div className="heading-wrapper">
                        <input 
                            type="text" 
                            className="note-title"
                            placeholder="Note title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="main-wrapper">
                        <textarea 
                            className="note-editor"
                            placeholder="Write your note..."
                            value={main}
                            onChange={(e) => setMain(e.target.value)}
                            // readOnly
                        />
                    </div>
                    <div className="buttons-wrapper">
                        <div className="note-category">
                        </div>
                        <button 
                            onClick={createNote} 
                            className="create-note-btn"
                        >
                            Create Note
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNote;
