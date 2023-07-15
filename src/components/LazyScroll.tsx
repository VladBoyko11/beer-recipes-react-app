import React from 'react';
import BeerRecipes from "./BeerRecipes"

const LazyScroll: React.FC = () => {
    return <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <BeerRecipes index={0} />
            </div>
            <div className="carousel-item">
                <BeerRecipes index={5} />
            </div>
            <div className="carousel-item">
                <BeerRecipes index={10} />
            </div>
        </div>
        <button className="carousel-control-prev carouselBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next carouselBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}

export default LazyScroll