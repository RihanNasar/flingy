import React from "react";

function Matches() {
  const db = [
    {
      name: "Cleopatra kunnamkulam",
      url: "./img/adithya.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "./img/dinesh.jpg",
    },
  ];

  const characters = db;
  return (
    <div className="h-screen w-screen flex flex-col m-24 space-y-7 items-center">
      {characters.map((character) => (
        <div className="my-10">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-64 h-64 rounded-t-lg md:rounded-none md:rounded-s-lg"
              src={character.url}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Matches;
