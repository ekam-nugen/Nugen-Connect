"use client";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";

function VedioCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const togglePlayPause: () => void = () => {
    if (videoRef?.current) {
      if (isPlaying) {
        videoRef?.current?.pause();
      } else {
        videoRef?.current?.play();
      }
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div className="relative max-w-xl mx-auto">
        <video
          ref={"videoRef"}
          className="w-full rounded-lg"
          src="/video.mp4"
          onClick={togglePlayPause}
        />
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center text-center text-black h-12 w-12 rounded-full"
        >
          {isPlaying ? (
            <IoPauseSharp className="w-6 h-6" />
          ) : (
            <FaPlay className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}

export default VedioCard;
