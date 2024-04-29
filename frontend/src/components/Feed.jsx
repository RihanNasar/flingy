import React, { useState, useRef, useMemo } from "react";
import TinderCard from "react-tinder-card";
import { redirect, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import ReplayIcon from "@mui/icons-material/Replay";
const Feed = () => {
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
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(characters.length - 1);
  const [lastDirection, setLastDirection] = useState(null);

  const childRefs = useMemo(
    () =>
      Array(characters.length)
        .fill(0)
        .map(() => React.createRef()),
    [characters.length]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
  };

  const canGoBack = currentIndex < characters.length - 1;
  const canSwipe = currentIndex >= 0;
  if (!canSwipe) {
    navigate("/matches");
  }
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`);
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < characters.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="bg-red-400 h-screen w-screen flex justify-center items-center ">
      <div className="relative">
        <div className="cardContainer">
          {characters.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {(canSwipe || canGoBack) && ( // Conditionally render buttons only if there are cards left
          <div className="buttons">
            {canSwipe && (
              <button
                style={{ backgroundColor: "#e11a1a" }}
                onClick={() => swipe("left")}
              >
                <ClearIcon />
              </button>
            )}
            {canSwipe && (
              <button
                style={{ backgroundColor: "#6d7579" }}
                onClick={() => goBack()}
              >
                <ReplayIcon />
              </button>
            )}
            {canSwipe && (
              <button
                style={{ backgroundColor: "#eb1919" }}
                onClick={() => swipe("right")}
              >
                <FavoriteIcon />
              </button>
            )}
          </div>
        )}
        {lastDirection && canSwipe && (
          <h2 key={lastDirection} className="infoText">
            You swiped {lastDirection}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Feed;
