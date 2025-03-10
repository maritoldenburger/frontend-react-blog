import './App.css'
import {Routes, Route} from 'react-router-dom';
import logo from './assets/logo-white.png'
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Navigation from "./components/navigation/Navigation.jsx"
import Blogpost from "./pages/blogpost/Blogpost.jsx"

function App() {
    return (
        <div className="page-container">
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewPost/>}/>
                    <Route path="/posts" element={<Overview/>}/>
                    <Route path="/posts/:id" element={<Blogpost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App
