#### 营销弹框 

首页界面

#### 设计器

- 流程 使用 x6 实现，相对简单一点，不需要调研 2-3d

- 规则 + 邮件、短信节点 估计 1d

- 设计器 使用 craft 实现   7d-10d 王翔

  - UI样式还原
  - 添加组件（第一期6个）
  - 手机端展示调研（craft没有手机端的展示）
  - 调整图层顺序（实现）
  - 转html方法

- 店铺页面弹框展示
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

json

#### 加载数据

json回填

#### 调研

1. 实现拖动画布顺序
2. json格式的文件转换为html格式
3. 预览实现手机预览（目前只有PC端预览）