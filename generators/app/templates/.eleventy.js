module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/compiled-assets/main.css');

  eleventyConfig.addWatchTarget('./src/compiled-assets/main.js');
  eleventyConfig.addWatchTarget('./src/compiled-assets/vendor.js');// Copy src/compiled-assets to /assets
  eleventyConfig.addWatchTarget('./src/assets/css/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/assets/css/tailwind.css')
  eleventyConfig.addPassthroughCopy({ 'src/compiled-assets': 'assets' });
  // Copy all images
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: {
      input: 'src/pages/',
      data: '../_data',
      includes: '../_components',
      layouts: '../_layouts'
    },
    templateFormats: [
      'pug',
      'md',
    ],
    pugOptions: {
      pretty: true
    }
  };
};