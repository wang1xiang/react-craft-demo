import { Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { ChromePicker } from 'react-color';

export const ToolbarTextInput1 = ({
  onChange,
  value,
  type
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ width: '100%', position: 'relative' }}
      onClick={() => {
        setActive(true);
      }}
    >
      {(type === 'color' || type === 'bg') && active ? (
        <div
          className="absolute"
          style={{
            zIndex: 99999,
            top: 'calc(100% + 10px)',
            left: '-5%',
          }}
        >
          <div
            className="fixed top-0 left-0 w-full h-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(false);
            }}
          ></div>
          <ChromePicker
            color={value}
            onChange={(color) => {
              onChange(color.rgb);
            }}
          />
        </div>
      ) : null}
      <Input
        style={{ margin: 0, width: '100%' }}
        value={internalValue || ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChange(e.target.value);
          }
        }}
        onBlur={e => onChange(e.target.value)}
        onChange={(e) => {
          setInternalValue(e.target.value);
        }}
      />
    </div>
  );
};
