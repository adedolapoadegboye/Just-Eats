import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  /* console.log(data); */
  const [foods, setFoods] = useState(data);

  /* Filter by type - burgers, pizza */

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  /* Filter by price - burgers, pizza */

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640] m-auto px-4 py-10">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row - Start */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type - Start*/}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={()=>setFoods(data)} className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
              All
            </button>
            <button onClick={()=>filterType('burger')} className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              Burger
            </button>
            <button onClick={()=>filterType('pizza')} className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
              Pizza
            </button>
            <button onClick={()=>filterType('salad')} className="border-orange-600 m-1 text-orange-600 hover:text-white hover:bg-orange-600">
              Salads
            </button>
            <button onClick={()=>filterType('chicken')} className="border-orange-600 m-1 text-orange-600 hover:text-white hover:bg-orange-600">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Type - End */}
        {/* Filter Price - Start*/}
        <div>
          <p className="font-bold text-gray-700 text-end">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[390px] w-full">
            <button onClick={()=>filterPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Filter Row - End*/}
      {/* Food list - Start*/}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-sm hover:scale-105 duration-300"
          >
            <img
              className="object-cover w-full rounded-t-lg h-[200px] "
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p>{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Food list - End*/}
    </div>
  );
};

export default Food;
