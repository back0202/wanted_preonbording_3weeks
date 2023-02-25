import React, { useRef, useState } from "react";
import useRelatedSearch from "./hooks/useRelatedSearch";

function App() {
  const { suggestedSearchArr, onChange } = useRelatedSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(suggestedSearchArr);
  return (
    <div>
      <div>
        <input type="text" ref={inputRef} onChange={onChange} />
        <button>버튼</button>
      </div>

      <div>
        {suggestedSearchArr.length !== 0 ? (
          suggestedSearchArr.map((item: string) => {
            return (
              <div key={item}>
                {
                  <>
                    <div>연관검색어</div>
                    {item.split(inputRef.current?.value as string).map((x, i) =>
                      i > 0 ? (
                        <>
                          <span style={{ fontWeight: "bold" }}>
                            {inputRef.current?.value}
                          </span>
                          {x}
                        </>
                      ) : (
                        <>{x}</>
                      )
                    )}
                  </>
                }
              </div>
            );
          })
        ) : (
          <div>최근검색어</div>
        )}
      </div>
    </div>
  );
}

export default App;
