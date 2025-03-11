import "./NotFound.css"
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h3>Oeps! De pagina die je zoekt bestaat niet (meer).</h3>
            <button
                className="redirect-button"
                type="button"
                onClick={() => navigate('/')}>
                Naar de homepage
            </button>
        </div>
    )
}

export default NotFound