import React, { useCallback, useMemo } from 'react';
import { Typography } from '@mui/material';
import schemaGetType from '../../../../utils/SchemaGetType';
import { useSchemaDocumentation } from '../../../../contexts';
import { SArgType } from 'types/SchemaType';

// import styles from './SchemaWindow.module.scss';

function SchemaWindow() {
  const { schema, pushToStack, getCurrentElem } = useSchemaDocumentation();

  const currentElem = useMemo(() => getCurrentElem(), [getCurrentElem]);
  const typeObj = useMemo(
    () => schema?.types.find((type) => type.name === currentElem.type[1]),
    [schema, currentElem]
  );

  const onClickHandlerLi = useCallback(
    (name: string, description: string, type: [string, string], args: SArgType[] = []) => {
      pushToStack({
        name,
        description,
        type,
        args,
      });
    },
    [pushToStack]
  );

  return (
    <div>
      <div>
        {currentElem.name}
        {currentElem.args.length > 0 && (
          <>
            (
            <ul>
              {currentElem.args.map((arg, idx) => (
                <li key={idx}>
                  {arg.name}: {schemaGetType(arg.type)[0]}
                </li>
              ))}
            </ul>
            )
          </>
        )}
        : {currentElem.type[0]}
      </div>
      <div>{currentElem.description}</div>
      {typeObj && (
        <div>
          <Typography variant="h6">Type Details</Typography>
          {typeObj.description.length > 0 && (
            <div>
              <Typography variant="body1">{typeObj.description}</Typography>
              {typeObj.kind} {typeObj.name}
            </div>
          )}
          {(typeObj.fields || typeObj.inputFields) && (
            <div>
              <div>
                type {typeObj.name} {`{`}
              </div>
              <ul>
                {typeObj.fields?.map((field, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      onClickHandlerLi(
                        field.name,
                        field.description,
                        schemaGetType(field.type),
                        field.args
                      )
                    }
                  >
                    {field.name}: {schemaGetType(field.type)[0]}
                  </li>
                ))}
                {typeObj.inputFields?.map((field, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      onClickHandlerLi(field.name, field.description, schemaGetType(field.type))
                    }
                  >
                    {field.name}: {schemaGetType(field.type)[0]}
                  </li>
                ))}
              </ul>
              <div>{`}`}</div>
            </div>
          )}
        </div>
      )}
      {currentElem.args.length > 0 && (
        <div>
          <Typography variant="h6">Arguments</Typography>
          <ul>
            {currentElem.args.map((arg, idx) => (
              <li
                key={idx}
                onClick={() => onClickHandlerLi(arg.name, arg.description, schemaGetType(arg.type))}
              >
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
