import "./Home.css"
import billboard from "/src/assets/blogventure_billboard.png"

function Home() {
    return (
        <div className="homepage">
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <figure className="homepage-image">
                <img src={billboard} alt="Afbeelding van een schreeuwerig billboard"/>
                <figcaption>* En in billboards. Die zijn niet te missen namelijk.</figcaption>
            </figure>
        </div>
    )
}

export default Home