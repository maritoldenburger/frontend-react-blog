import {useParams, Link} from "react-router-dom";
import "./Blogpost.css"
import formatDate from "../../helpers/formatDate.jsx";
import {Clock, CaretLeft} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import axios from "axios";

function Blogpost() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPost = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            console.log(response.data);
            setPost(response.data);
        } catch (err) {
            setError(err);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPost()
    }, [id]);

    return (
        <div className="post-container">
            {loading && <span className="loader"/>}
            {error && <p>Oeps! Er is iets misgegaan bij het ophalen van de posts. Probeer het opnieuw.</p>}
            {post && post.title && post.subtitle ? (
                <>
                    <h1>{post.title}</h1>
                    <h2>{post.subtitle}</h2>
                    <p>Geschreven door {post.author} op {formatDate(post.created)}</p>
                    <p className="read-time">
                        <Clock color="#50535C" size={15}/>
                        {post.readTime} minuten lezen
                    </p>
                    <p>{post.content}</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    <Link to="/posts" className="blogpost-link">
                        <CaretLeft color="#38E991" size={18}/>
                        <p>Terug naar de overzichtspagina</p>
                    </Link>
                </>
            ) : (
                <p>Geen post gevonden. Probeer het opnieuw.</p>
            )}
        </div>
    );
}

export default Blogpost;