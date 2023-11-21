# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  -to see our final result or our cocde outpuut
- What is a "model"?
  -referring to the DOM tree
- Which "document" is being referred to in the phrase Document Object Model?
  -the DOM of the HTML structure
- What is the word "object" referring to in the phrase Document Object Model?
  -the HTML elements
- What is a DOM Tree?
  -the HTML skeleton and how you modify the DOM using js
- Give two examples of `document` methods that retrieve a single element from the DOM.
  -getElementById
  -querySelector
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  -querySelectorAll witch returns a nodelist
- Why might you want to assign the return value of a DOM query to a variable?
  -you can give it either a unique class or an id selector and call it with the queries.
- What `console` method allows you to inspect the properties of a DOM element object?
  -the console method that allows you to inspect the properties is the dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  -It needs to be placed on the bottom of the html document so the html loads first with all of it's elements
- What does `document.querySelector()` take as its argument and what does it return?
  -returns the 1st one in the dom or html for example if there's multiple p's on the page it returns the first p on the page and takes in the same as the querySelectorAll the child elements it can take multiple child selectors
- What does `document.querySelectorAll()` take as its argument and what does it return?
  -takes 1 or multiple child selectors for example h1 p and returns a nodelist containing all p elements in a array called nodelist

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
