import React from 'react'
import { useState, useEffect } from 'react';
const Iphone = () => {
    const [product, setproduct] = useState([]); 
    useEffect(() => {
      const getIphonesProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3000/iphones`);
          const data = await response.json(); 
            setproduct(data);  
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      getIphonesProduct();
    }, []);
   return (
  <> 

    {product?.map((singleProduct, i) => {
      var id = singleProduct.product_id;
      let name = singleProduct.product_name;
      let url = singleProduct.product_url;
      var description = singleProduct.brief_description;
      let plink = singleProduct.product_link;
      let img = singleProduct.product_img;
      let sprice = singleProduct.starting_price;
      let prange = singleProduct.price_range;

      return (
        <div 
          key={i} 
          className="d-flex flex-row row mb-4 p-3  "
        >

          <div className="col-md-6 text-center">
            <h1 className="fw-bold">{name}</h1>
            <p>{description}</p>
            <p className=" ">starting at {sprice}</p>
            <p className=" ">{prange}</p>
            <a 
              href={plink} 
              target="_blank"   
            >
              Learn more
            </a>
          </div>

          <div className="col-md-6 text-center">
            <img 
              src={img} 
              alt={description}  
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
          </div>

        </div>
      );
    })}
  </>
);
}

export default Iphone