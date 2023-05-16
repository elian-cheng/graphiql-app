import { setQuery } from '../../../../redux/graphQLSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../../redux/store';

import CodeMirror from '@uiw/react-codemirror';
// import { syntaxHighlighting } from '@codemirror/language';
import { graphql } from 'cm6-graphql';
import { myHighlightStyle, baseTheme } from './editorStyles';
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view';
import { history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle, oneDark } from '@codemirror/theme-one-dark';
import { useSchemaDocumentation } from '../../../../contexts';

import styles from './Editor.module.scss';
import { TestSchema } from './TestSchema';
import { useEffect, useState } from 'react';

const Editor = () => {
  const query = useSelector((state: RootState) => state.graphQL.query);
  const { schema, loadSchemaFromServer } = useSchemaDocumentation();

  useEffect(() => {
    console.log(schema);
  }, [schema]);

  const dispatch = useDispatch();
  return (
    <CodeMirror
      autoFocus={true}
      value={query ? query : ``}
      height="200px"
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
      }}
      extensions={[
        baseTheme,
        bracketMatching(),
        closeBrackets(),
        history(),
        autocompletion(),
        lineNumbers(),
        // oneDark,
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
        dispatch(setQuery(event));
      }}
    />
  );
};

export default Editor;
