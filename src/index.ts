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
    //const host = 'https://codeviewlove-production.netlify.app';
//      const host = 'http://localhost:3000';
      await postCodebase(codebasePath, options.service);
  });

program.parse(process.argv);
