#!/usr/bin/env node

const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const start = debounce(() => {
    console.log('STARTING USER\'S PROGRAM');
}, 100);

chokidar
    .watch('.')
    .on('all', start)
    .on('change', () => console.log('FILE CHANGED'))
    .on('unlinked', () => console.log('FILE UNLINKED'));