import { readdirSync } from 'fs';
import { join } from 'path';

console.log('123');

// utils must build before core
// runtime must build before renderer-react
// components dependencies order: form -> table -> list
const headPkgs: string[] = [
  'provider',
  'utils',
  'field',
  'skeleton',
  'form',
  'table',
  'card',
  'list',
  'logger',
  'spe',
];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

export default {
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'rollup',
  },
  pkgs: [...headPkgs, ...tailPkgs],
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    [require('./scripts/replaceLib')],
  ],
};
