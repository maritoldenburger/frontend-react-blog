import "./Overview.css";
import posts from "../../constants/data.json";
import { Link } from "react-router-dom";

function Overview() {
    return (
        <>
            <h1>Bekijk alle {posts.length} blogs op het platform</h1>
                {posts.map(post => (
                <div key={post.id} className="post-tile">
                    <h2>
                        <Link className="title-link" to={`/posts/${post.id}`}>{post.title} </Link>
                        ({post.author})
                    </h2>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </div>
            ))}
        </>
    );
}

export default Overview;