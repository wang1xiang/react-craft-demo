import { useNode, useEditor } from '@craftjs/core';
import React from 'react';
import { Button } from '../Button';

import { ContainerWithPadding } from '../ContainerWithPadding';
import { ImageSettings } from './ImageSettings';

const defaultProps = {
  width: '100%',
  height: '100%'
}
export const Image = (props) => {
  const {
    connectors: { connect }
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  console.log(props)
  const {
    background,
    src,
    margin,
  } = props;
  return (
    <ContainerWithPadding {...props}>
      <div ref={connect} style={{ background, margin, ...defaultProps }}>
        {
          src ? <img
          style={defaultProps}
          alt=''
          src={src}
        /> : <div>请上传</div>
        }
      </div>
    </ContainerWithPadding>
  );
};

Image.craft = {
  ...ContainerWithPadding.craft,
  displayName: 'Image',
  props: {
    ...ContainerWithPadding.craft.props,
    background: { r: 255, g: 255, b: 255, a: 1 },
    margin: [0, 0, 0, 0],
    src: '',
  },
  related: {
    toolbar: ImageSettings,
  },
};
