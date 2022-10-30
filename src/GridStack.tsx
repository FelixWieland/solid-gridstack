import {
  createSignal,
  For,
  JSXElement,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { GridStack as GridStackC, GridStackOptions } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { GridItem } from "./GridItem";

type GridstackProps = {
  div?: JSX.HTMLAttributes<HTMLDivElement>;
  options?: GridStackOptions;
  ref?: GridStackC;
  items: Array<JSXElement>;
};

export function GridStack(props: GridstackProps) {
  let div: HTMLDivElement | undefined = undefined;
  const [grid, setGrid] = createSignal<GridStackC | null>(null);

  const c = () =>
    props.div?.class !== undefined
      ? props.div.class + " grid-stack"
      : "grid-stack";
  const createGridEffect = (effect: (grid: GridStackC) => void) => {
    const g = grid();
    if (g !== null) {
      effect(g);
    }
  };

  onMount(() => {
    setGrid(GridStackC.init(props.options, div!));
    onCleanup(() => {
      const g = grid();
      if (g !== null) {
        g.destroy();
        setGrid(null);
      }
    });
  });

  createGridEffect((g) => (g.opts = props.options || {}));

  return (
    <div {...props.div} class={c()} ref={div}>
      <Show when={grid() !== null}>
        <For each={props.items}>
          {(item) => <GridItem grid={grid()!}>{item}</GridItem>}
        </For>
      </Show>
    </div>
  );
}
