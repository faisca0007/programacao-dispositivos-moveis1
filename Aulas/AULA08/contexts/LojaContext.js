import { useContext, useState } from "react";

const categoriasDB = [
  { id: 1, nome: "Restaurantes", icone: "food" },
  { id: 2, nome: "Bares", icone: "beer" },
  { id: 3, nome: "Lanchonetes", icone: "hambuger" },
  { id: 4, nome: "Pizzarias", icone: "pizza" },
  { id: 5, nome: "Sorveterias", icone: "ice-cream" },
  { id: 6, nome: "Cafeterias", icone: "coffee" },
  { id: 7, nome: "Padarias", icone: "bread" },
  { id: 8, nome: "Mercados", icone: "shopping" },
];

const lojasDB = [
  { id: 1, nome: "Restaurante Asa Sul", nota: "4,6" },
  { id: 2, nome: "Restaurante Asa Norte", nota: "4,7" },
  { id: 3, nome: "Restaurante Tagua", nota: "5,0" },
  { id: 4, nome: "Bar Ceilandia", nota: "4,4" },
  { id: 5, nome: "Bar Sudoeste", nota: "4,8" },
  { id: 6, nome: "Lanchonete Gama", nota: "4,3" },
  { id: 7, nome: "Pizzaria Nucleo", nota: "4,4" },
];
 const LojaContext = createContext();

 function LojaProvider  ({children})  {
    const [categorias, setCategorias] = useState([]);
    const [lojas, setLojas] = useState([]);
    
    return (
    <LojaContext.Provider value={{lojas, categorias}}>
        {children}
    </LojaContext.Provider>
    );
 }


 export  {LojaContext, LojaProvider};