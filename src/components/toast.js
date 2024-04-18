import React, { useState, useEffect } from 'react';

const Toast = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // Oculta el toast después de 3 segundos

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`toast ${isVisible ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default Toast;