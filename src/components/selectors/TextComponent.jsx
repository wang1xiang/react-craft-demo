import { useNode } from "@craftjs/core";
import React from 'react';
import { ToolbarItem, ToolbarSection } from '../editor';
export const TextComponent = ({color, text}) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return (
    <h2 ref={connect} style={{color: color && `rgba(${Object.values(color)})`}}>{text}</h2>
  )
}

const TextSettings = () => {
  return <React.Fragment>
    <ToolbarSection
      title="Appearance"
      props={['color', 'text']}
      summary={({ color, shadow }) => {
        return (
          <div className="fletext-right">
            <p
              style={{
                color: color && `rgba(${Object.values(color)})`,
              }}
              className="text-white text-right"
            >
              T
            </p>
          </div>
        );
      }}
    >
      <ToolbarItem full={true} propKey="color" type="color" label="Text" />
    </ToolbarSection>
  </React.Fragment>
}
TextComponent.craft = {
  displayName: "My Text Component",
  props: {
    color: "#000",
    text: "Hi"
  },
  
  related: {
    toolbar: TextSettings
  }
}