import React from 'react';
export default function Header() {
  return (
    <div className="bg-white p-2 flex items-center justify-between pt-5 pb-5 fixed w-full px-5 border-b border-gray-400 ">
      <div className="flex items-center">

        <img
          src="/air.svg" // Replace with the path to your user logo image

          className="my-auto h-8 justify-center"
        />

      </div>
      <div className='hidden md:flex white  text-black rounded-full border left-[36%] hover:shadow-md shadow  '>
        <div className='flex mx-auto pr-5 pl-5 text-sm items-center font-semibold py-4 '>
          <button className={`hover:bg-white hover:text-black px-5 focus:outline-none  h-min border-r border-black `}>
            Anywhere
          </button>
          <button className={`hover:bg-white hover:text-black px-5 focus:outline-none h-min border-r border-black `}>
            Any week
          </button>
          <button className={` flex hover:bg-white hover:text-black px-5 focus:outline-none  `}>
            Add guests
            <img
              src="/search.svg" // Replace with the path to your user logo image

              className="flex my-auto h-5 pl-2 justify-center"
            />
          </button>

        </div>
      </div>
      <div className='flex'>
        Airbnb your home
        <img
          src="/world.svg" // Replace with the path to your user logo image

          className="flex my-auto h-5 pl-2 justify-center"
        />
      </div>
    </div>
  );
}
