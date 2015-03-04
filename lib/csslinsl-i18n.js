module.exports = {
  "important": "谨慎使用 '!important' 声明.",
  "adjoining-classes": "不要使用邻接的 class 选择符.",
  "known-properties": "应使用已知属性 (在 CSS3 规范中所列出的) 或者是带 vender 前缀的属性.",
  "box-sizing": "'box-sizing' 在 IE6 和 IE7 是不支持的.",
  "box-model": "当设置了 padding 或 border 时，避免使用 width 或 height 属性.",
  "overqualified-elements": "不要把 element 与 class 或 ID 选择符在一起使用(a.foo or a#foo).",
  "display-property-grouping": "某些属性不应该与 display 属性取某些值时一起使用.",
  "bulletproof-font-face": "Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).",
  "compatible-vendor-prefixes": "Include all compatible vendor prefixes to reach a wider range of users.",
  "regex-selectors": "Selectors that look like regular expressions are slow and should be avoided.",
  "errors": "This rule looks for recoverable syntax errors.",
  "duplicate-background-images": "Every background-image should be unique. Use a common class for e.g. sprites.",
  "duplicate-properties": "Duplicate properties must appear one after the other.",
  "empty-rules": "空规则.",
  "selector-max-approaching": "Will warn when selector count is >= 3800 selectors.",
  "gradients": "When using a vendor-prefixed gradient, make sure to use them all.",
  "fallback-colors": "For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.",
  "font-sizes": "Checks the number of font-size declarations.",
  "font-faces": "Too many different web fonts in the same stylesheet.",
  "floats": "This rule tests if the float property is used too many times",
  "star-property-hack": "Checks for the star property hack (targets IE6/7)",
  "outline-none": "Use of outline: none or outline: 0 should be limited to :focus rules.",
  "import": "Don't use @import, use <link> instead.",
  "ids": "Selectors should not contain IDs.",
  "underscore-property-hack": "Checks for the underscore property hack (targets IE6)",
  "rules-count": "Track how many rules there are.",
  "qualified-headings": "Headings should not be qualified (namespaced).",
  "selector-max": "Will error when selector count is > 4095.",
  "shorthand": "Use shorthand properties where possible.",
  "text-indent": "Checks for text indent less than -99px",
  "unique-headings": "Headings should be defined only once.",
  "universal-selector": "The universal selector (*) is known to be slow.",
  "unqualified-attributes": "Unqualified attribute selectors are known to be slow.",
  "vendor-prefix": "When using a vendor-prefixed property, make sure to include the standard one.",
  "zero-units": "You don't need to specify units when a value is 0."
};