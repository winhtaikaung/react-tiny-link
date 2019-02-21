import {$filter} from '../utils';

const REGEX_AMAZON_URL = /https?:\/\/(.*amazon\..*\/.*|.*amzn\..*\/.*|.*a\.co\/.*)/i
const isAmazonUrl = url => REGEX_AMAZON_URL.test(url)
export const ScrapAmazon = ($) => ({
    
    author: [
      $('.contributorNameID').text(),
      $('#bylineInfo').text(),
      $('#brand').text()
    ],
    title: [
      $('#productTitle').text(),
      $('#btAsinTitle').text(),
      $filter($, $('h1.a-size-large')),
      $('#item_name').text()
    ],
    publisher: ['Amazon'],
    image: [
      $('.a-dynamic-image').attr('data-old-hires'),
      $('.a-dynamic-image').attr('src')
    ]
  })