import { postCodebase } from "./post-codebase";

const { Command } = require('commander');

const program = new Command();

program
  .name('codeviewlove')
  .version(require('../package.json').version);

program
  .command('upload <codebasePath>')
  .description('Upload a codebase to CodeViewLove')
  .option('-s, --service <baseUrl>', 'Service base URL', 'https://codeviewlove.com')
  .action(async (codebasePath: string, options: { [k: string]: string }) => {
    await postCodebase(codebasePath, options.service);
  });

console.log('WARNING! This project is experimental. Expect breaking changes.');
console.log();

program.parse(process.argv);
