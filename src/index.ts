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
  .option('-i, --iframe-content', 'Return the iframe content', false)
  .action(async (codebasePath: string, options: { [k: string]: string }) => {
    await postCodebase(codebasePath, options.service, !!options.iframeContent);
  });

program.parse(process.argv);
