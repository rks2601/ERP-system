import React from "react";

const BoxWrapper = ({children}) => {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-500 flex items-center" 
      style={{background:"rgba( 155, 155, 155, 0.25 )", 
      boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
      backdropFilter:"blur( 4px );",
      borderRadius:"10px",
      }}>
        {children}
    </div>
  );
};

export default BoxWrapper;