import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, canonical }) => {
  const defaultTitle = 'NextSphere Technologies | AI, ERP, HR & Web Development Solutions';
  const defaultDescription = 'Transform your business with intelligent technology solutions including AI, ERP, HR applications, web development, and expert consulting services.';
  const defaultKeywords = 'web development, AI solutions, ERP systems, HR applications, technology consulting, digital transformation, app development, business automation';

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
