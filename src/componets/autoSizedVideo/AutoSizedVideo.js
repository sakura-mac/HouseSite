import React from 'react';

const AutoSizedVideo = ({ videoSrc, aspectRatio = 16 / 9 }) => {
    // aspectRatio 默认设置为 16:9，可以根据需要调整
    const containerStyle = {
        position: 'relative',
        paddingBottom: `${(1 / aspectRatio) * 100}%`, // 根据宽高比设置 padding-bottom 来控制视频比例
        height: 0,
        overflow: 'hidden',
        width: '100%',
    };

    const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain', // 防止视频被裁剪，保持比例
    };

    return (
        <div style={containerStyle}>
            <video
                autoPlay
                muted
                loop
                style={videoStyle}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AutoSizedVideo;
