import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import { graphql } from 'cm6-graphql';
import { baseTheme } from './editorStyles';
import { lineNumbers } from '@codemirror/view';
import { history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { json } from '@codemirror/lang-json';
// import {
//   GraphQLObjectType,
//   GraphQLSchema,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInputObjectType,
//   GraphQLNonNull,
//   GraphQLScalarType,
//   GraphQLFieldConfigArgumentMap,
//   GraphQLFieldConfigMap,
//   GraphQLFieldConfig,
//   GraphQLEnumType,
//   GraphQLOutputType,
//   GraphQLInt,
// } from 'graphql';
import { useThemeSwitcher } from '../../../../contexts';
import { lightEditorTheme } from './lightEditorTheme';

import styles from './Editor.module.scss';
import { useSchemaDocumentation } from '../../../../contexts/SchemaDocumentation.context';
import { SArgType, SFieldType, SMiniType, SType, SchemaType } from 'types/SchemaType';

const Editor = (props: { query: string; onChangeHandler: (value: string) => void }) => {
  const { isDark } = useThemeSwitcher();
  const { schema } = useSchemaDocumentation();
  const [isEditorDark, setEditorTheme] = useState(isDark);

  useEffect(() => {
    setEditorTheme(isDark);
  }, [isDark]);

  const currentTheme = isEditorDark ? baseTheme : lightEditorTheme;

  // const [apiResponse, setApiResponse] = useState<SType[]>([]);

  // const argumentDefinitions: GraphQLFieldConfigArgumentMap = {};

  // function getFieldDefinition(field: SFieldType) {
  //   field.args.forEach((arg: SArgType) => {
  //     if (arg.type.kind === 'String') {
  //       argumentDefinitions[arg.name] = {
  //         type: new GraphQLNonNull(GraphQLString), // Замените на нужные типы аргументов
  //       };
  //     }
  //     argumentDefinitions[arg.name] = {
  //       type: new GraphQLNonNull(GraphQLString), // Замените на нужные типы аргументов
  //     };
  //   });
  //   return {
  //     type: field.type, // Замените на нужный тип данных
  //     description: field.description,
  //     args: argumentDefinitions,
  //   };
  // }

  // useEffect(() => {
  //   const f = schema ? (schema as SchemaType).types : null;
  //   if (f) setApiResponse(f);
  // }, [schema]);

  // const convertSTypeToGraphQLOutputType = (field: SType): GraphQLOutputType => {
  //   // field.name = `${field.name}a`;
  //   if (field.kind === 'OBJECT') {
  //     return new GraphQLObjectType({ name: field.name, fields: {} });
  //   } else if (field.kind === 'SCALAR') {
  //     return new GraphQLScalarType({ name: field.name });
  //   }
  //   if (field.kind === 'INPUT_OBJECT') {
  //     return new GraphQLObjectType({ name: field.name, fields: {} });
  //   }
  //   if (field.kind === 'ENUM') {
  //     return new GraphQLEnumType({
  //       name: `${field.name}`,
  //       values: {},
  //     });
  //   }
  //   return GraphQLString;
  // };

  // const queryFields: GraphQLFieldConfigMap<unknown, unknown> = {};

  // if (schema) {
  //   (schema?.types as SType[]).map((field) => {
  //     const fieldConfig: GraphQLFieldConfig<unknown, unknown> = {
  //       type: convertSTypeToGraphQLOutputType(field), // Преобразование SType в GraphQLOutputType
  //       description: field.description,
  //       // args: field.args.reduce((args, arg) => {
  //       //   args[arg.name] = { type: new GraphQLNonNull(GraphQLString) }; // Замените на нужные типы аргументов
  //       //   return args;
  //       // }, {}),
  //     };
  //     queryFields[`${field.name}`] = fieldConfig;
  //   });
  // }

  // console.log(queryFields);

  // const TestType: GraphQLObjectType = new GraphQLObjectType({
  //   name: 'Query',
  //   fields: queryFields,
  // });

  // const TestSchema = new GraphQLSchema({
  //   query: TestType,
  //   // mutation: schema?.mutationType,
  //   // subscription: schema?.subscriptionType,
  //   // directives: schema?.directives,
  // });

  return (
    <CodeMirror
      autoFocus={true}
      value={props.query ? props.query : ``}
      height="200px"
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
      }}
      extensions={[
        currentTheme,
        bracketMatching(),
        closeBrackets(),
        history(),
        autocompletion(),
        lineNumbers(),
        syntaxHighlighting(oneDarkHighlightStyle),
        json(),
      ]}
      className={styles.mirror}
      onChange={(event) => {
        props.onChangeHandler(event);
      }}
    />
  );
};

export default Editor;
