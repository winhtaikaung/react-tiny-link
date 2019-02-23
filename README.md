
  

# React-Tiny-Link

> Convert your links into beautiful previews

  

Yet anotherReact link preview component with cards for web without a specific backend.

[![npm version](https://badge.fury.io/js/react-tiny-link.svg)](https://badge.fury.io/js/react-tiny-link) ![npm](https://img.shields.io/npm/v/react-tiny-link.svg) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/winhtaikaung/react-tiny-link.svg) ![NPM](https://img.shields.io/npm/l/react-tiny-link.svg)

[![NPM](https://nodei.co/npm/react-tiny-link.png)](https://nodei.co/npm/react-tiny-link/)
  

## CORS enabled?

No. You may need a `CORS` proxy to use this component. But if you dont have one, we made the component to use https://cors-anywhere.herokuapp.com as default proxy. Thanks to [Rob](https://github.com/Rob--W). [It](https://cors-anywhere.herokuapp.com) saves my time for accessing urls.

  

## Installation

```

npm install --save react-tiny-link

```

  
  

## Usage & Configuration

````javascript

import  ReactTinyLink  from  'react-tiny-link';

  

<ReactTinyLink

cardSize="small"

showGraphic={true}

maxLine={2}

minLine={1}

url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"

/>

````

  
  

## Props & methods

| PropName | Description|PropType | value | required

|--|--|--|--|--|

|**url** | URL to be display as preview | string | |`true`

|**cardSize** | Size of the card | string |default (`small`) `small`,`large`|false

|**maxLine** | Maximum number of line to ellipsis | number | 2 |`false`

|**minLine** | Minimum number of line to ellipsis | number | 1 |`false`

|**width** | Width of the link preview card | number| default(`100vw`)|`false`

|**proxyUrl** | Proxy URL to pass that resolve CORS | string|default(`https://cors-anywhere.herokuapp.com`) |`false`

|**showGraphic** | Boolean value to display graphics | boolean|default(`true`) |`false`

|**autoPlay** | Boolean value to play the media if provided url is video | boolean|default(`false`) |`false`

  
  

## Demo App &

  

* [Demo](https://winhtaikaung.github.io/react-tiny-link/)

* [SourceCode](https://github.com/winhtaikaung/react-tiny-link/)

  
  

## Contributing

  

1. Fork it

2. Create your feature branch (`git checkout -b my-new-feature`)

3. Commit your changes (`git commit -am 'Added some feature'`)

4. Push to the branch (`git push origin my-new-feature`)

5. Create new Pull Request

  
  

## License

[MIT](http://www.opensource.org/licenses/MIT)

![Twitter Follow](https://img.shields.io/twitter/follow/winhtaikaung.svg?style=social)