import { GridStack } from "gridstack";
import { JSXElement, onMount } from "solid-js";

type GridItemProps = {
  children: JSXElement;
  grid: GridStack;
};

export function GridItem(props: GridItemProps) {
  onMount(() => {
    props.grid.makeWidget(props.children as any);
  });
  return props.children;
}
