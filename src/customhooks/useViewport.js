import { useState, useEffect } from 'react';

export default function useViewport() {
    const [index, setIndex] = useState(0);

    const isInViewport = (e) => {
        var bounding = e.getBoundingClientRect();
        var isVisible = (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
        return isVisible;
    };

    useEffect(() => {
        const setScrollYPosition = () => {
            var getMain = document.getElementById("main");
            var newpages = getMain.querySelectorAll(".newpage h1");
    
            for (let count = 0; count < newpages.length; count++) {
                const element = newpages[count];
    
                if (isInViewport(element)) {
                    setIndex(count);
                }
            }
        }
        document.getElementById("main").addEventListener("scroll", setScrollYPosition);
    }, []);

    return index;
}
