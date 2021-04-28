#!/usr/bin/env node

const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal');
const fs = require('fs');

program
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({ filename }) => {
        const name = filename || 'index.js';

        try {
            await fs.promises.access(name);
        } catch (err) {
            throw new Error(`Could not find the file ${name}`);
        }

        console.log(args);
    });

program.parse(process.argv);

const start = debounce(() => {
    console.log('STARTING USER\'S PROGRAM');
}, 100);

chokidar
    .watch('.')
    .on('all', start)
    .on('change', start)
    .on('unlinked', start);