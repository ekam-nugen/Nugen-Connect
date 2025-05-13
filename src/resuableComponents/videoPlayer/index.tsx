import React from "react";

interface VideoPlayerProps {
  src: string;
  type: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type,
  controls = true,
  autoPlay = true,
  loop = false
}) => {
  return (
    <div className="w-full h-full ">
      <video
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        className="w-full h-full rounded-xl"
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
};

export default VideoPlayer;
