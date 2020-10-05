import React from 'react';
import TextContainer from 'idyll-components/dist/cjs/text-container';

export default function Slide(props) {
  const { hasError, idyll, updateProps, children, cssClass, ...rest } = props;
  const className = `slide ${cssClass || ''}`;

  return (
    <div {...rest} className={className}>
      <div className="slide__inner">
        <TextContainer idyll={idyll}>
          {children}
        </TextContainer>
      </div>
    </div>
  );
}
