import React from 'react';
import TextContainer from 'idyll-components/dist/cjs/text-container';

export default function ident(props) {
  const { idyll, children } = props;

  return (
    <div className="ident" style={{marginLeft: '1em'}}>
      <TextContainer idyll={idyll}>
        {children}
      </TextContainer>
    </div>
  );
}
