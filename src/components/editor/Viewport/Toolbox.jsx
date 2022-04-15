import { Element, useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

// import ButtonSvg from '../../../static/icons/toolbox/button.svg';
// import SquareSvg from '../../../static/icons/toolbox/rectangle.svg';
// import TypeSvg from '../../../static/icons/toolbox/text.svg';
// import YoutubeSvg from '../../../static/icons/toolbox/video-line.svg';
import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container/index.jsx';
import { Text } from '../../selectors/Text';
import { Custom1 } from '../../selectors/Custom1'
import { Custom3 } from '../../selectors/Custom3'

const ToolboxDiv = styled.div`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

const Item = styled.a`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              SquareSvg
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              TypeSvg
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
            ButtonSvg
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Custom1 />)}>
          <Tooltip title="Custom1" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
            Custom1
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Custom3 />)}>
          <Tooltip title="Custom3" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
            Custom3
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
