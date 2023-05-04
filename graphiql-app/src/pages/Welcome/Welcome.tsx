import React, { useMemo } from 'react';
import { Container, Link, Typography } from '@mui/material';
import { AvatarCom } from './components';

import styles from './Welcome.module.scss';

function Welcome() {
  const developers = useMemo(
    () => [
      {
        avatar: 'src/assets/images/avatar_1.png',
        name: 'Anubic29',
      },
      // Add Avatars
      { avatar: '', name: 'Elenadatso' },
      { avatar: '', name: 'Elian-cheng' },
    ],
    []
  );

  return (
    <Container>
      <section className={styles['section']}>
        <Typography variant="h3" className={styles['title']}>
          Developers
        </Typography>
        <ul className={styles['avatar-list']}>
          {developers.map((developer, idx) => (
            <li className={styles['avatar-item']} key={idx}>
              <AvatarCom person={developer} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles['section']}>
        <Typography variant="h3" className={styles['title']}>
          Project
        </Typography>
        <div className={styles['section-content']}>
          <div className={styles['project-logo']}></div>
          <div className={styles['text-content']}>
            <Typography variant="body1">
              &emsp; This project provides the ability to send requests to the &quot;
              <Link href="https://rickandmortyapi.com/" underline="hover">
                Rick and Morty API
              </Link>
              &quot; and get data using GraphQL.
            </Typography>
          </div>
        </div>
      </section>
      <section className={styles['section']}>
        <Typography variant="h3" className={styles['title']}>
          Course
        </Typography>
        <div className={styles['section-content']}>
          <div className={styles['text-content']}>
            <Typography variant="body1">
              &emsp; <b>RS School</b> is free-of-charge and community-based education program
              conducted by The Rolling Scopes developer community since 2013.
            </Typography>
            <Typography variant="body1">
              &emsp; Everyone can study at RS School, regardless of age, professional employment, or
              place of residence. The mentors and trainers of our school are front-end and
              javascript developers from different companies and countries.
            </Typography>
          </div>
          <div className={styles['course-logo']}></div>
        </div>
      </section>
    </Container>
  );
}

export default Welcome;
