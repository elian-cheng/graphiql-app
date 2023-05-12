import React, { useState } from 'react';
import { Typography, Divider } from '@mui/material';
import { SchemaListItem, SchemaWindow } from '../';
import { useSchemaDocumentation } from '../../../../contexts';
import { SchemaType } from 'types/SchemaType';
import schemaGetType from '../../../../utils/SchemaGetType';

import styles from './Schema.module.scss';

interface SchemaProps {
  schema: SchemaType;
}

function Schema({ schema }: SchemaProps) {
  const { schemaStack, pushToStack } = useSchemaDocumentation();
  const [isActiveSchema, setIsActiveSchema] = useState(false);

  return (
    <div
      className={
        isActiveSchema ? `${styles['main-block']} ${styles['active']}` : styles['main-block']
      }
    >
      <div className={styles['content']}>
        {schemaStack.length === 0 && (
          <div className={styles['queries-block']}>
            <Typography variant="h6" className={styles['title']}>
              Queries
            </Typography>
            <Divider />
            <ul>
              {schema.types
                .find((type) => type.name === 'Query')
                ?.fields?.map((field, idx) => {
                  return (
                    <SchemaListItem
                      key={idx}
                      text={`${field.name}(...): ${schemaGetType(field.type)[0]}`}
                      onCkickHandler={() =>
                        pushToStack({
                          name: field.name,
                          description: field.description,
                          type: schemaGetType(field.type),
                          args: field.args,
                        })
                      }
                    />
                  );
                })}
            </ul>
          </div>
        )}
        {schemaStack.length > 0 && <SchemaWindow />}
      </div>
      <div className={styles['toggle-btn']} onClick={() => setIsActiveSchema((prev) => !prev)}>
        Schema
      </div>
    </div>
  );
}

export default Schema;
