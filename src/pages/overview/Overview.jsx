import "./Overview.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Overview() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/posts");
            setPosts(response.data);
        } catch (err) {
            setError(err);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1>Bekijk alle {posts.length} blogs op het platform</h1>
            {loading && <span className="loader" />}
            {error && <p>Oeps! Er is iets misgegaan bij het ophalen van de posts. Probeer het opnieuw.</p>}
            {posts.length > 0 && (
                posts.map(post => (
                    <div key={post.id} className="post-tile">
                        <h2>
                            <Link className="title-link" to={`/posts/${post.id}`}>
                                {post.title}
                            </Link> ({post.author})
                        </h2>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </div>
                ))
            )}
        </>
    );
}

export default Overview;