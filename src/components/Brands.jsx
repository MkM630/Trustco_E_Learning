import React from 'react';

const Brands = () => {
  return (
    <section>
      <div className="w-full bg-white md:px-16 py-4 border flex flex-wrap justify-evenly items-center font-semibold">
        <p className="w-full text-center lg:w-auto">Trusted by the best in the world</p>
        <img className="mx-2 my-2 w-24" src="/assets/Google.png" alt="Google" />
        <img className="mx-2 my-2 w-24" src="/assets/Atlassian.png" alt="Atlassian" />
        <img className="mx-2 my-2 w-24" src="/assets/Canon.png" alt="Canon" />
        <img className="mx-2 my-2 w-24" src="/assets/Walmart.png" alt="Walmart" />
        <img className="mx-2 my-2 w-24" src="/assets/Amazon.png" alt="Amazon" />
      </div>
    </section>
  );
};

export default Brands; 