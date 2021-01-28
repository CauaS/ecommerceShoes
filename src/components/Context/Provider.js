import React from "react";
import DataContext from "./Context";

function Provider({ children }){
    const [ types, setTypes ] = React.useState([
        { type: 'Todos', isSelected: true },        
        { type: 'Sapatenis', isSelected: false },
        { type: 'Sapato', isSelected: false },
        { type: 'Mocassim', isSelected: false },
    ]);
    const [allProducts, setAllProducts] = React.useState([
        {
            id: 0,
            type: 'Sapatenis',
            name: "Sapatênis Nobuck Navy",
            tags: { bestseller: true, stock: 25 }
        },
        {
            id: 1,
            type: 'Sapatenis',
            name: "Sapatênis Mascavo",
            tags: { bestseller: true, stock: 25, new: true }
        },
        {
            id: 2,
            type: 'Sapatenis',
            name: "Sapatênis Microfibra",
            tags: { bestseller: true, no_stock: true }
        },
        {
            id: 3,
            type: 'Sapatenis',
            name: "Sapatênis Couro Milk",
            tags: { bestseller: true, stock: 26 }
        },
        {
            id: 4,
            type: 'Sapatenis',
            name: "Sapatênis Nobuck Brown",
            tags: { stock: 32, new: true }
        },
        {
            id: 5,
            type: 'Sapatenis',
            name: "Sapatênis Nobuck Marinho",
            tags: {bestseller: true, no_stock: true }
        },
        {
            id: 6,
            type: 'Sapato',
            name: "Sapato Social Couro",
            tags: { no_stock: true, new: true }
        },
        {
            id: 7,
            type: 'Sapato',
            name: "Sapato Social Jeans",
            tags: { bestseller: true, no_stock: true }
        },
        {
            id: 8,
            type: 'Sapato',
            name: "Sapato Social Cravo",
            tags: { bestseller: true, stock: 25, new: true }
        },
        {
            id: 9,
            type: 'Sapato',
            name: "Sapato Social Cravo",
            tags: {bestseller: true, no_stock: true}
        },
        {
            id: 10,
            type: 'Mocassim',
            name: "Mocassim Couro Jeans",
            tags: {bestseller: true, stock: 10, new: true}
        },
        {
            id: 11,
            type: 'Mocassim',
            name: "Mocassim Couro Marinho",
            tags: { bestseller: true, no_stock: true, new: true }
        },
    ]);
    const [productsFiltered, setProductsFiltered] = React.useState([
        {
            id: 0,
            type: 'Sapatenis',
            name: "Sapatênis Nobuck Navy",
            tags: { bestseller: true, stock: 25 }
        },
        {
            id: 1,
            type: 'Sapatenis',
            name: "Sapatênis Mascavo",
            tags: { bestseller: true, stock: 25, new: true }
        },
        {
            id: 2,
            type: 'Sapatenis',
            name: "Sapatênis Microfibra",
            tags: { bestseller: true, no_stock: true }
        },
        {
            id: 3,
            type: 'Sapatenis',
            name: "Sapatênis Couro Milk",
            tags: { bestseller: true, stock: 26 }
        },
        {
            id: 4,
            type: 'Sapatenis',
            name: "Sapatênis Nobuck Brown",
            tags: { stock: 32, new: true }
        },
        {
            id: 5,
            type: 'Sapatenis',
            name: "Sapatênis Nobuck Marinho",
            tags: {bestseller: true, no_stock: true }
        },
        {
            id: 6,
            type: 'Sapato',
            name: "Sapato Social Couro",
            tags: { no_stock: true, new: true }
        },
        {
            id: 7,
            type: 'Sapato',
            name: "Sapato Social Jeans",
            tags: { bestseller: true, no_stock: true }
        },
        {
            id: 8,
            type: 'Sapato',
            name: "Sapato Social Cravo",
            tags: { bestseller: true, stock: 25, new: true }
        },
        {
            id: 9,
            type: 'Sapato',
            name: "Sapato Social Cravo",
            tags: {bestseller: true, no_stock: true}
        },
        {
            id: 10,
            type: 'Mocassim',
            name: "Mocassim Couro Jeans",
            tags: {bestseller: true, stock: 10, new: true}
        },
        {
            id: 11,
            type: 'Mocassim',
            name: "Mocassim Couro Marinho",
            tags: { bestseller: true, no_stock: true, new: true }
        },
    ]);
    const [list, setList] = React.useState(true);

    const[cart, setCart] = React.useState([]);
    
    return(
        <DataContext.Provider
            value={{ 
                cart,
                setCart,
                list,
                setList,
                types,
                setTypes,
                allProducts,
                setAllProducts,
                productsFiltered,
                setProductsFiltered
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default Provider;
