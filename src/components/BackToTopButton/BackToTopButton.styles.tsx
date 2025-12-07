'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const BackToTopButtonContainer = styled(Link)`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 1rem;
    right: 1rem;

    width: 2rem;
    height: 2rem;

    background-color: black;
    border-radius: 50%;

    transition: 0.1s ease-in-out;

    &:hover > * {
        transition: 0.1s ease-in-out;
        filter: brightness(0) invert(0.4575);
    }

    @media (min-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
    }

    @media (min-width: 1024px) {
        width: 3rem;
        height: 3rem;
    }
`;

export const BackToTopArrow = styled(Image)`
    filter: brightness(0) invert(1);

    width: 1.5rem;
    height: 1.5rem;

    @media (min-width: 768px) {
        width: 1.75rem;
        height: 1.75rem;
    }

    @media (min-width: 1024px) {
        width: 2rem;
        height: 2rem;
    }
`;