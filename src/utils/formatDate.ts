export const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate().toString();
  const dayFormated = day.length === 1 ? `0${day}` : day;
  const month = (parsedDate.getMonth() + 1).toString();
  const monthFormated = month.length === 1 ? `0${month}` : month;
  const yearFormated = parsedDate.getFullYear();
  return `${dayFormated}/${monthFormated}/${yearFormated}`;
};

export default formatDate;
