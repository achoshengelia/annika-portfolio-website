import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapperStyled = styled.footer`
  margin-top: 5rem;
`;

export const ListItemsStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
`;

export const LinkStyled = styled(Link)`
  transition: all 115ms ease-in-out;

  &:hover {
    color: #000000;
    opacity: 0.75;
  }
`;

export const ItemStyled = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.light};

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 0.9rem;
  }
`;

export const ItemSocialsStyled = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 3rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text.light};

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    margin-left: 2rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 0.9rem;
    margin-left: 1.5rem;
  }
`;
