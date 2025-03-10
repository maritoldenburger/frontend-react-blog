import { useParams } from "react-router-dom";

function Blogpost() {
    const { id } = useParams();

    return (
        <>
            <h1>{id}</h1>
        </>
    )
}

export default Blogpost;