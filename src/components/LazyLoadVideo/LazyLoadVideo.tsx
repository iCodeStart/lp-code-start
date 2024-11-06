import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./LazyLoadVideo.scss";
import useIsMobile from "../../utils/useIsMobile";

interface LazyLoadVideoProps {
  videoId: string;
}
const LazyLoadVideo = ({ videoId }: LazyLoadVideoProps) => {
  const [isInView, setIsInView] = useState(false);
  const isMobile = useIsMobile();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="video-container">
      {isInView ? (
        <iframe
          width={`${isMobile ? "300" : "560"}`}
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="thumbnail" onClick={() => setIsInView(true)}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="thumbnail-image"
          />
        </div>
      )}
    </div>
  );
};

export default LazyLoadVideo;
