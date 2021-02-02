# React-Tiny-Link

> Convert your links into beautiful previews

Yet anotherReact link preview component with cards for web without a specific backend.

[![npm version](https://badge.fury.io/js/react-tiny-link.svg)](https://badge.fury.io/js/react-tiny-link) ![npm](https://img.shields.io/npm/v/react-tiny-link.svg) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/winhtaikaung/react-tiny-link.svg) ![NPM](https://img.shields.io/npm/l/react-tiny-link.svg)

[![All Contributors](https://img.shields.io/github/contributors/winhtaikaung/react-tiny-link?style=flat-square&color=orange&label=all%20contributors)](#contributors)

[![NPM](https://nodei.co/npm/react-tiny-link.png)](https://nodei.co/npm/react-tiny-link/)

## CORS enabled?

No. You may need a `CORS` proxy to use this component. But if you dont have one, we made the component to use https://cors-anywhere.herokuapp.com as default proxy. Thanks to [Rob](https://github.com/Rob--W). [It](https://cors-anywhere.herokuapp.com) saves my time for accessing urls.

## Installation

```

npm install --save react-tiny-link

```

## Usage & Configuration

```javascript
import { ReactTinyLink } from 'react-tiny-link'
;<ReactTinyLink
  cardSize="small"
  showGraphic={true}
  maxLine={2}
  minLine={1}
  url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
/>
```

## Props & methods

| PropName           | Description                                                                                                                                     | PropType                              | value                                          | required |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------- | -------- |
| **url**            | URL to be display as preview                                                                                                                    | string                                |                                                | `true`   |
| **cardSize**       | Size of the card                                                                                                                                | string                                | default (`small`) `small`,`large`              | `false`  |
| **maxLine**        | Maximum number of line to ellipsis                                                                                                              | number                                | 2                                              | `false`  |
| **minLine**        | Minimum number of line to ellipsis                                                                                                              | number                                | 1                                              | `false`  |
| **width**          | Width of the link preview card                                                                                                                  | number                                | default(`100vw`)                               | `false`  |
| **header**         | Default Header content                                                                                                                          | string                                | null                                           | `false`  |
| **description**    | Default description content                                                                                                                     | string                                | null                                           | `false`  |
| **proxyUrl**       | Proxy URL to pass that resolve CORS                                                                                                             | string                                | default(`https://cors-anywhere.herokuapp.com`) | `false`  |
| **showGraphic**    | Boolean value to display graphics                                                                                                               | boolean                               | default(`true`)                                | `false`  |
| **autoPlay**       | Boolean value to play the media if provided url is video                                                                                        | boolean                               | default(`false`)                               | `false`  |
| **defaultMedia**   | Default value to provide the media for failure cases                                                                                            | string                                | N.A                                            | `false`  |
| **noCache**        | Disables cache of link result                                                                                                                   | boolean                               | default(`false`)                               | `false`  |
| **onError**        | Error callback on when the url failed to fetch                                                                                                  | onError(`error:Error`)                | N.A                                            | `false`  |
| **onSuccess**      | Success callback on when the url was fetched successfully                                                                                       | onSuccess(`data:IResponseData`)       | N.A                                            | `false`  |
| **onClick**        | Click event which will allow to add custom implementation `onClick` event if it was not provided the component itself will render as `<a></a>`. | onClick(`e:Event,data:IResponseData`) | default(`null`)                                | `false`  |
| **loadSecureUrl**  | Load only secure ( `https://` ) resources. If no secure resource was found, then don't render the `<img>` and `<video>` element                 | boolean                               | default(`false`)                               | `false`  |
| **requestHeaders** | Request headers that will override the fetch headers                                                                                            | Record<string, string>;               | default(`false`)                               | `false`  |

## Hook usage

```javascript
import { useScrapper } from 'react-tiny-link'

const [result, loading, error] = useScrapper({
  url:
    'https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1',
})
```

## Params

| PropName          | Description                                               | PropType                        | value                                          | required |
| ----------------- | --------------------------------------------------------- | ------------------------------- | ---------------------------------------------- | -------- |
| **url**           | URL to be display as preview                              | string                          |                                                | `true`   |
| **proxyUrl**      | Proxy URL to pass that resolve CORS                       | string                          | default(`https://cors-anywhere.herokuapp.com`) | `false`  |
| **defaultMedias** | Default value to provide the media for failure cases      | string[]                        | N.A                                            | `false`  |
| **defaultValue**  | Default response to provide for failure cases             | IReactTinyLinkData              | N.A                                            | `false`  |
| **noCache**       | Disables cache of link result                             | boolean                         | default(`false`)                               | `false`  |
| **onError**       | Error callback on when the url failed to fetch            | onError(`error:Error`)          | N.A                                            | `false`  |
| **onSuccess**     | Success callback on when the url was fetched successfully | onSuccess(`data:IResponseData`) | N.A                                            | `false`  |

## Demo App &

- [Demo](https://winhtaikaung.github.io/react-tiny-link/)

- [SourceCode](https://github.com/winhtaikaung/react-tiny-link/)

## CodeSandbox

[![Edit React Tiny Link](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/monp6n08n8?fontsize=14)

## Contributing

1. Fork it

2. Create your feature branch (`git checkout -b my-new-feature`)

3. Commit your changes (`git commit -am 'Added some feature'`)

4. Push to the branch (`git push origin my-new-feature`)

5. Create new Pull Request

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/vladimirmoushkov"><img src="https://avatars1.githubusercontent.com/u/21225376?v=4" width="100px;" alt=""/><br /><sub><b>Vladimir Moushkov</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=vladimirmoushkov" title="Code">💻</a></td>
    <td align="center"><a href="https://bitbucket.org/srghma"><img src="https://avatars2.githubusercontent.com/u/7573215?v=4" width="100px;" alt=""/><br /><sub><b>Serhii Khoma</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=srghma" title="Code">💻</a> <a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3Asrghma" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://hitesh399.github.io/"><img src="https://avatars3.githubusercontent.com/u/15153925?v=4" width="100px;" alt=""/><br /><sub><b>Hitesh Kumar</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=hitesh399" title="Code">💻</a> <a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3Ahitesh399" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/VadymMoiseyenkoAgiliway"><img src="https://avatars3.githubusercontent.com/u/45002342?v=4" width="100px;" alt=""/><br /><sub><b>VadymMoiseyenkoAgiliway</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=VadymMoiseyenkoAgiliway" title="Code">💻</a> <a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3AVadymMoiseyenkoAgiliway" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/nastikue"><img src="https://avatars1.githubusercontent.com/u/13137535?v=4" width="100px;" alt=""/><br /><sub><b>nastikue</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3Anastikue" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/sndsabin"><img src="https://avatars2.githubusercontent.com/u/9588306?v=4" width="100px;" alt=""/><br /><sub><b>sndsabin</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=sndsabin" title="Code">💻</a> <a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3Asndsabin" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/aviskarkc10"><img src="https://avatars2.githubusercontent.com/u/13309631?v=4" width="100px;" alt=""/><br /><sub><b>Aviskar KC</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3Aaviskarkc10" title="Bug reports">🐛</a> <a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=aviskarkc10" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://ekee.io"><img src="https://avatars1.githubusercontent.com/u/17802364?v=4" width="100px;" alt=""/><br /><sub><b>Alexandre Bernard</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/issues?q=author%3ADot-H" title="Bug reports">🐛</a> <a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=Dot-H" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lizlam"><img src="https://avatars2.githubusercontent.com/u/661514?v=4" width="100px;" alt=""/><br /><sub><b>Liz</b></sub></a><br /><a href="https://github.com/winhtaikaung/react-tiny-link/commits?author=lizlam" title="Code">💻</a> <a href="#example-lizlam" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](http://www.opensource.org/licenses/MIT)

![Twitter Follow](https://img.shields.io/twitter/follow/winhtaikaung.svg?style=social)
