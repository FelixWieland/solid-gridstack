import type { Component } from "solid-js";
import { GridStack } from "../src";

const App: Component = () => {
  return (
    <GridStack
      div={{ style: { 'margin': '2.5px' }}}
      items={[...new Array(5)].map((_, i) => (
        <div gs-x={0} gs-y={i * 2} gs-w={12} gs-h={2} gs-auto-position="true">
          <div style={{
            'margin': '2.5px',
            'background-color': 'rgb(68 107 158)',
            'height': 'calc(100% - 5px)',
            'width': 'calc(100% - 5px)',
            'border-radius': '7.5px'
          }}></div>
        </div>
      ))}
    />
  );
};

export default App;
