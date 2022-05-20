import React, { useState, Fragment } from 'react';
import { LineBreakStyled, Text } from '../../../global/utils';
import {
  ContainerStyled,
  HeaderStyled,
  TagsStyled,
  ImageStyled
} from './AccordionStyles';

const Accordion = ({ item }) => {
  const { caption, tags, organisation, year, image } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerStyled isOpen={isOpen}>
      <LineBreakStyled />
      <HeaderStyled onClick={() => setIsOpen(prevState => !prevState)}>
        <Text>{caption}</Text>
        <TagsStyled>
          {tags.map((tag, i) => (
            <Fragment key={`${tag + i}`}>
              <Text>{tag}</Text>
              <Text size="2rem">{i !== tags.length - 1 ? '|' : null}</Text>
            </Fragment>
          ))}
        </TagsStyled>
        <Text>{organisation}</Text> <Text>{year}</Text>
      </HeaderStyled>
      <ImageStyled src={image} alt="" />
    </ContainerStyled>
  );
};

export default Accordion;
