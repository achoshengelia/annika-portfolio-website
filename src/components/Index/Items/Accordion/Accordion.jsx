import React, { useState } from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { LineBreakStyled, Text } from '../../../global/utils';
import { ContainerStyled, HeaderStyled, ImageStyled } from './AccordionStyles';

const Accordion = ({ item }) => {
  const { caption, tags, organisation, projectlink, year, image, alt } = item;
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <ContainerStyled isOpen={isOpen}>
      <LineBreakStyled />
      <HeaderStyled onClick={() => setIsOpen(prevState => !prevState)}>
        <Text>{caption}</Text>
        {width > 755 ? <Text>{tags}</Text> : null}
        {width > 1112 ? (
          <Text>
            <a href={projectlink} target="blank" rel="noreferrer">
              {organisation}
            </a>
          </Text>
        ) : null}
        <Text>{year}</Text>
      </HeaderStyled>
      <a href={projectlink} target="blank" rel="noreferrer">
        <ImageStyled src={image} alt={alt} />
      </a>
    </ContainerStyled>
  );
};

export default Accordion;
