import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  const stylesheet = document.createElement('link');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute(
    'href',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
  );
  document.head.appendChild(stylesheet);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Yusuf Abdulla Website Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Website Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};
