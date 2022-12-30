export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Prabhat Gupta';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Software Engineer @ Gameopedia AS⚡ Rapid Development⚡ Quick Learner⚡End-User Focus';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.  Current Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/9be1f6b8-7222-4177-b841-1c9099c1f1f1/deploy-status)](https://app.netlify.com/sites/chimerical-snickerdoodle-a36a00/deploys)';

  return {
    name,
    blogTitle,
    footerText,
  };
};
