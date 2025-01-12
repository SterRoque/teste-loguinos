export function splitDateAndFormatTime(isoString: string) {
   const [date, timeWithZ] = isoString.split('T');
   const [hours, minutes] = timeWithZ.split(':');

   const time = `${hours}:${minutes}`;

   return { date, time };
}
