// import React, { ReactNode, useEffect, useRef } from 'react';
// import { JsxElement } from 'typescript';
// import { beerRecipe } from '../store/store';
// import BeerRecipe from './BeerRecipe';

import BeerRecipes from "./BeerRecipes"

// interface ILazyScroll {
//     children: Array<beerRecipe>,
//     threshold: number,
//     onIntersect: () => void
// }

// const LazyScroll: React.FC<ILazyScroll> = ({ children, threshold = 0.5, onIntersect }) => {
//     const observerRef = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//         const options = {
//             threshold: threshold,
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     onIntersect();
//                 }
//             });
//         }, options);

//         if (observerRef.current) observer.observe(observerRef.current);

//         return () => {
//             observer.disconnect();
//         };
//     }, [threshold, onIntersect]);

//     return <div ref={observerRef}>{children.map(beerRecipe => <BeerRecipe {...beerRecipe}/>)}</div>;
// };

// export default LazyScroll


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