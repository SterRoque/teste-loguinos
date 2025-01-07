export function sanitizeString(value: string) {
   return value.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
}
