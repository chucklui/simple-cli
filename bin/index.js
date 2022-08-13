#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';

const name = chalk.white("Name") + ":" + chalk.green('Cheuk Ho Lui');
const github = chalk.white("GitHub") + ":" + chalk.green('https://github.com/chucklui');
const boxDimension = {
  title: 'magical', 
  titleAlignment: 'center', 
  padding: 1, 
  margin: 1, 
  borderStyle: 'double'
};

const box = boxen(
  `${name}\n${github}`, 
  boxDimension)

console.log(box);