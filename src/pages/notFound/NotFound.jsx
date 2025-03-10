import './NotFound.css'
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Oeps! De pagina die je zoekt bestaat niet (meer).</h3>
            <button
                type="button"
                onClick={() => navigate('/')}>
                Naar de homepage
            </button>
        </>
    )
}

export default NotFound