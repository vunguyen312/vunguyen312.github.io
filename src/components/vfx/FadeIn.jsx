import { useEffect, useState, useRef } from "react";

function FadeIn(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => setVisible(entry.isIntersecting)));
      const { current } = domRef;
      observer.observe(current);
      return () => observer.unobserve(current);
    }, []);
    
    return (
      <div
        className={`fade-in ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  export default FadeIn;