function getItemsLs(actualPage, setLs) {
  const itemsLs = JSON.parse(localStorage.getItem('favorites'));
  if (actualPage === 1) {
    const articles = itemsLs.filter((_, i) => i <= 9);
    return setLs(articles);
  }
  const min = (actualPage - 1) * 10;
  const max = min + 9;
  const articles = itemsLs.filter((_, i) => i >= min && i <= max);
  return setLs(articles);
}

export default getItemsLs;
