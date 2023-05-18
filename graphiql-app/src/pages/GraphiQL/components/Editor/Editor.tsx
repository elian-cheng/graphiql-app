import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { baseTheme } from './editorStyles';
import { lineNumbers } from '@codemirror/view';
import { history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { GraphQLSchema } from 'graphql';
import { useThemeSwitcher } from '../../../../contexts';
import { lightEditorTheme } from './lightEditorTheme';

import styles from './Editor.module.scss';
import { useSchemaDocumentation } from '../../../../contexts/SchemaDocumentation.context';

const Editor = (props: { query: string; onChangeHandler: (value: string) => void }) => {
  const { isDark } = useThemeSwitcher();
  const { schema } = useSchemaDocumentation();
  const [isEditorDark, setEditorTheme] = useState(isDark);

  useEffect(() => {
    setEditorTheme(isDark);
  }, [isDark]);

  const currentTheme = isEditorDark ? baseTheme : lightEditorTheme;

  const TestSchema = new GraphQLSchema({
    // query: schema?.queryType,
    mutation: schema?.mutationType,
    subscription: schema?.subscriptionType,
    directives: schema?.directives,
  });

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
        graphql(TestSchema, {
          onShowInDocs(field, type, parentType) {
            alert(`Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`);
          },
          onFillAllFields(view, schema, _query, cursor, token) {
            alert(`Filling all fields. Token: ${token}`);
          },
        }),
      ]}
      className={styles.mirror}
      onChange={(event) => {
        props.onChangeHandler(event);
      }}
    />
  );
};

export default Editor;
