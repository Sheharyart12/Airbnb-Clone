import React from "react";

export default function Footer() {
  const resources = [
    "Help center",
    "Air cover",
    "Anti-discrimination",
    "Disability Support",
    "Cancellation options",
    "Report Neighbourhood",
    // Add more resources as needed
  ];

  const solutions = [
    "Airbnb your home",
    "Air covers for host",
    "Hosting Resources",
    "Community forum",
    "Hosting Responsibly",
    "Airbnb-friendly apartments",
    // Add more solutions as needed
  ];
  const finance = [
    "News room",
    "News features",
    "Careers",
    "Investors",
    "Gift cards",
    "Airbnd.org emergency stays",
    // Add more solutions as needed
  ];

  return (
    <div className="bg-gray-100 text-black   ">



      <div className="flex flex-col p-14  ">

        <div className="flex gap-64">
          <ul className="list-none ">
            <li className="font-bold">Support</li>
            {resources.map((resource, index) => (
              <li key={index} className="mt-3">
                {resource}
              </li>
            ))}
          </ul>
          <ul className="list-none gap-">
            <li className="font-bold">Hosting</li>
            {solutions.map((solution, index) => (
              <li key={index} className="mt-3">
                {solution}
              </li>
            ))}
          </ul>
          <ul className="list-none ">
            <li className="font-bold">Air bnb</li>
            {finance.map((finance, index) => (
              <li key={index} className="mt-3 ">
                {finance}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" px-8 ">
        <div className="flex justify-between py-8 border-t border-gray-500">

          <div className="flex gap-4 ">

            <p className="  font-normal ">2023 Airbnb,inc. </p>
            <p className="    font-normal">Terms</p>
            <p className="    font-normal">Sitemap</p>
            <p className="    font-normal">Privacy</p>
            <p className="    font-normal">Your Privacy Choices</p>
            <p className="my-auto    font-normal"><svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect></svg></p>

          </div>
          <div className="flex gap-4">

            <img
              src="/world.svg" // Replace with the path to your user logo image

              className="flex my-auto h-6 w-6"
            />
            <p className="  font-normal">English (US)</p>
            <p className="    font-normal"> $ USD</p>



          </div>
        </div>
      </div>

    </div>
  );
}
