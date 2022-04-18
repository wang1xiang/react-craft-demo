import { useEditor } from "@craftjs/core";
import cx from "classnames";
import React, { useRef } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Toolbox } from "./Toolbox";

export const Viewport = ({ children }) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const ref = useRef(null);
  const html = ref.current?.firstChild?.firstChild?.outerHTML;
  console.log(html)
  return (
    <div ref={ref} className="viewport">
      <div
        className={cx(["flex h-full overflow-hidden flex-row w-full fixed"])}
      >
        <Toolbox />
        <div className="page-container flex flex-1 h-full flex-col">
          <Header />
          <div
            className={cx([
              "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
              {
                "bg-renderer-gray": enabled,
              },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center pt-8">
              {children}
            </div>
            <div
              className={
                "flex items-center justify-center w-full pt-6 text-xs text-light-gray-2"
              }
            >
              <a href="https://www.netlify.com">
                This site is powered by Netlify
              </a>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
