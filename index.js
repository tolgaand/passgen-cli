#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.4").description("Simple Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, save, numbers, symbols);

clipboardy.writeSync(generatedPassword);

console.log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
console.log(chalk.yellow("Password copied to clipboard"));

if (save) savePassword(generatedPassword);

