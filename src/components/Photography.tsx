import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import styles
import "../assets/styles/components/Photography.css";
import Footer from "./Footer";

import {
  featuredWork,
  candidPortraits,
  foodPhotography,
  graduations,
  weddings,
} from "../utils/importImages";

type ImageArray = string[];
type Categories = {
  [key: string]: ImageArray;
};

const categories: Categories = {
  "Featured Work": featuredWork,
  "Candid Portraits & Moments": candidPortraits,
  "Food Photography": foodPhotography,
  "Graduations": graduations,
  "Weddings & Domestic Partnerships": weddings,
};

const Photography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Featured Work");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<ImageArray>([]);

  useEffect(() => {
    setLoading(true);
    const newImages = categories[activeCategory] || [];

    let loadedImages: string[] = [];
    let imageCount = 0;

    newImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCount++;
        if (imageCount === newImages.length) {
          setImages([...newImages]);
          setLoading(false);
        }
      };
      img.onerror = () => console.error("Failed to load image:", src);
    });

  }, [activeCategory]);

  const handleImageClick = (index: number) => {
    console.log("Clicked image index:", index);
    console.log("Image source:", images[index]);

    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="main-content">
      <div className="photography-container">
        <h1 className="photography-header">Photography Portfolio</h1>

        {/* Category Navigation */}
        <div className="category-nav">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category);
                setIsOpen(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid - Show Loader Until Images Load */}
        {loading ? (
          <div className="loading-message">Loading photos...</div>
        ) : (
          <div className="gallery-grid fade-in">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${activeCategory} Image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        )}

        {/* Lightbox for Fullscreen View */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex || 0}
        />
      </div>

      {/* Footer Outside the Container for Full Width */}
      <Footer />
    </div>
  );
};

export default Photography;