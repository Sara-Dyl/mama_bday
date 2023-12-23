// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import './Category.css'

// const Category = () => {
//     const { categoryName } = useParams();
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const loadImages = () => {
//             const context = require.context('./images', true, /\.(png|jpe?g|svg)$/);
//             const categoryImages = context.keys().filter(path => path.includes(`./${categoryName}/`));
//             setImages(categoryImages.map(path => context(path).default));
//         };

//         loadImages();
//     }, [categoryName]);


//     return (
//         <div className="category-page">
//             <h1>{categoryName} Photos</h1>
//             <div className="photo-grid">
//                 {images.map((src, index) => (
//                     <img key={index} src={src} alt={`${categoryName}-${index}`} />
//                 ))}
//             </div>
    
//         </div>
//     );
// };

// export default Category;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Category.css'

const Category = () => {
    const { categoryName } = useParams();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = () => {
            // Adjust the path according to your project structure
            const context = require.context('../pages/images', true, /\.(png|jpe?g|svg)$/);
            const categoryImages = context.keys().filter(path => path.includes(`./${categoryName}/`));
            setImages(categoryImages.map(path => context(path).default));
        };

        loadImages();
    }, [categoryName]);

    return (
        <div className="category-page">
            <h1>{categoryName} Photos</h1>
            <div className="photo-grid">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`${categoryName}-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Category;