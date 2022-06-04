import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from '../global/utils';

export const ContainerStyled = styled(motion(CenterWrapperStyled))`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  user-select: none;
`;
