import React, { useState } from 'react';

import { Container, Title, ListText } from './styles';

function Category() {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Art & Fashion'
        },
        {
            id: 2,
            name: 'Biography'
        },
        {
            id: 3,
            name: 'Business'
        },
        {
            id: 4,
            name: `Children's`
        },
        {
            id: 5,
            name: 'Education'
        },
        {
            id: 6,
            name: 'Fiction & Poetry'
        },
        {
            id: 7,
            name: 'Education'
        },
        {
            id: 8,
            name: 'Film, TV & Drama'
        },
        {
            id: 9,
            name: 'Food & Drink'
        },
        {
            id: 10,
            name: 'Health & Wellbeing'
        },
        {
            id: 11,
            name: 'Home & Garden'
        },
        
    ]);

    return (
        <Container>
            <Title>Categories</Title>
            {categories.map(item => (
                <ListText key={item.id}>{item.name}</ListText>
            ))}
        </Container>
    );
}

export default Category;