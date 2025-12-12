'use client';

import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    grid-column: 1 / span 4;

    margin-top: 1rem;

    gap: 2rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    gap: 0.5rem;

    align-items: center;
`;