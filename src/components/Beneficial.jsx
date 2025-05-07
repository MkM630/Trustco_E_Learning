import React from 'react';

const Beneficial = () => {
  return (
    <section className="mx-2 py-6">
      <div className="w-full flex flex-wrap justify-evenly items-center">
        <div className="w-full md:w-56 flex flex-col p-4 m-2">
          <div className="w-fit px-4 py-1 rounded-2xl bg-[#043A53] text-white">Beneficial</div>
          <h2 className="text-3xl font-semibold mt-6">
            Beneficial Elements
          </h2>
          <p className="mt-4">An awesome & powerful tools for your business, increase business revenue</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-56 p-4 m-2 flex flex-col bg-gray-100 rounded-xl">
            <img className="w-16" src="/assets/Illust 1.png" alt="Happy Customers" />
            <h2 className="text-lg font-semibold mt-4">
              Happy Customers
            </h2>
            <p className="mt-4">Productive agents are happy agents. Give them all the support tools and information
              they need to best serve your customers.</p>
          </div>
          <div className="w-full md:w-56 p-4 m-2 flex flex-col bg-gray-100 rounded-xl">
            <img className="w-16" src="/assets/Illust 2.png" alt="Best Integrations" />
            <h2 className="text-lg font-semibold mt-4">
              Best Integrations
            </h2>
            <p className="mt-4">Productive agents are happy agents. Give them all the support tools and information
              they need to best serve your customers.</p>
          </div>
          <div className="w-full md:w-56 p-4 m-2 flex flex-col bg-gray-100 rounded-xl">
            <img className="w-16" src="/assets/Illust 3.png" alt="Grow Without Problems" />
            <h2 className="text-lg font-semibold mt-4">
              Grow Without Problems
            </h2>
            <p className="mt-4">Productive agents are happy agents. Give them all the support tools and information
              they need to best serve your customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficial; 