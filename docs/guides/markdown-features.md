# Markdown features

Gatsby-docs-kit support some extra features when writing pages in markdown.

## Code and Syntax Highlighting

Syntax highlighting is enabled by default on all code blocks. By default we are using PrismJs. The language should be detected automatically, but you can sometimes get better results by specifying the language. You can do so using an info string, following the three opening backticks. Blocks of code can be also indented with four spaces. We recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

### For example

    ```javascript
    const s = 'Test';
    alert(s);
    ```

    # In the following code snippet, lines 1 and 4 through 6 will get the line highlighting
    ```javascript{1,4-6}
    // In your gatsby-config.js
    plugins: [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-prismjs`,
          ]
        }
      }
    ]
    ```

```javascript
const s = 'JavaScript syntax highlighting';
alert(s);
```

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

To get more info about the line page parsing, see [parse-numeric-range](https://www.npmjs.com/package/parse-numeric-range).

## Preview React Components

Gatsby-Docs-Kit uses [React live](https://react-live.kitten.sh/) to provide support for rendering and live editing React components. To enable it, start code block like so:

```markdown
```jsx render
  <Carousel
    autoPlay={2000}
    infinite
    arrows
  >
    <img src="https://1fichier.com/?fili3p7aoh" />
    <img src="https://1fichier.com/?bbk02e1jci" />
    <img src="https://1fichier.com/?jltyz4xk0w" />
  </Carousel>
'``
```

this will be rendered as follows:

<br />

```jsx render
<Carousel
  autoPlay={2000}
  infinite
  arrows
>
  <img src="https://1fichier.com/?fili3p7aoh" />
  <img src="https://1fichier.com/?bbk02e1jci" />
  <img src="https://1fichier.com/?jltyz4xk0w" />
</Carousel>
```

> You must specify all variables used within that code block. To do so, export them from `src/globalReferences.js`.

To make previous example work, `src/globalReferences.js` should looks like:

```js
import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';

export { Carousel };
```

To see all available features for rendering React components, see documentation of [React live](https://react-live.kitten.sh/).

## Linking other documents

You can use relative urls to other markdown file which will automatically get converted to the corresponding html links when they get rendered.

### For example:

```markdown
[Imagine link to other markdown](other-document.md)
```

If you created `other-document.md` and you added it navigation config, then it will be converted into link pointing to corresponding page.

## Linking images and other assets

Static assets (like images, pdf's) can be linked using relative urls. All static asset will be copied to `public` directory with static assets.

For example following syntax:

```markdown
![Test image](../assets/example.jpg)
```

will result with:

![Test image](../assets/test.jpg)

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```html
<p style="font-style: italic; font-size: 15px"> Custom paragraph </p>
```

<p style="font-style: italic; font-size: 15px"> Custom paragraph </p>
