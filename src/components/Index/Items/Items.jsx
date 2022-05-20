import React, { Fragment } from 'react';
import { indexItems } from '../../../constants';
import { LineBreakStyled } from '../../global/utils';
import Accordion from './Accordion/Accordion';
import { ContainerStyled } from './ItemsStyles';

const Items = () => {
  const isLastItem = i => i === indexItems.length - 1;

  return (
    <ContainerStyled>
      {indexItems.map((item, i) => (
        <Fragment key={item.id}>
          <Accordion item={item} />
          {isLastItem(i) ? <LineBreakStyled /> : null}
        </Fragment>
      ))}
    </ContainerStyled>
  );
};

export default Items;
