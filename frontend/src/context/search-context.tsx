import React, { useState } from "react";

// export default React.createContext({
//   token: null,
//   userId: null,
//   login: (token, userId) => {},
//   logout: () => {},
// });
const SearchContext = React.createContext({
  price: Number,
  category: null,
});

function SearchContextProvider(props) {
  const [price, setPrice] = useState<Number>(2);
  const [category, setCategory] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        price: price,
        category: category,
        setPrice: setPrice,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchContextProvider, SearchContext };
