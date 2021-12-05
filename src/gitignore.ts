import util from 'util';
const { exec } = require("child_process");

export const isFileGitignored = (path: string): boolean => {
  const pexec = util.promisify(exec);
  pexec(`git check-ignore ${path}`, (error: string, stdout: string, stderr: string) => {
    if (error) {
      throw new Error(error);
    }

    return stdout.length > 0;
  });
}