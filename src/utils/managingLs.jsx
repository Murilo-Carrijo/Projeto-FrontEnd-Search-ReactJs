function managingLs(article, setUpdateLs) {
  const checkLs = JSON.parse(localStorage.getItem('favorites'));
  // eslint-disable-next-line no-underscore-dangle
  const idsLs = checkLs?.map((items) => items._id);
  setUpdateLs((previous) => !previous);
  if (!checkLs || checkLs === []) {
    return localStorage.setItem('favorites', JSON.stringify([article]));
  }
  // eslint-disable-next-line no-underscore-dangle
  if (idsLs?.includes(article._id)) {
    // eslint-disable-next-line no-underscore-dangle
    const newCheckLs = checkLs.filter((item) => item._id !== article._id);
    return localStorage.setItem('favorites', JSON.stringify(newCheckLs));
  }
  checkLs.push(article);
  return localStorage.setItem('favorites', JSON.stringify(checkLs));
}

export default managingLs;
