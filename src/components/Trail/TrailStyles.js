import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PlaceholderStyled = styled(motion.img)`
  width: 25rem;
  height: 32rem;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
`;

export const ContainerStyled = styled.div`
  position: fixed;
  inset: 0;
`;
