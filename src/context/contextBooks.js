import React, { createContext, useState, useEffect } from 'react';

import api from '../service/api';
const BooksContext = createContext({});

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {

            const { data } = await api.get('/books');
            
            setBooks(data);
        }
        
        loadBooks();
        
    }, []);

    return (
        <BooksContext.Provider value={{
            books
        }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksContext;