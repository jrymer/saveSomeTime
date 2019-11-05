export const getDisplayValue = (milliseconds: number) => {
  let seconds = milliseconds / 1000;
  const hours = seconds / 3600; // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  const minutes = seconds / 60; // 60 seconds in 1 minute
  seconds = seconds % 60;

  const secondsString = getLeadingZero(seconds);
  const minutesString = getLeadingZero(minutes);
  const hoursString = getLeadingZero(hours);
  const timeString = `${hoursString}:${minutesString}:${secondsString}`;
  return timeString;
};

export const getLeadingZero = (value: number): string => {
  const time = Math.floor(value);

  return time < 10
    ? `0${time}`
    : time.toString();
};
