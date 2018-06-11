# Custom Gatsby page

Gatsby Docs Kit allows you to create your Gatsby page. To do so, follow these few steps:

1. Go to `www/src/pages`
1. Add `my-page.js` with following content

  ```javascript
  import React from 'react';

  const MyPage = () => (
    <div>
      <h1>HERE SHOULD BE LANDING PAGE</h1>
    </div>
  );

  export default MyPage;
  ```

  > Note that, because it is normal Gatsby page, you can also add here custom GraphQl query. See [Gatsby documentation](https://www.gatsbyjs.org/docs/querying-with-graphql/) for more information.

3. Open `www/gatsby-docs-kit.yml` and insert following snippet

  ```yaml
  - title: MyPage
    url: /my-custom-url # note that it's not necessary to define url here
    file: my-page.js
  ```

4. Open browser and visit http://localhost:8000/my-page

Not enough? [Read mode about GatsbyJS](https://www.gatsbyjs.org/).
