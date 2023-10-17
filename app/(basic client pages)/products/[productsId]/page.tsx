import React from "react";

const page = ({ params }: { params: { productsId: string } }) => {
  return (
    <div>
      <h2 className="headingText">
        This is {params.productsId} no product page
      </h2>
    </div>
  );
};

export default page;
