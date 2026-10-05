import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register'
import CreateNote from './Pages/CreateNote';
import Note from './Pages/Note';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnote" element={<CreateNote />} />
      <Route path="/notes/:id" element={<Note />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;
