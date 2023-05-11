import React, { useCallback, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { SchemaWindow } from '../';

import { SArgType, SchemaType, SType } from 'types/SchemaType';
import schemaGetType from '../../../../utils/SchemaGetType';

import styles from './Schema.module.scss';

interface SchemaStackElem {
  description: string;
  type?: SType;
  args: SArgType[];
}

interface SchemaProps {
  schema: SchemaType;
}

function Schema({ schema }: SchemaProps) {
  const [schemaStack, setSchemaStack] = useState<SchemaStackElem[]>([]);

  const pushToStack = useCallback(
    (elem: SchemaStackElem) => {
      const newArr = [...schemaStack, elem];
      setSchemaStack(newArr);
    },
    [schemaStack]
  );

  const popFromStack = useCallback(() => {
    const newArr = [...schemaStack];
    newArr.length = newArr.length - 1;
    setSchemaStack(newArr);
  }, [schemaStack]);

  useEffect(() => console.log(schemaStack), [schemaStack]);

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
                        description: field.description,
                        type: schema.types.find(
                          (type) => type.name === schemaGetType(field.type)[1]
                        ),
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
          {/* <div>
            <div>{currSchemaQuery.name}(</div>
            <ul>
              {currSchemaQuery.args.map((arg, idx) => {
                return (
                  <li key={idx}>
                    {arg.name}: {getTypeStr(arg.type)[0]}
                  </li>
                );
              })}
            </ul>
            <div>): {getTypeStr(currSchemaQuery.type)[0]}</div>
          </div>
          <div className={styles['description']}>{currSchemaQuery.description}</div>
          <div>
            <Typography variant="h6">Type Details</Typography>
            <div></div>
            <ul></ul>
            <div></div>
          </div> */}
          {/* currSchemaQuery */}
          <SchemaWindow
            description={schemaStack[schemaStack.length - 1].description}
            type={schemaStack[schemaStack.length - 1].type}
            args={schemaStack[schemaStack.length - 1].args}
            nextPage={pushToStack}
            schema={schema}
          />
        </div>
      )}
    </div>
  );
}

export default Schema;
