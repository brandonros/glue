import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/glue.js',
    format: 'iife',
    name: 'glue'
  },
  plugins: [
    resolve()
  ]
}
