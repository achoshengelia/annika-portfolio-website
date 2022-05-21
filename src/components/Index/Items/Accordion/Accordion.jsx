import React, { useState, Fragment } from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { LineBreakStyled, Text } from '../../../global/utils';
import {
  ContainerStyled,
  HeaderStyled,
  TagsStyled,
  ImageStyled
} from './AccordionStyles';

const Accordion = ({ item }) => {
  const { caption, tags, organisation, projectlink, year, image } = item;
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
            <a href={projectlink} target="blank">
              {organisation}
            </a>
          </Text>
        ) : null}
        <Text>{year}</Text>
      </HeaderStyled>
      <ImageStyled src={image} alt="" />
    </ContainerStyled>
  );
};

export default Accordion;
