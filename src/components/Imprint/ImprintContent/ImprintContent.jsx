import React from 'react';
import { Heading, TextStyled as Text } from '../../global/utils';
import { ContainerStyled, GridWrapperStyled } from './ImprintContentStyles';

const ImprintContent = () => {
  return (
    <ContainerStyled>
      <Text as="h1" size="2.2rem">
        Details according to § 5 TMG:
      </Text>
      <Text as="p" size="2rem">
        © Copyright 2015-2022 Annika Terwey <br /> Responsible according to § 10
        paragraph 3 MDStV: Annika Terwey
      </Text>
      <Text as="h1" size="2.2rem">
        Responsible for the content according to § 55 para. 2 RStV:
      </Text>
      <Text as="p" size="2rem">
        Annika Terwey
      </Text>
      <Text as="h1" size="2.2rem">
        Disclaimer - Liability for contents
      </Text>
      <GridWrapperStyled>
        <Text as="p" size="2rem">
          The contents of our pages were created with the greatest care.
          However, we cannot assume any liability for the correctness,
          completeness and topicality of the contents. As a service provider, we
          are responsible for our own content on these pages in accordance with
          general legislation pursuant to Section 7 Paragraph 1 of the German
          Telemedia Act (TMG). However, according to §§ 8 to 10 TMG, we are not
          obliged as a service provider to monitor transmitted or stored
          third-party information or to investigate circumstances that indicate
          illegal activity.
        </Text>

        <Text as="p" size="2rem">
          Obligations to remove or block the use of information in accordance
          with general laws remain unaffected by this. However, liability in
          this respect is only possible from the point in time at which a
          concrete infringement of the law becomes known. If we become aware of
          corresponding infringements, we will remove this content immediately.
        </Text>
      </GridWrapperStyled>
      <Text as="h1" size="2.2rem">
        Liability for links{' '}
      </Text>{' '}
      <GridWrapperStyled>
        <Text as="p" size="2rem">
          Our offer contains links to external websites of third parties, on
          whose contents we have no influence. Therefore, we cannot assume any
          liability for these external contents. The respective provider or
          operator of the pages is always responsible for the content of the
          linked pages. The linked pages were checked for possible legal
          violations at the time of linking. Illegal contents were not
          recognisable at the time of linking.
        </Text>

        <Text as="p" size="2rem">
          However, permanent monitoring of the content of the linked pages is
          not reasonable without concrete indications of a legal violation. If
          we receive knowledge of illegal contents on these linked websites, we
          will delete the according links.
        </Text>
      </GridWrapperStyled>
      <Text as="h1" size="2.2rem">
        Copyright
      </Text>
      <GridWrapperStyled>
        <Text as="p" size="2rem">
          All content of this website, especially pictures, images, graphical
          presentations and so forth are subject to copyright laws. The contents
          and works on these pages created by the site operator are subject to
          German copyright law. Duplication, processing, distribution and any
          kind of exploitation outside the limits of copyright require the
          written consent of the respective author or creator. Downloads and
          copies of this site are only permitted for private, non-commercial
          use.
        </Text>

        <Text as="p" size="2rem">
          In so far as the content on this site was not created by the operator,
          the copyrights of third parties are respected. In particular,
          third-party content is marked as such. Should you nevertheless become
          aware of a copyright infringement, please inform us accordingly. If we
          become aware of any infringements, we will remove such content
          immediately.
        </Text>

        <Text as="p" size="2rem">
          Source:{' '}
          <a href="https://www.e-recht24.de/" target="_blank">
            eRecht24
          </a>
        </Text>
      </GridWrapperStyled>
    </ContainerStyled>
  );
};

export default ImprintContent;
