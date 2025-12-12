import { ContactContainer, ContactItem } from "./Contact.styles";
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <ContactContainer>
            <ContactItem>
                <Image src='/images/LinkedinIcon.svg' alt='LinkedinIcon' height={24} width={24} />
                <Link href='https://www.linkedin.com/in/brunoeiterer/' target='_blank'>brunoeiterer</Link>
            </ContactItem>

            <ContactItem>
                <Image src='/images/EmailIcon.svg' alt='EmailIcon' height={24} width={24} />
                <a href='mailto:brunoeiterer@gmail.com'>brunoeiterer@gmail.com</a>
            </ContactItem>

            <ContactItem>
                <Image src='/images/GithubIcon.svg' alt='GithubIcon' height={24} width={24} />
                <a href='https://github.com/brunoeiterer/' target='_blank'>brunoeiterer</a>
            </ContactItem>

            <ContactItem>
                <Image src='/images/WhatsappIcon.svg' alt='whatsappbIcon' height={24} width={24} />
                <a href='https://wa.me/5548996118470/' target='_blank'>+55 (48) 99611-8470</a>
            </ContactItem>
        </ContactContainer>
    )
}