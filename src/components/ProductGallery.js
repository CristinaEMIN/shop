import React, { useState, useEffect } from "react";

const ProductGallery = ({ gallery }) => {

    const [mainImage, setMainImage] = useState(gallery[0]);

    useEffect(() => {
        
      }, [mainImage]);

return(
    <div className="productGallery">
        <img src={mainImage} className="productGalleryMainImg" />

        <div className="ProductImageGallery">
            {gallery.map((productimage , key) => (
                <img onClick={() => setMainImage(productimage)} key={key} className="productGalleryImg" src={productimage} />       
            )
            
            )}
        </div>
    </div>
)
}
export default ProductGallery
