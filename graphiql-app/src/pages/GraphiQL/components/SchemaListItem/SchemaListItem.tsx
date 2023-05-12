import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

import styles from './SchemaListItem.module.scss';

interface SchemaListItemProps {
  text: string;
  newClassName?: string;
  onCkickHandler?: () => void;
}

function SchemaListItem(props: SchemaListItemProps) {
  const { text, newClassName, onCkickHandler } = props;

  const classNames = useMemo(() => {
    let className = styles['item'];
    if (onCkickHandler) className += ` ${styles['click-item']}`;
    if (newClassName) className += ` ${newClassName}`;
    return className;
  }, [newClassName, onCkickHandler]);

  return (
    <Typography variant="body2" component="li" className={classNames} onClick={onCkickHandler}>
      {text} {onCkickHandler && <ArrowRight />}
    </Typography>
  );
}

export default SchemaListItem;
