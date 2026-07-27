"use client"

import { useRef, useState } from "react"

const Gallery = () => {
  const videoRefs = useRef([])
  const [activeVideo, setActiveVideo] = useState(null)

  const videosData = [
    {
      url: "/videos/video-1.mp4",
      poster: "/videos/poster-1.jpg"
    },
    {
      url: "/videos/video-2.mp4",
      poster: "/videos/poster-2.jpg"
    },
    {
      url: "/videos/video-3.mp4",
      poster: "/videos/poster-3.jpg"
    },
    {
      url: "/videos/video-4.mp4",
      poster: "/videos/poster-4.jpg"
    },
    {
      url: "/videos/video-5.mp4",
      poster: "/videos/poster-5.jpg"
    },
    {
      url: "/videos/video-6.mp4",
      poster: "/videos/poster-6.jpg"
    },
  ]

  const handlePlayClick = (index) => {
    const video = videoRefs.current[index]
    if (!video) return

    if (video.currentTime < 0.1) {
      video.currentTime = 2
    }

    video.play()
    setActiveVideo(index)
  }

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index]
    if (!video) return

    if (video.paused) {
      video.play()
      setActiveVideo(index)
    } else {
      video.pause()
      setActiveVideo(null)
    }
  }

  return (
    <section
      className="gallery-sectoin py-[80px] relative px-6 md:px-24"
      data-purpose="gallery-section"
    >
      <div className="wrapper flex flex-col lg:flex-row flex-wrap gap-[40px] justify-center">
        {videosData.map((video, index) => (
          <div
            className="w-full lg:w-[40%] relative"
            key={index}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              poster={video.poster}
              preload="auto"
              playsInline
              muted
              className="w-full h-[400px] object-cover cursor-pointer"
              onClick={() => handleVideoClick(index)}
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {activeVideo !== index && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="playButton group flex justify-center cursor-pointer"
                  onClick={() => handlePlayClick(index)}
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
        ))}
      </div>
    </section>
  )
}

export default Gallery