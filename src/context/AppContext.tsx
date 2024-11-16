import React, { createContext, useState, useEffect } from "react";
import { AppContextType } from "../interfaces/AppContextType";
import { get } from "../api/http";
import { AppContextProviderProps } from "../interfaces/Props";

export const AppContext = createContext<AppContextType>({
  categories: "",
  setCategories: () => {},
  products: "",
  setProducts: () => {},
  selectedChip: 0,
  setSelectedChip: () => {},
  productId: 0,
  setProductId: () => {},
  numOfProduct: 1,
  setNumOfProduct: () => {},
  cash: "",
  isProductAdded: false,
  setIsProductAdded: () => {},
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [selectedChip, setSelectedChip] = useState<number | undefined>();
  const [categories, setCategories] = useState<string>();
  const [products, setProducts] = useState<string>();
  const [productId, setProductId] = useState<number>();
  const [numOfProduct, setNumOfProduct] = useState<number>(1);
  const [cash, setCash] = useState<string>("");
  const [isProductAdded, setIsProductAdded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData: string = await get("categories");
        const productsData: string = await get("products");
        setCategories(categoriesData);
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const cash = 4.53 * numOfProduct + 1.0;
    const roundedCashValue = cash.toFixed(2);
    setCash(roundedCashValue);
  }, [numOfProduct]);

  // const memoizedProductId = useMemo(() => productId, [productId]);

  return (
    <AppContext.Provider
      value={{
        categories: categories,
        setCategories,
        products: products,
        setProducts,
        selectedChip: selectedChip,
        setSelectedChip,
        productId: productId,
        setProductId,
        numOfProduct: numOfProduct,
        setNumOfProduct,
        cash: cash,
        isProductAdded: isProductAdded,
        setIsProductAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
