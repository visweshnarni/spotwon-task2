
import React, { useState, useEffect } from 'react';

const CursorFollower: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
            );
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const size = isPointer ? 40 : 24;

    return (
        <div 
            className="fixed rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(-50%, -50%)`,
                backgroundColor: isPointer ? 'rgba(255, 105, 65, 0.4)' : 'rgba(255, 124, 107, 0.2)',
                border: `1px solid rgba(255, 105, 65, ${isPointer ? 0.6 : 0.4})`,
                backdropFilter: 'blur(4px)',
            }}
        />
    );
};

export default CursorFollower;
