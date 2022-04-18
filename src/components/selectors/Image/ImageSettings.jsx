import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const ImageSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Colors"
        props={['background']}
        summary={({ background }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
      </ToolbarSection>
      <ToolbarSection
        title="src"
        props={['src']}
        summary={({ src }) => {
          return src;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="src"
          type="input"
          label="src"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
