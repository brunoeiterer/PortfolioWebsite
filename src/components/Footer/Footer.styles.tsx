'use client';

import styled from "styled-components";

export const FooterContainer = styled.footer`
    grid-column: 1 / span 4;

    font-size: 0.85rem;
    color: #999;

    border-top: 1px solid #eaeaea;
    margin-top: 1rem;

    padding: 1rem;

    text-align: center;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;

        margin-left: 3rem;
        margin-right: 3rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;

        margin-left: 9rem;
        margin-right: 9rem;
    }
`;