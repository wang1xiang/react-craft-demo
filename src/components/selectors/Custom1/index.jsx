import { Element, useNode } from '@craftjs/core';
import React from 'react';

import { Button } from '../Button';
import { Container } from '../Container/index.jsx';

export const OnlyButtons = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div title="only-buttons" ref={connect} className="w-full mt-5" {...props}>
      {children}
    </div>
  );
};

OnlyButtons.craft = {
  rules: {
    canMoveIn: (nodes) => nodes.every((node) => node.data.type === Button),
  },
};

export const Custom1 = (props) => {
  return (
    <Container {...props}>
      <h2 className="text-lg px-10 py-5 text-white">
        I'm a component that only accepts
        <br /> buttons.
      </h2>
      <Element canvas id="wow" is={OnlyButtons}>
        <Button />
        <Button
          buttonStyle="outline"
          color={{ r: 255, g: 255, b: 255, a: 1 }}
        />
      </Element>
    </Container>
  );
};

Custom1.craft = {
  ...Container.craft,
  displayName: 'Custom 1',
};
