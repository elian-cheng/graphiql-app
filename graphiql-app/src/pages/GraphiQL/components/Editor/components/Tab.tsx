import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import COLORS from '../../../../../theme/colors';
import { useThemeSwitcher } from '../../../../../contexts';

function Tab(props: { value: boolean; fn: () => void; children: ReactNode }) {
  const { isDark } = useThemeSwitcher();
  return (
    <Button
      style={{
        backgroundColor: `${
          props.value && isDark
            ? COLORS.ACTIVE_TAB
            : props.value && !isDark
            ? COLORS.SECONDARY_MAIN
            : ''
        }`,
      }}
      onClick={() => props.fn()}
    >
      {props.children}
    </Button>
  );
}

export default Tab;
