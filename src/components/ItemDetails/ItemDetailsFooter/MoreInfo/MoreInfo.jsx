import React from 'react';
import { Text } from '../../../global/utils';
import { ContainerStyled } from './MoreInfoStyles';

const MoreInfo = ({ moreInfo }) => {
  return (
    <ContainerStyled>
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
