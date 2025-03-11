import {useParams, Link} from "react-router-dom";
import posts from "../../constants/data.json";
import "./Blogpost.css"
import formatDate from "../../helpers/formatDate.jsx";
import {Clock, CaretLeft} from "@phosphor-icons/react";

function Blogpost() {
    const {id} = useParams();
    const post = posts.find(post => post.id === parseInt(id));
    const date = formatDate(post.created);

    return (
        <div className="post-container">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <p>Geschreven door {post.author} op {date}</p>
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
        </div>
    )
}

export default Blogpost;