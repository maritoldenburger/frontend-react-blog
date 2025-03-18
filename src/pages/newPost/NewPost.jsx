import "./NewPost.css"
import {useForm} from "react-hook-form";
import calculateReadTime from "../../helpers/calculateReadTime.jsx";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");

    async function handleFormSubmit(data) {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/posts", {
                ...data,
                created: new Date().toISOString(),
                readTime: calculateReadTime(data.post),
                comments: 0,
                shares: 0
            });
            setId(response.data.id);
            console.log("De blogpost is succesvol toegevoegd!", response.data);
        } catch (err) {
            setError(err);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {id ? (
                <p className="post-success">
                    De blogpost is succesvol toegevoegd.
                    Je kunt deze <Link to={`/post/${id}`}>hier</Link> bekijken.
                </p>
            ) : (
                <form onSubmit={handleSubmit(handleFormSubmit)} className="new-post-form">
                    <h1>Post toevoegen</h1>
                    <label htmlFor="title-field">
                        Titel
                        <input
                            type="text"
                            id="title-field"
                            {...register("title", {
                                required: "Dit veld is verplicht",
                            })}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </label>

                    <label htmlFor="subtitle-field">
                        Subtitel
                        <input
                            type="text"
                            id="subtitle-field"
                            {...register("subtitle", {
                                required: "Dit veld is verplicht",
                            })}
                        />
                        {errors.subtitle && <p>{errors.subtitle.message}</p>}
                    </label>

                    <label htmlFor="author-field">
                        Naam en achternaam
                        <input
                            type="text"
                            id="author-field"
                            {...register("author", {
                                required: "Dit veld is verplicht",
                            })}
                        />
                        {errors.author && <p>{errors.author.message}</p>}
                    </label>

                    <label htmlFor="post-field">
                        Blogpost
                        <textarea
                            id="post-field"
                            rows="10"
                            cols="25"
                            {...register("post", {
                                required: "Dit veld is verplicht",
                                minLength: {
                                    value: 300,
                                    message: "De blogpost moet minimaal 300 tekens bevatten",
                                },
                                maxLength: {
                                    value: 2000,
                                    message: "De blogpost mag maximaal 2000 tekens bevatten",
                                },
                            })}
                        />
                        {errors.post && <p>{errors.post.message}</p>}
                    </label>

                    <button type="submit">
                        Toevoegen
                    </button>
                    {error && <div className="post-error">
                        <p>Oeps! Er is iets misgegaan bij het versturen van de post. Probeer het opnieuw.</p>
                    </div>}
                    </form>
                        )}
        </>
    );
}

export default NewPost