import React from 'react';
import { Text } from '../../../global/utils';
import { ContainerStyled } from './MoreInfoStyles';

const MoreInfo = ({ moreInfo }) => {
  return (
    <ContainerStyled
      initial={{ y: 1000 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeIn'
        }
      }}
      exit={{
        y: 1000,
        transition: {
          duration: 0.6,
          ease: 'easeOut'
        }
      }}
    >
      <Text as="p">
        {moreInfo.map(text => (
          <React.Fragment key={text}>
            {text}
            <br />
            <br />
          </React.Fragment>
        ))}
      </Text>
    </ContainerStyled>
  );
};

export default MoreInfo;
