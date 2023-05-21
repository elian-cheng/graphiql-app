import React, { useMemo } from 'react';
import { useThemeSwitcher } from '../../contexts';
import { AvatarCom } from './components';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Link, Typography } from '@mui/material';

import styles from './Welcome.module.scss';

function Welcome() {
  const { t } = useTranslation();
  const { isDark } = useThemeSwitcher();

  const developers = useMemo(
    () => [
      {
        avatar: 'src/assets/images/avatar_1.png',
        name: 'Anubic29',
      },
      { avatar: 'src/assets/images/avatar.jpg', name: 'Elenadatso' },
      { avatar: 'src/assets/images/avatar_2.jpg', name: 'Elian-cheng' },
    ],
    []
  );

  return (
    <Container>
      <section className={styles['section']}>
        <Typography variant="h3" className={styles['title']}>
          {t('Developers')}
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
          {t('Project')}
        </Typography>
        <div className={styles['section-content']}>
          <div className={styles['project-logo']}></div>
          <div className={styles['text-content']}>
            <Typography variant="body1">
              <Trans i18nKey="welcome-text-1" t={t}>
                <Link href="https://rickandmortyapi.com/" underline="hover" target="_blank"></Link>
              </Trans>
            </Typography>
          </div>
        </div>
      </section>
      <section className={styles['section']}>
        <Typography variant="h3" className={styles['title']}>
          {t('Course')}
        </Typography>
        <div className={styles['section-content']}>
          <div className={styles['text-content']}>
            <Typography variant="body1">
              <Trans i18nKey="welcome-text-2" t={t}>
                <b>RS School</b>
              </Trans>
            </Typography>
            <Typography variant="body1" sx={{ mb: '2.5rem' }}>
              {t('welcome-text-3')}
            </Typography>
          </div>
          <div
            style={{ filter: `${isDark ? 'invert(1)' : ''}` }}
            className={styles['course-logo']}
          ></div>
        </div>
      </section>
    </Container>
  );
}

export default Welcome;
