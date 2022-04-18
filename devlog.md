#### 营销弹框 

首页界面  1d  文昊

#### 设计器

- 流程 使用 x6 实现，相对简单一点，不需要调研 2-3d 王翔

- 规则 + 邮件、短信节点 估计 1d 文昊

- 设计器 使用 craft 实现   5-7d 王翔 + 徐文昊

  - 添加组件
  - 优化页面（按照UI样式走）
  - 手机端展示调研（craft没有手机端的展示）
  - 调整图层顺序（实现）

- 弹框展示
  容器接收

  

#### Craft 增加组件方式

- components/selectors/Customx

  ```js
  import { Element, useNode } from "@craftjs/core";
  import React from "react";

  import { Container } from "../Container/index.jsx";
  import { Video } from "../Video";

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
    displayName: "Custom 2",
  };
  ```

- 新增 selectors/Video 和 VideoSettings 组件，并将 Video 组件添加到 components/editor/Viewport/Toolbax

  ```jsx
  <div ref={(ref) => create(ref, <Video />)}>
    <Tooltip title="Video" placement="right">
      <Item className="m-2 pb-2 cursor-pointer block" move>
        YoutubeSvg
      </Item>
    </Tooltip>
  </div>
  ```

  并将 Video 组件引入到 landing.js 中，添加到 Editor 的 resolver 属性中

- 引入 Custom2, Custom2VideoDrop 到 landing 中，添加到 Editor 的 resolver 属性中


#### 保存数据

1. json格式
2. 字符串格式 通过lzutf8压缩转为base64保存

#### 加载数据

1. json
2. 使用保存的base64反向操作回填
