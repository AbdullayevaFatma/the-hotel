import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-brand-600);
  letter-spacing: 2px;
`;

function Logo() {
  return <Text>The Hotel</Text>;
}

export default Logo;
