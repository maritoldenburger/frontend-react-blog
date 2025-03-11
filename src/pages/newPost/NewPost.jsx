import "./NewPost.css"
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import calculateReadTime from "../../helpers/calculateReadTime.jsx";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log({
            ...data,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data.post),
            comments: 0,
            shares: 0
        });

        navigate("/posts");
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="new-post-form">
                <h1>Post toevoegen</h1>
                <label htmlFor="title-field">
                    Titel
                    <input
                        type="text"
                        id="title-field"
                        {...register("title", {
                            required: true,
                            message: "Dit veld is verplicht"
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
                            required: true,
                            message: "Dit veld is verplicht"
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
                            required: true,
                            message: "Dit veld is verplicht"
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
                            required: {
                                value: true,
                                message: "Dit veld is verplicht",
                            },
                            minLength: {
                                value: 300,
                                message: "De blogpost moet minimaal 300 tekens bevatten",
                            },
                            maxLength: {
                                value: 2000,
                                message: "De blogpost mag maximaal 2000 tekens bevatten",
                            },
                        })}
                    >
                    </textarea>
                    {errors.post && <p>{errors.post.message}</p>}
                </label>

                <button type="submit">
                    Toevoegen
                </button>
            </form>
        </>
    )
}

export default NewPost