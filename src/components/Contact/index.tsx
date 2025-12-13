'use client';

import { ContactContainer, ContactItem } from "./Contact.styles";
import Image from 'next/image';

export default function Contact() {
    return (
        <ContactContainer>
            <ContactItem
                onClick={() => window.open('https://www.linkedin.com/in/brunoeiterer/', '_blank')}
            >
                <Image src='/images/LinkedinIcon.svg' alt='LinkedinIcon' height={24} width={24} />
                <span>brunoeiterer</span>
            </ContactItem>

            <ContactItem
                onClick={() => window.open('mailto:brunoeiterer@gmail.com', '_blank')}
            >
                <Image src='/images/EmailIcon.svg' alt='EmailIcon' height={24} width={24} />
                <span>brunoeiterer@gmail.com</span>
            </ContactItem>

            <ContactItem
                onClick={() => window.open('https://github.com/brunoeiterer/', '_blank')}
            >
                <Image src='/images/GithubIcon.svg' alt='GithubIcon' height={24} width={24} />
                <span>brunoeiterer</span>
            </ContactItem>

            <ContactItem
                onClick={() => window.open('https://wa.me/5548996118470/', '_blank')}
            >
                <Image src='/images/WhatsappIcon.svg' alt='whatsappbIcon' height={24} width={24} />
                <span>+55 (48) 99611-8470</span>
            </ContactItem>
        </ContactContainer>
    )
}