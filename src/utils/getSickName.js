const getSickName = (cacheValue, value) => {
  const iscontinSickName = getIsContainSickName(cacheValue, value);

  if (iscontinSickName.length > 0) {
    const sickNameArr = iscontinSickName.map((item) => {
      return item.sickNm;
    });

    return sickNameArr;
  }
};

const getIsContainSickName = (cacheValue, value) => {
  return cacheValue.filter((item) => {
    return item.sickNm.indexOf(value) !== -1;
  });
};

export default getSickName;
