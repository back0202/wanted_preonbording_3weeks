import React, { useState } from "react";
import getRelatedSearch from "../apis/searchApi";
import { getCache, setCache } from "../utils/chche";
import getSickName from "../utils/getSickName";

function useRelatedSearch() {
  const [suggestedSearchArr, setSuggestedSearchArr] = useState([]);

  const onChange = async (e) => {
    if (e.target.value === "") {
      setSuggestedSearchArr([]);
      return;
    }
    const cacheValue = getCache(`${e.target.value}`);

    if (cacheValue) {
      setSuggestedSearchArr(cacheValue);
    } else {
      const relatedSearch = await getRelatedSearch(e.target.value).then(
        (res) => res.data
      );
      const relatedSickName = getSickName(relatedSearch, e.target.value);
      if (relatedSickName === undefined) {
        setSuggestedSearchArr([]);
        setCache(`${e.target.value}`, JSON.stringify([]));
        return;
      }
      setCache(`${e.target.value}`, JSON.stringify(relatedSickName));
      setSuggestedSearchArr(relatedSickName);
    }
  };
  return { suggestedSearchArr, onChange };
}

export default useRelatedSearch;
