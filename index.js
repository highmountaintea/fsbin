#!/usr/bin/env node

const fs = require('fs-extra');

const cmd = process.argv[2];
const args = process.argv.slice(3);
fs[cmd](...args);
