import React, { useEffect } from 'react';
import { filterChildren } from 'idyll-component-children';

function addKeydownListener({ children, updateProps, currentSlide }) {
  const slides = filterChildren(children, c => {
    return c.type.name && c.type.name.toLowerCase() === 'slide';
  });

  updateProps({
    numSlides: slides.length
  });

  document.onkeydown = (e) => {
    const slides = filterChildren(children, c => {
      return c.type.name && c.type.name.toLowerCase() === 'slide';
    });

    switch (e.keyCode) {
      case 37:
        if (currentSlide > 0) {
          e.preventDefault();
          updateProps({
            currentSlide: currentSlide - 1
          });
        }
        break;
      case 38:
        break;
      case 39:
        if (currentSlide < slides.length - 1) {
          e.preventDefault();
          updateProps({
            currentSlide: currentSlide + 1
          });
        }
        break;
      case 40:
        break;
    }
  };
}

export default function Slideshow(props) {
  const {
    children,
    currentSlide,
    noTransition,
    updateProps
  } = props;

  useEffect(
    () => addKeydownListener({ children, updateProps, currentSlide }),
    [children, updateProps, currentSlide]
  );

  return (
    <div
      className="slideshow"
      style={{
        height: '100vh',
        background: '#fff',
        color: '#222',
        position: 'absolute',
        transform: `translateX(${-100 * currentSlide}vw)`,
        transition: noTransition ? 'transform 0s' : null
      }}
    >
      {children}
    </div>
  );
}
