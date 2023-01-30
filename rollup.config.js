import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import path from 'path';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';
// import tsconfig from './tsconfig.json';

// const resolveEntries = () => {
//   Object.keys(tsconfig.compilerOptions.paths).map(([find, [replacement]]) => ({
//     find,
//     replacement,
//   }));
// };

export const config = [
  {
    input: 'index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        resolve: ['.js', '.ts', '.tsx'],
        entries: [
          {
            find: '#',
            replacement: path.resolve(__dirname, 'src/components'),
          },
        ],
      }),
      image(),
      commonjs(),
      scss({
        failOnError: true,
        outputStyle: 'compressed',
        processor: () => postcss([autoprefixer()]),
        includePaths: [
          path.join(__dirname, '../../node_modules/'),
          'node_modules/',
        ],
        output: './build/src/styles/index.css',
      }),
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        useTsconfigDeclarationDir: true,
        declaration: true,
      }),
    ],
  },
  {
    // path to your declaration files root
    input: 'build/dts/index.d.ts',
    output: [{ file: 'build/index.d.ts', format: 'es' }],
    external: [/\.scss$/],
    plugins: [
      dts(),
      del({
        hook: 'buildEnd',
        targets: ['./build/dts', './build/src/fonts/fonts'],
      }),
    ],
  },
];

export default config;
