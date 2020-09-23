import React from 'react';
import TextContainer from 'idyll-components/dist/cjs/text-container';

export default function Slide(props) {
  const { hasError, idyll, updateProps, children, ...rest } = props;

  return (
    <div {...rest} className="slide">
      <div className="slide__inner">
        <TextContainer idyll={idyll}>
          {children}
        </TextContainer>
      </div>
    </div>
  );
}
