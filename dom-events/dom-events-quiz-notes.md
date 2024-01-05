# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  -to see our output in the dev console
- What is the purpose of events and event handling?
  -to fire element methods at a certain time for example double click fires when the user clicks on the element twice fast
- Are all possible parameters required to use a JavaScript method or function?
  -no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  -the js element addEventListner allows you to do that
- What is a callback function?
  -A callback function is when you call another function you have defined in another function
- What object is passed into an event listener callback when the event fires?
  -the event or the e that targets the type of firing method for example a mousedown event is called
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
- event target is a way of saying what kind of method it is for example a click you can get more info on this on mdn(mozilla developer network) if you are not aware of the functionallity of the event.target and all other js code problems
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  -one is a callback and one is directly invoking the function for example in the example i have below

element.addEventListener('mousedown', handleClick()) the mousedown isn't useful because it will fire the function like directly kinda like an es6 IIFE(immediatlly invoked function expression)

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
