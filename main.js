#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
    .command("hello", "Imprime uma saudação", {
        name: {
        description: "Seu nome",
        alias: "n",
        type: "string",
    },
})
    .help().argv;

if (argv._[0] === "hello") {
    console.log(`Olá, ${argv.name || "mundo"}!`);
}
