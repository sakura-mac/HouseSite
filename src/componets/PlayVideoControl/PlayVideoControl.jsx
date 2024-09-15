import React from 'react';
import './PlayVideoControl.css';  // 导入样式

const PlayVideoControl = ({ videoSrc }) => {
    return (
        <div className="video-control">
            {/* 自动播放、静音、循环的视频 */}
            <video autoPlay muted loop className="video-player">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PlayVideoControl;
