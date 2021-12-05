import fs from 'fs/promises'

export type FileSpec = {
  content: string;
  isBinary: boolean;
};

export type FileMapping = { [path: string]: FileSpec };

export const mapFiles = async (basePath: string, path?: string): Promise<FileMapping> => {
  const fullPath = path ? `${basePath}/${path}` : basePath;
  const stat = await fs.stat(fullPath);

  if (stat.isDirectory()) {
    const files = await fs.readdir(fullPath);
    const all = await Promise.all(files.map(file => (
      mapFiles(basePath, path ? `${path}/${file}` : `/${file}`)
    )));
    const flat: File[] = [];
    return Object.assign({}, ...all);
  } else {
    const content = await fs.readFile(fullPath, 'utf8');

    return {
      [path || '']: // path should never be null, though
      { content, isBinary: false }
    };
  }
};
