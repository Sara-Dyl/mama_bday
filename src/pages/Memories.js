import React, { useState } from 'react';


import './Memories.css';

const Memories = () => {
    const categories = ['Family', 'Kids', 'Pets', 'Mama & Sarcia'];
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryColors = {
        Family: '#EE9880', 
        Kids: '#F0C6C4',
        Pets: '#F0C45F', 
        'Mama & Sarcia': '#AECDD2' 
    };
    const categoryBorderColors = {
        Family: '#E97C5D',
        Kids: '#EAB1AE', 
        Pets: '#EEBB44', 
        'Mama & Sarcia': '#96BFC5' 
    };

    // Function to handle category button click
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Function to handle back button click
    const handleBackClick = () => {
        setSelectedCategory(null);
    };

    // Function to render category buttons
    const renderCategoryButtons = () => {
        return categories.map(category => (
            <button key={category} onClick={() => handleCategoryClick(category)} className="category-button"
            style={{ backgroundColor: categoryColors[category], borderColor: categoryBorderColors[category]}}>
                {category}
            </button>
        ));
    };

    // Function to render images of a category
    const renderImages = (category) => {
        // Assuming images are named in a predictable way, like family-1.jpg, kids-1.jpg, etc.
        // You can adjust the logic here based on your actual image file names and structure.
        const imageCount = 21; // Example count, adjust based on your images
        const images = [];

        for (let i = 1; i <= imageCount; i++) {
            const imageName = `${category.toLowerCase()}-${i}.jpeg`;
            const imagePath = require(`./images/${category}/${imageName}`);
            images.push(
                <div className="grid-cell" key={imageName}>
                    <img key={imageName} src={imagePath} alt={imageName} />
                </div>
            );
        }

        return images;
    };



    return (
        <div className="memories-page" > 
            {selectedCategory ? (
                <div>
                    <button className="category-button" onClick={handleBackClick}>Back</button>
                    <div className="images-container">
                        {renderImages(selectedCategory)}
                    </div>
                </div>
            ) : (
                <div className="category-buttons">
                    {renderCategoryButtons()}
                </div>
            )}
        </div>
    );
};

export default Memories;
