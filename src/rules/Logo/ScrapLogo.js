export const ScrapLogo = $ => ({
  logo: [
    $('meta[property="og:logo"]').attr('content'),
    $('meta[itemprop="logo"]').attr('content'),
    $('img[itemprop="logo"]').attr('src'),
  ],
});
