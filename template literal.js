const fetchdata = async (AniamlName) => {
  const data = await fetchdata(`imaginaryapi.com/searchterm=${AniamlName}`);
  const name = data.person?.name;
};
