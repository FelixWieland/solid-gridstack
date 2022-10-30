import withSolid from 'rollup-preset-solid';
import css from "rollup-plugin-import-css";

export default withSolid({
  input: 'src/index.tsx',
  targets: ['esm', 'cjs'],
  plugins: [css()]
});
