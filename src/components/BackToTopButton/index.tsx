import { BackToTopArrow, BackToTopButtonContainer } from "./BackToTopButton.styles";

export default function BackToTopButton() {
    return (
        <BackToTopButtonContainer
            href='#nav'
        >
            <BackToTopArrow src='/images/ArrowUp.svg' alt='Arrow Up' width={15} height={15} />
        </BackToTopButtonContainer>
    )
}