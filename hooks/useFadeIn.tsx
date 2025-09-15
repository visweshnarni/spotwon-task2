
import React, { useRef, useEffect, useState } from 'react';

const useFadeIn = <T extends HTMLElement,>(
    as: React.ElementType, 
    options?: IntersectionObserverInit
) => {
    const Component = as;

    const FadeInComponent: React.FC<React.ComponentProps<typeof Component>> = (props) => {
        const ref = useRef<T>(null);
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
                ...options
            });

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(ref.current);
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const { className, ...rest } = props;

        return (
            <Component
                ref={ref}
                className={`${className || ''} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                {...rest}
            />
        );
    };

    return FadeInComponent;
};

export default useFadeIn;
