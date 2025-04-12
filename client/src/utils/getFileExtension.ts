export function getFileExtension(fileName: string): string {
  const dotIndex = fileName.lastIndexOf('.');

  if (dotIndex === -1) {
    throw new Error(`Encountered a filename without a dot.`);
  }

  return fileName.slice(dotIndex);
}
