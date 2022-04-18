import { useNode, useEditor } from '@craftjs/core';
import React from 'react';
import { Button } from '../Button';

import { ImageSettings } from './ImageSettings';

export const Image = ({
  background,
  src,
  margin,
}) => {
  const {
    connectors: { connect }
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <div ref={connect} style={{ background, margin }}>
      {
        src ? <img
        alt=''
        src={src}
      /> : <div>请上传</div>
      }
    </div>
  );
};

Image.craft = {
  displayName: 'Image',
  props: {
    background: { r: 255, g: 255, b: 255, a: 1 },
    margin: [0, 0, 0, 0],
    src: '',
  },
  rules: {
    canMoveIn: (nodes) => nodes.every((node) => node.data.type === Button),
    canMoveOut: () => true
  },
  related: {
    toolbar: ImageSettings,
  },
};
