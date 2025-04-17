import { CachedFileSelection, SelectedFile } from '@customTypes';

export function createFileCache(
  files: SelectedFile[],
): CachedFileSelection {
  return files.reduce((acc, { name, file }) => {
    return {
      ...acc,
      [name]: {
        name,
        src: URL.createObjectURL(file),
      },
    };
  }, {} as CachedFileSelection);
}
