import React, { useState, useEffect, useCallback } from "react";

const ProductGalleryCart = ({ gallery }) => {

    const [mainImageIndex, setMainImageIndex] = useState(0);

    const onClickNext = useCallback(
    
        (e) => {
            if( mainImageIndex + 1 ===  gallery.length){
                setMainImageIndex(0);
            } else {
                setMainImageIndex( mainImageIndex + 1);
            }
          console.log(e.target)
        },
        [mainImageIndex]
      );

      const onClickPrevious = useCallback(
    
        (e) => {
            if(mainImageIndex -1 === -1){
                setMainImageIndex(gallery.length - 1 );
            } else{
                setMainImageIndex (mainImageIndex -1);
            }
          console.log(e.target)
        },
        [mainImageIndex]
      );

    useEffect(() => {
        
      }, [mainImageIndex]);

return(
    <div className="productGalleryCart">
        <img src={gallery[mainImageIndex]} className="productGalleryMainImg" />
        { console.log(gallery.length)}
        {gallery.length > 1 ? <> 
                                <button className="prevImg" onClick={onClickPrevious}> &lsaquo; </button>
                                <button className="nextImg" onClick={onClickNext}> &rsaquo; </button>
                            </> : <></> }
        

        {/* <div className="ProductImageGallery">
            {gallery.map((productimage , key) => (
                <img onClick={() => setMainImage(productimage)} key={key} className="productGalleryImg" src={productimage} />       
            )
            
            )}
        </div> */}
    </div>
)
}
export default ProductGalleryCart
