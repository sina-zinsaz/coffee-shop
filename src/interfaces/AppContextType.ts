export type Category = {
    id: number;
    name: string;
  };
  
export interface AppContextType {
    categories: Category[] | string | undefined; 
    setCategories: React.Dispatch<React.SetStateAction<string | undefined>>;
    products: string | undefined;
    setProducts: React.Dispatch<React.SetStateAction<string | undefined>>;
    selectedChip:number | undefined;
    setSelectedChip: React.Dispatch<React.SetStateAction<number | undefined>>;
    productId : number | undefined;
    setProductId: React.Dispatch<React.SetStateAction<number | undefined>> ;
    numOfProduct: number;
    setNumOfProduct: React.Dispatch<React.SetStateAction<number>>;
    cash:string;
    isProductAdded: boolean;
    setIsProductAdded: React.Dispatch<React.SetStateAction<boolean>>;
}    