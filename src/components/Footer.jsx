import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 20px 50px;
  font-size: 20px;
  font-weight: var(--fw-reg);
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;

  & span {
    color: var(--clr-light);
    font-weight: var(--fw-reg);
    font-size: 20px;
    display: block;
  }

  @media screen and (min-width: 520px) {
    justify-content: space-between;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0.5em 0 0;
  padding: 0;
  gap: 50px;
`;

const FooterLink = styled(Link)`
  color: var(--clr-accent);

  &:hover {
    color: var(--clr-light);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>onyeneke.acs@gmail.com</p>
      <FooterList>
        <li>
          <FooterLink to="https://github.com/Onyeneke-AC" target="__blank">
            <FaGithub />
          </FooterLink>
        </li>
        <li>
          <FooterLink
            to="www.linkedin.com/in/anthony-onyeneke"
            target="__blank"
          >
            <FaLinkedin />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="anthonykhidblakeo@gmail.com" target="__blank">
            <FaTwitter />
          </FooterLink>
        </li>
      </FooterList>
    </StyledFooter>
  );
}

export default Footer;
