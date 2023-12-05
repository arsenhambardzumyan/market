import React, { useRef, useState } from "react";
import video from '../../assets/video/energy_video.mp4';
import product04 from '../../assets/img/product04.jpg';
import product02 from '../../assets/img/product02.jpg';
import product03 from '../../assets/img/product03.jpg';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";

const SectionVideo = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="section-video">
            <div className="video-block">
                <div className="video-info">
                    <div className="video-info__title">The Powerful performance<br /> With optimized balanced </div>
                    <div className="video-info__subtitle">Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                    <div className="video-info__list-thumb">
                        <ul>
                            <li><img src={product04} title="" alt="img-video-thumb" /></li>
                            <li><img src={product02} title="" alt="img-video-thumb" /></li>
                            <li><img src={product03} title="" alt="img-video-thumb" /></li>
                        </ul>
                    </div>
                </div>
                <div className="video-box" data-uk-lightbox="video-autoplay: true">
                    <video ref={videoRef} className="video_inner_container" width="100%" height="100%" loop muted uk-video="autoplay: true" poster="../assets/img/product04.jpg" >
                        <source src={video} type="video/MP4" />
                    </video>
                    <button className="btn-play-toggle" onClick={handlePlayPause}>
                        {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionVideo;
