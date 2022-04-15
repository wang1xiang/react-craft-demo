#### 增加组件方式

- components/selectors/Customx
  ```js
  import { Element, useNode } from '@craftjs/core';
  import React from 'react';
  
  import { Container } from '../Container/index.jsx';
  import { Video } from '../Video';
  
  export const Custom2VideoDrop = ({ children }) => {
    const {
      connectors: { connect },
    } = useNode();
    return (
      <div ref={connect} className="flex-1 ml-5 h-full">
        {children}
      </div>
    );
  };
  Custom2VideoDrop.craft = {
    rules: {
      canMoveIn: (nodes, self, helper) => {
        return (
          nodes.every((node) => node.data.type === Video) &&
          helper(self.id).decendants().length === 0
        );
      },
    },
  };
  export const Custom2 = (props) => {
    return (
      <Container {...props} className="overflow-hidden">
        <div className="w-24">
          <h2 className="text-xs text-white">
            You can only drop
            <br />
            one video here.
          </h2>
        </div>
        <Element canvas is={Custom2VideoDrop} id="wow">
          <Video />
        </Element>
      </Container>
    );
  };
  
  Custom2.craft = {
    ...Container.craft,
    displayName: 'Custom 2',
  };
  
  ```
  
- 新增selectors/Video和VideoSettings组件，并将Video组件添加到components/editor/Viewport/Toolbax

  ```jsx
  <div ref={(ref) => create(ref, <Video />)}>
            <Tooltip title="Video" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                YoutubeSvg
              </Item>
            </Tooltip>
          </div>
  ```

  并将Video组件引入到landing.js中，添加到Editor的resolver属性中

- 引入Custom2, Custom2VideoDrop到landing中，添加到Editor的resolver属性中