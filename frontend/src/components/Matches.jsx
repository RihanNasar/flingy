import React from "react";

function Matches() {
  const db = [
    {
      name: "Cleopatra kunnamkulam",
      bio: "Hi, I'm Kunnamkulam. I love eating and sleeping every day",
      url: "./img/adithya.jpg",
    },
    {
      name: "Erlich Bachman",
      bio: "Hey, I'm Erlich. I'm passionate about technology and startups. Looking for someone who shares my interests and can challenge me intellectually.",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      bio: "Hi there, I'm Monica. I'm a fitness enthusiast and enjoy outdoor activities like hiking and cycling. Let's stay active together!",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      bio: "Hello, I'm Jared. I'm a big fan of data and analytics. Looking for someone who appreciates insights and enjoys deep conversations.",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chugtai",
      bio: "Hey, I'm Dinesh. I'm a software engineer by day and a stand-up comedian by night. Let me make you laugh!",
      url: "./img/dinesh.jpg",
    },
  ];

  const characters = db;
  return (
    <div className=" items-center h-full">
      <h5 className="text-4xl font-bold text-center text-white m-4">Matches</h5>
      <div className="flex flex-wrap m-5 space-y-7 items-center justify-evenly">
        {characters.map((character) => (
          <div className="my-10">
            <a
              href="#"
              class="flex flex-col items-center bg-red-500  border-none rounded-lg shadow md:flex-row md:max-w-xl "
            >
              <img
                class="object-cover w-64 h-64 rounded-t-lg md:rounded-none md:rounded-s-lg"
                src={character.url}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal bg-red-500">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  {character.name}
                </h5>
                <p class="mb-3 font-normal bg-red-500 text-white">
                  {character.bio}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;
