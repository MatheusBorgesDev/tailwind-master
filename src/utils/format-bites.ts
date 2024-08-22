export function formatBites(bytes: number) {
  const units = ["B", "KB", "MB", "GB", "TB"];

  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(1)} ${units[unitIndex]}`;
}
