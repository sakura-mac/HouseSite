import React from 'react';

class VideoModal extends React.Component {
    render() {
        // 如果模态框没有打开，则返回空，不渲染内容
        if (!this.props.isOpen) {
            return null;
        }

        // 内联样式对象
        const styles = {
            modalOverlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            },
            modalContent: {
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '800px',
                width: '100%',
                position: 'relative',
            },
            closeButton: {
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '24px',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                color: '#333',
            },
            video: {
                width: '100%',
                height: 'auto',
            },
        };

        return (
            <div style={styles.modalOverlay}>
                <div style={styles.modalContent}>
                    <button style={styles.closeButton} onClick={this.props.onClose}>
                        &times;
                    </button>
                    <video controls autoPlay style={styles.video}>
                        <source src="../../assets/videos/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        );
    }
}

export default VideoModal;
