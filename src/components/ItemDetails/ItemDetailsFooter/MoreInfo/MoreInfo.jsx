import React from 'react';
import { Text } from '../../../global/utils';
import { ContainerStyled, ContainerBackgroundStyled } from './MoreInfoStyles';

const MoreInfo = ({ moreInfo }) => {
  return (
    <>
      <ContainerStyled>
        <Text as="p" className="text">
          {moreInfo.map(text => (
            <React.Fragment key={text}>
              {text}
              <br />
              <br />
            </React.Fragment>
          ))}
        </Text>
      </ContainerStyled>
      <ContainerBackgroundStyled></ContainerBackgroundStyled>
    </>
  );
};

export default MoreInfo;
