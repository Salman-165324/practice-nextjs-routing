import React from "react";

const page = ({ params }: { params: { productsId: string } }) => {
  return (
    <div>
      <h2 className="headingText">
        This is the product page of product{params.productsId} 
      </h2>
    </div>
  );
};

export default page;
