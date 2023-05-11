import React from 'react';
import { Typography } from '@mui/material';
import { SchemaType, SType, SArgType } from '../../../../types/SchemaType';
import schemaGetType from '../../../../utils/SchemaGetType';

// import styles from './SchemaWindow.module.scss';

interface SchemaStackElem {
  description: string;
  type?: SType;
  args: SArgType[];
}

interface SchemaWindowProps {
  nextPage: (elem: SchemaStackElem) => void;
  schema: SchemaType;
}

function SchemaWindow(props: SchemaWindowProps & SchemaStackElem) {
  const { description, type, args, nextPage, schema } = props;

  return (
    <div>
      <div>{description}</div>
      {type && (
        <div>
          <Typography variant="h6">Type Details</Typography>
          {type.description.length > 0 && (
            <div>
              <Typography variant="body1">{type.description}</Typography>
              {type.kind} {type.name}
            </div>
          )}
          {(type.fields || type.inputFields) && (
            <div>
              <div>
                type {type.name} {`{`}
              </div>
              <ul>
                {type.fields?.map((field, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      nextPage({
                        description: field.description,
                        type: schema.types.find(
                          (type) => type.name === schemaGetType(field.type)[1]
                        ),
                        args: field.args,
                      })
                    }
                  >
                    {field.name}: {schemaGetType(field.type)[0]}
                  </li>
                ))}
                {type.inputFields?.map((field, idx) => (
                  <li key={idx}>
                    {field.name}: {schemaGetType(field.type)[0]}
                  </li>
                ))}
              </ul>
              <div>{`}`}</div>
            </div>
          )}
        </div>
      )}
      {args.length > 0 && (
        <div>
          <Typography variant="h6">Arguments</Typography>
          <ul>
            {args.map((arg, idx) => (
              <li key={idx}>
                {arg.name}: {schemaGetType(arg.type)[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SchemaWindow;
