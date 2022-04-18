import { Element } from '@craftjs/core';
import React from 'react';
import { ContainerWithPadding } from '../ContainerWithPadding';
import { Text } from '../Text';

export const Custom4 = (props) => {
  console.log(props)
  return (
    <ContainerWithPadding {...props}>
      <Element canvas id="custom4" is={Text}>
        <Text />
      </Element>
    </ContainerWithPadding>
  );
};

Custom4.craft = {
  ...ContainerWithPadding.craft,
  displayName: 'Custom 4',
};
