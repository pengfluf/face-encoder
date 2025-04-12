const units = ['bytes', 'KB', 'MB'];

export function getFormattedFileSize(bytes: number): string {
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  const value = bytes / 1024 ** exponent;
  const unit = units[exponent];

  if (exponent === 0) {
    return `${value} ${unit}`;
  }

  return `${value.toFixed(1).replace(/\.0$/, '')} ${unit}`;
}
