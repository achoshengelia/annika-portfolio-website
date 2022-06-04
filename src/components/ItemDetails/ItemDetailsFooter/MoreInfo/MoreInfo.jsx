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
          duration: 0.4,
          ease: 'linear'
        }
      }}
      exit={{
        y: 1000,
        transition: {
          duration: 0.4,
          ease: 'linear'
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
