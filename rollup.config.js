import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const { name, version, author, license } = pkg

const banner = `
/*!
 * ${name}.js v ${version}
 * (c) 2018 - ${new Date().getFullYear()} ${author}
 * Released under the ${license} License 
 */
`
const input = './src/index.js'

const plugins = [
  resolve(),
  commonjs({
    include: 'node_modules/**'
  }),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  filesize()
]

export default [
  {
    input,
    output: {
      file: `dist/${name}.esm.js`,
      format: 'esm',
      banner
    },
    plugins
  },
  {
    input,
    output: {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      banner
    },
    plugins
  },
  {
    input,
    output: {
      file: `dist/${name}.js`,
      format: 'umd',
      name: 'Watermark',
      banner
    },
    plugins: [
      ...plugins,
      uglify({
        compress: {
          drop_console: true
        }
      })
    ]
  }
]
