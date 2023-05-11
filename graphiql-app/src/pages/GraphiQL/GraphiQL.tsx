/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { IconButton, Container, CircularProgress, Divider } from '@mui/material';
import { PlayArrow, ArrowDropDown } from '@mui/icons-material';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setVariables, setHeaders, setResponse } from '../../redux/graphQLSlice';
import { useSchemaDocumentation } from '../../contexts';
import { Schema } from './components';

import styles from './GraphiQL.module.scss';

const url = 'https://rickandmortyapi.com/graphql';

function GraphiQL() {
  const { schema, loadSchemaFromServer } = useSchemaDocumentation();
  const query = useSelector((state: RootState) => state.graphQL.query);
  const variables = useSelector((state: RootState) => state.graphQL.variables);
  const headers = useSelector((state: RootState) => state.graphQL.headers);
  const response = useSelector((state: RootState) => state.graphQL.response);
  const dispatch = useDispatch();
  const [isLoaderGoing, setIsLoaderGoing] = useState(false);
  const [tabValue, setTabValue] = useState('');

  useEffect(() => {
    loadSchemaFromServer(url);
  }, []);

  const onClickHandler = useCallback(async () => {
    if (query) {
      setIsLoaderGoing(true);
      const objHeader = JSON.parse(headers);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...objHeader,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query: query, variables: JSON.parse(variables) }),
      });
      const data = await response.json();
      console.log(data);
      dispatch(setResponse(JSON.stringify(data, null, 2)));
      setIsLoaderGoing(false);
    }
  }, [dispatch, query, variables, headers]);

  return (
    <Container className={styles['graph-main-block']}>
      <div className={styles['editor-block']}>
        <div className={styles['query-block']}>
          <textarea
            className={styles['textarea']}
            value={query}
            onChange={(event) => dispatch(setQuery(event.target.value))}
          ></textarea>
          <div className={styles['command-panel']}>
            <IconButton className={styles['btn-start']} color="success" onClick={onClickHandler}>
              <PlayArrow sx={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
        <Divider />
        <div className={styles['tab-block']}>
          <div className={styles['tab-panel']}>
            <div className={styles['tab']} onClick={() => setTabValue('variables')}>
              Variables
            </div>
            <div className={styles['tab']} onClick={() => setTabValue('headers')}>
              Headers
            </div>
            {tabValue !== '' && (
              <div className={styles['btn-close']} onClick={() => setTabValue('')}>
                <ArrowDropDown />
              </div>
            )}
          </div>
          {tabValue === 'variables' && (
            <div className={styles['textarea-block']}>
              <textarea
                className={styles['textarea']}
                value={variables}
                onChange={(event) => dispatch(setVariables(event.target.value))}
              ></textarea>
            </div>
          )}
          {tabValue === 'headers' && (
            <div className={styles['textarea-block']}>
              <textarea
                className={styles['textarea']}
                value={headers}
                onChange={(event) => dispatch(setHeaders(event.target.value))}
              ></textarea>
            </div>
          )}
        </div>
      </div>
      <div className={styles['response-block']}>
        {isLoaderGoing ? (
          <div className={styles['loader-block']}>
            <CircularProgress />
          </div>
        ) : (
          <pre>{response}</pre>
        )}
      </div>
      {schema && <Schema schema={schema} />}
    </Container>
  );
}

export default GraphiQL;
