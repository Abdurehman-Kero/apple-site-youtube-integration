import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'; 
import Four04 from '../Four04/Four04';
const Product = () => {
    // console.log(useParams());
    const {productId} = useParams();
    const [singleProduct, setSingleProduct]= useState(null);
    useEffect(()=>{
        const getSingleProduct = async ()=>{
            
            const response = await fetch(
              `http://localhost:3000/iphones/${productId}`
              
            );
            const data = await response.json();
            // console.log(response);
            setSingleProduct(data);
        }
        getSingleProduct();
    }, [])
 
// console.log(singleProduct);

    // console.log(singleProduct?.product_name);


      if (singleProduct) {
        console.log(singleProduct);
        return (
          <>
            <section className="internal-page-wrapper">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wraper font-weight-bold">
                      {singleProduct?.product_name}
                    </div>
                    <div className="brief-description">
                      {singleProduct?.brief_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${singleProduct?.starting_price}`}
                    </div>
                    <div className="monthly-price">
                      {singleProduct?.price_range}
                    </div>
                    <div className="product-details">
                      {singleProduct?.full_description}
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="product-image">
                      <img src={singleProduct?.product_img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      } else {
        return <Four04 />;
      }
}

export default Product