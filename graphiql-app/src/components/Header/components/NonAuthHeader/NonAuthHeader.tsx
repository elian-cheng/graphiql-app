import { Link } from 'react-router-dom';
import { Header } from '../../Header';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useAuth } from '../../../../contexts/Auth.context';

const NonAuthHeader = () => {
  const { signUp } = useAuth();
  const { t } = useTranslation();

  return (
    <Header>
      <Link to="/sign-in">
        <Button variant="text" size="small" color="inherit" onClick={() => signUp(false)}>
          {t('login')}
        </Button>
      </Link>
      <Button
        href="#"
        variant="outlined"
        size="small"
        color="inherit"
        onClick={() => signUp(true)}
        sx={{ marginLeft: '15px' }}
      >
        {t('signup')}
      </Button>
    </Header>
  );
};

export default NonAuthHeader;
