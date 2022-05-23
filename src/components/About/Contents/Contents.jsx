import React from 'react';
import {
  aboutFriends,
  exhibitionDetails
} from '../../../constants/about-friends';
import { Heading, TextStyled as Text } from '../../global/utils';
import ContactForm from './ContactForm/ContactForm';
import {
  ContainerStyled,
  GridWrapperStyled,
  IDoListStyled,
  IDoListItemStyled,
  ContactWrapperStyled,
  ExhibitionsWrapperStyled,
  FriendsWrapperStyled,
  ExhibitionListStyled,
  ExhibitionListItemStyled,
  AboutMeWrapperStyled,
  FriendsListStyled,
  FriendsListItemStyled,
  IDoWrapperStyled
} from './ContentsStyles';

const Contents = () => {
  const arrayExh = exhibitionDetails.length;
  const halfArray = arrayExh / 2;

  return (
    <ContainerStyled>
      <GridWrapperStyled>
        <AboutMeWrapperStyled>
          <Text as="p" size="2.2rem">
            My name is Annika Terwey and I am a German Italian,
            multi-disciplinary designer, artist and curator based in Berlin.
            Currently I am writing my Masterthesis in Interfacedesign at the
            FH;P.
          </Text>

          <Text as="p" size="2.2rem">
            My interests range from environmental science, digitalization and
            human perception up to creating experiences that have a positive
            impact on the world and explore new forms of communication through
            design, art, interaction and exhibition.
          </Text>

          <Text as="p" size="2.2rem">
            Based on my interest in combining science or current problems and
            design, I organize exhibitions on current issues together with
            Sophie Lazari.
          </Text>
        </AboutMeWrapperStyled>
        <IDoWrapperStyled>
          <Heading as="h2" size="2.6rem">
            What I do?
          </Heading>
          <IDoListStyled>
            <IDoListItemStyled>Curation</IDoListItemStyled>
            <IDoListItemStyled>Art direction</IDoListItemStyled>
            <IDoListItemStyled>UX Design</IDoListItemStyled>
            <IDoListItemStyled>Frontend Developer</IDoListItemStyled>
            <IDoListItemStyled>Augmented Reality (WebAR)</IDoListItemStyled>
          </IDoListStyled>
        </IDoWrapperStyled>
      </GridWrapperStyled>

      <ContactWrapperStyled>
        <Heading as="h2" size="2.6rem" noTransform $wrap>
          Got a project in mind? Si hi and write me :)
        </Heading>
        <ContactForm />
      </ContactWrapperStyled>

      <ExhibitionsWrapperStyled>
        <Heading as="h2" size="2.6rem">
          Selected exhibitions
        </Heading>
        <GridWrapperStyled>
          <ExhibitionListStyled>
            {exhibitionDetails.map((exhibition, i) =>
              i <= halfArray ? (
                <ExhibitionListItemStyled key={exhibition.id}>
                  {exhibition.name}
                  <br />
                  {exhibition.date}
                </ExhibitionListItemStyled>
              ) : null
            )}
          </ExhibitionListStyled>

          <ExhibitionListStyled>
            {exhibitionDetails.map((exhibition, i) =>
              i > halfArray ? (
                <ExhibitionListItemStyled key={exhibition.id}>
                  {exhibition.name}
                  <br />
                  {exhibition.date}
                </ExhibitionListItemStyled>
              ) : null
            )}
          </ExhibitionListStyled>
        </GridWrapperStyled>
      </ExhibitionsWrapperStyled>

      <FriendsWrapperStyled>
        <Heading as="h2" size="2.6rem" noTransform $wrap>
          Don’t miss out and also take a look at what my friends are working on!
        </Heading>
        <FriendsListStyled>
          {aboutFriends.map(friend => (
            <FriendsListItemStyled key={friend.id}>
              <a href={friend.link} target="_blank" rel="noreferrer">
                {friend.caption},
              </a>
            </FriendsListItemStyled>
          ))}
        </FriendsListStyled>
      </FriendsWrapperStyled>
    </ContainerStyled>
  );
};

export default Contents;
