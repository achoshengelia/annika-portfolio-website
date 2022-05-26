import React, { Fragment } from 'react';
import { indexItems } from '../../../constants';
import { LineBreakStyled } from '../../global/utils';
import Accordion from './Accordion/Accordion';
import { ContainerStyled } from './ItemsStyles';

const Items = () => {
  const isLastItem = i => i === indexItems.length - 1;

  return (
    <ContainerStyled
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.7,
          duration: 0.3,
          ease: 'easeIn'
        }
      }}
      exit={{
        opacity: 0,
        y: 30,
        transition: {
          duration: 0.4,
          ease: 'easeOut'
        }
      }}
    >
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
