// import { createContext } from "react";
// import useDataLoader from "../hooks/useDataLoader";

// export const CoffeeDataContext = createContext([]);

// const CoffeDataProvider = ({ children }) => {
//   let cd;
//   const data = useDataLoader("/public/coffeeData.json");
//   data.then((res) => {
//     console.log(res.data);
//     cd = res.data;
//   });
//   console.log(cd);
//   return (
//     <CoffeeDataContext.Provider value={"null"}>
//       {children}
//     </CoffeeDataContext.Provider>
//   );
// };

// export default CoffeDataProvider;
