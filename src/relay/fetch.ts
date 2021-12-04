import type { FetchFunction } from 'relay-runtime';

import { GRAPHQL_URL } from '../../config';

type RequestProps = {
  method: string;
  headers: Record<string, string>;
  body: string | FormData | null;
};

const fetchGraphQL: FetchFunction = async (
  operation,
  variables,
  cacheConfig,
  uploadables,
) => {
  const config: RequestProps = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: '',
  };

  if (uploadables) {
    const formData = new FormData();

    const requestText = operation?.text?.replace(/\n/g, '');

    const query = JSON.stringify({
      query: requestText,
      variables,
    });

    formData.append('operations', query);

    const map: { [key: number]: string[] } = {};

    let idx = 0;
    const prefix = 'variables';

    Object.keys(uploadables).forEach((field: string) => {
      const files = uploadables[field];

      if (Array.isArray(files)) {
        // multi uploads
        for (const i in files) {
          map[idx] = [`${prefix}.${field}.${i}`];
          formData.append(`${idx}`, files[i]);
          idx++;
        }

        formData.append('map', JSON.stringify(map));
      } else {
        // single upload
        map[idx] = [`${prefix}.${field}`];
        formData.append('map', JSON.stringify(map));
        formData.append(`${idx}`, files);
      }
    });

    formData.append('map', JSON.stringify(map));

    config.body = formData;
  } else {
    config.headers['Content-Type'] = 'application/json';

    config.body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }

  return fetch(GRAPHQL_URL, config).then(response => response.json());
};

export default fetchGraphQL;
