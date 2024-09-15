import React from 'react';
import styled from 'styled-components';

const VideoModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const VideoModalContent = styled.div`
    background: white;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
    width: 80%;
    max-width: 800px;
    max-height: 80%;
`;

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
`;

class VideoModal extends React.Component {
    render() {
        const { isOpen, onClose } = this.props;
        if (!isOpen) return null;

        return (
            <VideoModalOverlay onClick={onClose}>
                <VideoModalContent onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    <video width="100%" height="auto" controls autoPlay loop>
                        <source src="/src/assets/videos/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </VideoModalContent>
            </VideoModalOverlay>
        );
    }
}

export default VideoModal;
