import { Editor, Frame } from "@craftjs/core";
import React, { useState, useEffect } from "react";

import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { Image } from "../components/selectors/Image";
import { Custom1, OnlyButtons } from "../components/selectors/Custom1";
import { Custom3, Custom3BtnDrop } from "../components/selectors/Custom3";
import { Custom4 } from "../components/selectors/Custom4";
import { TextComponent } from '../components/selectors/TextComponent'
import mockData from '../utils/data1.json';

function App() {

  const [json, setJson] = useState(null);
  useEffect(() => {
    console.log(mockData)
    // const json = lz.decompress(lz.decodeBase64(stateToLoad));
    setJson(mockData);
  }, []);
  if (!json) return false;
  return (
    <div className="h-full h-screen">
     {/* 这是编辑器的区域，resolve是会用到的组件，需要在这里申明一下 */}
      <Editor
        resolver={{
          Container,
          Text,
          Custom1,
          Custom3,
          Custom3BtnDrop,
          Custom4,
          OnlyButtons,
          Button,
          TextComponent,
          Image
        }}
        // 控制是否可编辑
        enabled={true}
        // 选中组件时候 展示组件名称及操作
        onRender={RenderNode}
      >
        <Viewport>
          {/* 后台请求数据 */}
          <Frame data={JSON.stringify(json)} />
        </Viewport>
      </Editor>
    </div>
  );
}

export default App;
