// export const getFullYear = () => new Date().getFullYear();
export function getFullYear() {
  var date = new Date();
  return date.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) return "Holberton School"
  return "Holberton School main dashboard"
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

  