import {uglify} from "rollup-plugin-uglify";

export default {
    entry: 'rncryptor.js',
    dest: 'build/main.min.js',
    format: 'iife',
    plugins: [uglify()]
};