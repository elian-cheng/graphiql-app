import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import rs from '../../assets/svg/course.svg';
import classes from './Footer.module.scss';
import Box from '@mui/material/Box';
import Member from './components/Member/Member';
import Colors from '../../theme/colors';
import { useTranslation } from 'react-i18next';
import { useThemeSwitcher } from '../../contexts/index';
import COLORS from '../../theme/colors';

function Footer() {
  const { t } = useTranslation();
  const { isDark } = useThemeSwitcher();

  return (
    <Box
      sx={{
        borderTop: `${Colors.SECONDARY_MAIN} 1px solid`,
      }}
      component="footer"
      className={classes.footer}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Link
          to="https://rs.school/react/"
          className={classes['logo-link']}
          style={{ width: '150px', filter: 'invert' }}
        >
          <img
            src={rs}
            className={classes['logo-img']}
            style={{ filter: `${isDark ? 'invert(1)' : ''}` }}
          />
        </Link>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          className={classes['team-members-wrap']}
          color={isDark ? COLORS.PRIMARY_CONTR_TEXT : COLORS.SECONDARY_DARK}
        >
          <Box
            sx={{ display: 'flex', width: '100%', alignItems: 'center' }}
            className={classes['team-members-hold']}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: 'capitalize', whiteSpace: 'nowrap', paddingRight: '17px' }}
            >
              {t('team')}
            </Typography>
            <Member name={'Anubic29'} link={'https://github.com/Anubic29'} />
            <Member name={'Elian-cheng'} link={'https://github.com/Elian-cheng'} />
            <Member name={'Elenadatso'} link={'https://github.com/ElenaDatso'} />
            <Typography
              component="span"
              variant="body1"
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
