function getItemsLs(actualPage, setLs) {
  const size = 10;
  const itemsLs = JSON.parse(localStorage.getItem('favorites'));
  if (actualPage === 1) {
    const articles = itemsLs.filter((_, i) => i <= (size - 1));
    return setLs(articles);
  }
  const min = (actualPage - 1) * size;
  const max = min + (size - 1);
  const articles = itemsLs.filter((_, i) => i >= min && i <= max);
  return setLs(articles);
}

export default getItemsLs;
