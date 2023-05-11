import React from 'react';
import { Typography } from '@mui/material';

import { SchemaType } from 'types/SchemaType';

import styles from './Schema.module.scss';

interface SchemaProps {
  schema: SchemaType;
}

function Schema({ schema }: SchemaProps) {
  return (
    <div className={styles['main-block']}>
      <div>
        <Typography variant="h5">Queries</Typography>
        <ul>
          {schema.types
            .find((type) => type.name === 'Query')
            ?.fields?.map((field, idx) => {
              const type = field.type;
              let typeStr = '';
              if (type.name !== null) typeStr = `${type.name}`;
              else if (type.kind === 'LIST') typeStr = `[${type.ofType?.name}]`;
              return (
                <li key={idx} className={styles['query-item']}>
                  {field.name}(...): {typeStr} <span className={styles['arrow']}>&gt;</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Schema;
