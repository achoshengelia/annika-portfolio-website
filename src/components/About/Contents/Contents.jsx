import React, { useState } from 'react';
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
  IDoWrapperStyled,
  ArrowWrapperStyled,
  ButtonStyled
} from './ContentsStyles';

const Contents = () => {
  const [isFormOpen, SetIsFormOpen] = useState(false);

  const arrayExh = exhibitionDetails.length;
  const halfArray = arrayExh / 2;

  return (
    <ContainerStyled>
      <GridWrapperStyled
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
          <Heading as="h2" size="2.6rem" noTransform>
            What I do?
          </Heading>
          <IDoListStyled>
            <IDoListItemStyled>Curation</IDoListItemStyled>
            <IDoListItemStyled>Conceptual design</IDoListItemStyled>
            <IDoListItemStyled>UI / UX design</IDoListItemStyled>
            <IDoListItemStyled>Front-end web developement</IDoListItemStyled>
            <IDoListItemStyled>Augmented Reality (WebAR)</IDoListItemStyled>
          </IDoListStyled>
        </IDoWrapperStyled>
      </GridWrapperStyled>

      <ContactWrapperStyled
        $isFormOpen={isFormOpen}
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
        <Heading as="h2" size="2.6rem" noTransform $wrap>
          Got a project in mind? Say hi and write me :)
        </Heading>
        {!isFormOpen ? (
          <ButtonStyled onClick={() => SetIsFormOpen(true)}>
            <ArrowWrapperStyled>→</ArrowWrapperStyled> WRITE ME AN EMAIL
          </ButtonStyled>
        ) : null}
        <ContactForm />
      </ContactWrapperStyled>

      <ExhibitionsWrapperStyled
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
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

      <FriendsWrapperStyled
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.1,
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
