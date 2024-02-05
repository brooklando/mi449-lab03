// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("date", function(month, year) {
    return `<div class="date"><div class="post_month">${month}</div>
<div class="post_year">, ${year}</div>
</div>`;
  });
};