import React from 'react';
import { Button, Typography } from '@mui/material';
import { SchemaWindow } from '../';
import { useSchemaDocumentation } from '../../../../contexts';
import { SchemaType } from 'types/SchemaType';
import schemaGetType from '../../../../utils/SchemaGetType';

import styles from './Schema.module.scss';

interface SchemaProps {
  schema: SchemaType;
}

function Schema({ schema }: SchemaProps) {
  const { schemaStack, pushToStack, popFromStack } = useSchemaDocumentation();

  return (
    <div className={styles['main-block']}>
      {schemaStack.length === 0 && (
        <div className={styles['queries-block']}>
          <Typography variant="h6">Queries</Typography>
          <ul>
            {schema.types
              .find((type) => type.name === 'Query')
              ?.fields?.map((field, idx) => {
                return (
                  <li
                    key={idx}
                    className={styles['query-item']}
                    onClick={() =>
                      pushToStack({
                        name: field.name,
                        description: field.description,
                        type: schemaGetType(field.type),
                        args: field.args,
                      })
                    }
                  >
                    {field.name}(...): {schemaGetType(field.type)[0]}{' '}
                    <span className={styles['arrow']}>&gt;</span>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      {schemaStack.length > 0 && (
        <div>
          <Button variant="contained" onClick={popFromStack}>
            Back
          </Button>
          <SchemaWindow />
        </div>
      )}
    </div>
  );
}

export default Schema;
