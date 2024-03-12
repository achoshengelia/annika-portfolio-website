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
            Hello, I'm Annika Terwey, a multi-disciplinary designer, artist, and
            curator based in Berlin. My design journey started at the University
            of Arts (Berlin) and FH Potsdam, where I studied communication and
            interaction design. Now, I'm a UX/UI Designer at FixMyCity, working
            on digital tools for bicycle traffic planning, and I'm also
            revamping the visual identity for the Lanalive festival, adding a
            cultural touch to my work.
          </Text>
          <Text as="p" size="2.2rem">
            My interests are diverse, ranging from environmental science to
            digitalization and human perception. I aim to create meaningful
            experiences that solve design challenges and contribute positively
            to the world. I enjoy blending science, current affairs, and design
            to curate engaging exhibitions that spark dialogue and inspiration.
          </Text>
          <Text as="p" size="2.2rem">
            Based on my interest in combining science or current problems and
            design, I organise exhibitions on current issues together with
            Sophie Lazari.
          </Text>
        </AboutMeWrapperStyled>
        <AboutMeWrapperStyled>
          <IDoWrapperStyled>
            <Heading as="h2" size="2.6rem" noTransform>
              What I do?
            </Heading>
            <IDoListStyled>
              <IDoListItemStyled>Web design</IDoListItemStyled>
              <IDoListItemStyled>Visual design</IDoListItemStyled>
              <IDoListItemStyled>Identity design</IDoListItemStyled>
              <IDoListItemStyled>Content creation</IDoListItemStyled>
              <IDoListItemStyled>Curation</IDoListItemStyled>
              <IDoListItemStyled>Exhibition design</IDoListItemStyled>
            </IDoListStyled>
          </IDoWrapperStyled>
        </AboutMeWrapperStyled>
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
        {!isFormOpen ? (
          <>
            <Heading as="h2" size="2.6rem" noTransform $wrap>
              Feel free to reach out, and let's create something impactful
              together!
            </Heading>
            <ButtonStyled onClick={() => SetIsFormOpen(true)}>
              <ArrowWrapperStyled>→</ArrowWrapperStyled> WRITE ME AN EMAIL
            </ButtonStyled>
          </>
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
                <ExhibitionListItemStyled key={i}>
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
                <ExhibitionListItemStyled key={i}>
                  {exhibition.name}
                  <br />
                  {exhibition.date}
                </ExhibitionListItemStyled>
              ) : null
            )}
          </ExhibitionListStyled>
        </GridWrapperStyled>
      </ExhibitionsWrapperStyled>
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
        <Heading as="h2" size="2.6rem" noTransform $wrap>
          Don’t miss out on what my friends are working!
        </Heading>
        <GridWrapperStyled>
          <FriendsWrapperStyled>
            <FriendsListStyled>
              {aboutFriends.map((friend, index) => (
                <FriendsListItemStyled key={index}>
                  <a href={friend.link} target="_blank" rel="noreferrer">
                    {friend.caption},
                  </a>
                </FriendsListItemStyled>
              ))}
            </FriendsListStyled>
          </FriendsWrapperStyled>
        </GridWrapperStyled>
      </ExhibitionsWrapperStyled>
    </ContainerStyled>
  );
};

export default Contents;
