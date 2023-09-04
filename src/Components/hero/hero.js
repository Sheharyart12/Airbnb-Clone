import React from "react";

const ListingCard = ({ title, location, price, imageUrl }) => {
  return (
    <div >
    <div className=" rounded overflow-hidden ">
      <img src={imageUrl} alt={title} className="w-full h-56  rounded-2xl" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{location}</p>
        <p className="text-gray-800 font-semibold text-xl mt-2">${price} / night</p>
      </div>
    </div>
    </div>
  );
};

const AirbnbClone = () => {
  const listings = [
    {
      id: 1,
      title: "Cozy Cabin in the Woods",
      location: "Mountain View, CA",
      price: 150,
      imageUrl:"https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/f5cd57a3-b42d-4211-a73c-047c6cc2fc13.jpeg?im_w=720" ,
    },

    {
        id: 2,
        title: "Suite in the Swiss Alps",
        location: "Lake View , SW", 
        price: 280,
        imageUrl:"https://a0.muscache.com/im/pictures/e5d632ca-2e52-4cbc-8ecb-bc26fc400714.jpg?im_w=720" ,
      },
      {
        id: 3,
        title: "Downtown Loft with City Views",
        location: "New York, NY",
        price: 250,
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-747983423999199197/original/b6d95d40-54c0-42fb-a800-8db1bf7acace.jpeg?im_w=720",
      },
      {
        id: 4,
        title: "Rustic Beach Retreat",
        location: "Aspen, CO",
        price: 300,
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-911511889978413981/original/e485d1cb-884c-4295-85b5-f01e43de42e2.jpeg?im_w=720",
      },
      {
        id: 5,
        title: "Charming Cottage",
        location: "Cotswolds, UK",
        price: 100,
        imageUrl: "https://a0.muscache.com/im/pictures/87c4953b-9564-41ca-bad2-b9449b1b7524.jpg?im_w=720",
      },
      {
      id: 6,
      title: "Luxury Beachfront Villa",
      location: "Malibu, CA",
      price: 450,
      imageUrl: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-853890489443266421/original/c46a25d6-bc50-4073-9d90-c24cd63717ac.jpeg?im_w=720",

    },
    // Add more listings here
  ];

  return (
    <div className="bg-white flex justify-center ">
    <div className="container  py-4">
      <h1 className="text-3xl font-bold mb-4">Explore Airbnb Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AirbnbClone;
