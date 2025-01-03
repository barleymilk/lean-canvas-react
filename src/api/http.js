import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}

// export const canvases = create('http://localhost:8000/canvases/');
export const canvases = create(
  'https://json-server-vercel-delta-jade.vercel.app/canvases',
);
