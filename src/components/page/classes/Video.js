"use client";

import { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime < 0.1) {
      video.currentTime = 2;
    }

    video.play();
    setOverlayVisible(false);
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setOverlayVisible(false);
    } else {
      video.pause();
      setOverlayVisible(true);
    }
  };

  return (
    <section
      className="relative flex items-center justify-start overflow-hidden pt-[20px] pb-[80px] px-6 md:px-24"
      data-purpose="locations-section"
    >
      <div className="container mx-auto">
        <div className="wrapper flex flex-col lg:flex-row gap-y-[20px] justify-between items-center">
          <div className="heading flex flex-col gap-[10px] w-full">
            <h2 className="text-red text-[50px] leading-none font-bold">
              Take a look for yourself
            </h2>
          </div>
        </div>

        <div className="video relative mt-12">
          <video
            ref={videoRef}
            poster="/videos/poster-3.jpg"
            preload="metadata"
            playsInline
            className="w-full h-[300px] lg:h-[700px] object-cover cursor-pointer"
            onClick={handleVideoClick}
          >
            <source src="/videos/outside-training.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {overlayVisible && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="playButton group flex justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <svg
                  width="111"
                  height="111"
                  viewBox="0 0 111 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M74.1261 53.5841C75.087 54.2247 75.5675 54.545 75.7349 54.9487C75.8813 55.3016 75.8813 55.6983 75.7349 56.0513C75.5675 56.455 75.087 56.7753 74.1261 57.4159L46.5799 75.78C45.417 76.5553 44.8355 76.9429 44.3534 76.9142C43.9333 76.8891 43.5453 76.6814 43.2914 76.3458C43 75.9606 43 75.2618 43 73.8641L43 37.1358C43 35.7382 43 35.0394 43.2914 34.6541C43.5453 34.3186 43.9333 34.1109 44.3534 34.0858C44.8356 34.057 45.417 34.4446 46.5799 35.2199L74.1261 53.5841Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    fill="transparent"
                    className="group-hover:fill-white transition-all duration-700"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
