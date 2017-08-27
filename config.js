import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default{
  input: 'src/scrollobserve.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
