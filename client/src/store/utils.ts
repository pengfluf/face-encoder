import { FileCache, FileInfo } from '@customTypes';

export function createFileCache(files: FileInfo[]): FileCache {
  return files.reduce((acc, info) => {
    return { ...acc, [info.name]: info };
  }, {});
}
