import { createContext, ReactNode } from "react";

//INTERFASES------------------------------------------------------------------------------------



interface Category {
  Categoria: string;
  color: string;
}

//GLOBAL CONTEXT INTERFASE----------------------------------------------------------------------
interface GlobalContextProps {
  names: Category[];
  url: string;
  logo: string;
  colorprimary:string;
}

//GLOBAL CONTEXT DEFAULT VALUES------------------------------------------------------------------
const defaultValue: GlobalContextProps = {
  names: [],
  url: "",
  logo: "/image/logo.png",
  colorprimary:"#11417b",
};



export const GlobalContext = createContext<GlobalContextProps>(defaultValue);

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  
//

//Definition of Global Variables
  const url = "http://localhost:3000/videos";
  const colorprimary ="#11417b";
  const logo ="/image/logo.png";

  const names: Category[] = [
    {
      Categoria: "FRONT END",
      color: "#6BD1FF",
    },
    {
      Categoria: "BACK END",
      color: "#00C86F",
    },
    {
      Categoria: "INNOVACIÓN Y GESTIÓN",
      color: "#FFBA05",
    },
  ];

  return (
    <GlobalContext.Provider value={{ 
        names, 
        url,
        logo,
        colorprimary,
        
        
        
        
        }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
