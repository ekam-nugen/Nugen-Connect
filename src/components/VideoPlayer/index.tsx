import React from "react";

interface VideoPlayerProps {
  src: string;
  type: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type,
  controls = true,
  autoPlay = true,
  loop = false,
}) => {
  return (
    <div className="w-[538px] h-[303px] ">
      <video
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        className="w-full h-full rounded-3xl"
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
};

export default VideoPlayer;