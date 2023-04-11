import { FiGithub, FiLinkedin } from "react-icons/fi";
import styled from "@emotion/styled";

const socialLinks = [
  { id: 1, icon: <FiGithub />, url: "https://github.com/itsjuanit" },
  { id: 2, icon: <FiLinkedin />, url: "https://www.linkedin.com/in/itsjuanit" },
];

const AppFooter = () => {
  const AppFooterContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  const FooterWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;

    @media (min-width: 640px) {
      margin-bottom: 28px;
    }
  `;

  const TextWrapper = styled.p`
    &::after {
    }

    @media (min-width: 640px) {
      font-size: 48px;
    }
  `;

  const StyledLink = styled.a`
    &:hover {
      color: #4a5568;
      background-color: #e2e8f0;
    }
  `;

  const IconWrapper = styled.i`
    font-size: 24px;
    margin-right: 0.5rem;
  `;

  return (
    <AppFooterContainer>
      <FooterWrapper>
        <LinksWrapper>
          <TextWrapper>
            Este sitio ha sido realizado por{" "}
            <StyledLink
              href="https://portfolio-itsjuanit.vercel.app/"
              target="__blank"
              rel="noreferrer"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
              }}
            >
              ITSJUANIT
            </StyledLink>
          </TextWrapper>
          <div>
            {socialLinks.map((link) => (
              <StyledLink href={link.url} target="__blank" key={link.id}>
                <IconWrapper>{link.icon}</IconWrapper>
              </StyledLink>
            ))}
          </div>
        </LinksWrapper>
      </FooterWrapper>
    </AppFooterContainer>
  );
};

export default AppFooter;
