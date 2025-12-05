import {HeroTextTitle, HeroImage, HeroSectionSeparator, HeroHighlightsContainer, HeroSectionContainer, HeroTextContainer } from "./HeroSection.styles";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {

}

export default function HeroSection({ id }: HeroSectionProps) {
    return (
        <HeroSectionContainer id={id}>
            <HeroTextTitle>
                Hi, I'm Bruno :)
            </HeroTextTitle>
            <HeroTextContainer>
                <ul>
                    <li>Generalist Software Engineer</li>
                    <li>7 years of experience</li>
                    <li>Enterprise • Embedded • Web • Desktop</li>
                    <li>Strong C#, C</li>
                    <li>Mid TypeScript, React, C++</li>
                    <li>Also: Python, Java</li>
                </ul>
            </HeroTextContainer>
            <HeroImage
                src='/images/HeroImage.png'
                alt='developing with banshee'
                width={953}
                height={768}
            />
            <HeroSectionSeparator />
        </HeroSectionContainer>
    )

    return (
        <>


            <HeroTextTitleContainer>
                <HeroTextTitle>
                    Hi, I'm Bruno :)
                </HeroTextTitle>
            </HeroTextTitleContainer>

            <HeroHighlightsContainer>
              <ul>
                <li>Generalist Software Engineer</li>
                <li>7 years of experience</li>
                <li>Enterprise • Embedded • Web • Desktop</li>
                <li>Strong C#, C</li>
                <li>Mid TypeScript, React, C++</li>
                <li>Also: Python, Java</li>
              </ul>
            </HeroHighlightsContainer>

            <HeroSectionSeparator />
        </>
    );
}