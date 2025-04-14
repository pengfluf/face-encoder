import { FileCache, SelectedFile } from '@customTypes';

export function createFileCache(files: SelectedFile[]): FileCache {
  return files.reduce((acc, { name, file }) => {
    return {
      ...acc,
      [name]: {
        name,
        src: URL.createObjectURL(file),
      },
    };
  }, {} as FileCache);
}
