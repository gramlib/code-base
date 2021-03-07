import dts from 'rollup-plugin-dts';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = [
  {
    input: './esm/index.js',
    output: [
      {
        file: `./dist/index.js`,
        format: 'cjs',
      },
    ],
    external: Object.keys(require('./package.json').dependencies) ,
    plugins: [
      commonjs(),
      nodeResolve()
    ],
  },
  {
    input: './esm/index.d.ts',
    output: [
      {
        file: `./dist/index.d.ts`,
        format: 'cjs'
      }
    ],
    plugins: [dts()],
  },
];

export default config;
