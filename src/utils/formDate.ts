export function formatDateStr(timestamp: number): string {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function formatDateNumber(timestamp: string): number {
  const [day, month, year] = timestamp.split('.')
  const date = new Date(+year, +month - 1, +day)
  const milliseconds = date.getTime()

  return milliseconds || Date.now()
}