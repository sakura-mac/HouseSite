import React from 'react';

const LoadingSpinner = ({ text, height = '40vh' }) => {
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      gap: '16px',
    },
    spinner: {
      width: '42px',
      height: '42px',
      border: '3px solid #e0e0e0',
      borderTopColor: '#0f3c9e',
      borderRadius: '50%',
      animation: 'spinCircle 0.8s linear infinite',
    },
    text: {
      fontSize: '14px',
      color: '#999',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner} />
      {text && <span style={styles.text}>{text}</span>}
      <style>{`
        @keyframes spinCircle {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
