import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import rs from '../../assets/svg/course.svg';
import classes from './Footer.module.scss';
import Box from '@mui/material/Box';
import Member from './components/Member/Member';
import Colors from '../../theme/colors';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      // color="#c5c6c7"
      sx={{
        background: 'linear-gradient(to bottom, #09090a, #151618, #1d1f21, #1c1e23)',
        height: '100px',
        px: '60px',
        paddingBottom: '20px',
        display: 'flex',
        color: 'white',
        borderTop: `${Colors.SECONDARY_MAIN} 1px solid`,
      }}
      component="footer"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Link
          to="https://rs.school/react/"
          className={classes['logo-link']}
          style={{ marginRight: 'auto', width: '150px', marginTop: 'auto' }}
        >
          <img src={rs} className={classes['logo-img']} />
        </Link>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
          className={classes['team-members-wrap']}
        >
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Typography
              variant="h6"
              sx={{ textTransform: 'capitalize', whiteSpace: 'nowrap', paddingRight: '17px' }}
            >
              {t('team')}
            </Typography>
            <Box className={classes.line}></Box>
          </Box>
          <Box sx={{ display: 'flex' }} className={classes['team-wrap']}>
            <Member name={'Anubic29'} link={'https://github.com/Anubic29'} />
            <Member name={'Elian-cheng'} link={'https://github.com/Elian-cheng'} />
            <Member name={'Elenadatso'} link={'https://github.com/ElenaDatso'} />
            <Typography
              component="span"
              variant="body1"
              marginTop="auto"
              marginLeft="30px"
              paddingBottom="3px"
              className={classes.year}
            >
              2023©
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
