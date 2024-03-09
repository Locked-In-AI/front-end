
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns a zero-based value (where zero indicates the first month)
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};