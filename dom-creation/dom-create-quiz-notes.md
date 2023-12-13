# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  -No createelement method cretes it but if you want to append it/place it in the dom you use appendChild()

- How do you add an element as a child to another element?
  -By calling appendChild on the createelement you have made for the parent's node
- What do you pass as the arguments to the `element.setAttribute()` method?
- Inside the setAttribute() mthod you put the attributes name firs't then the value for example
  img.setAttribute('src' , 'imageURL')
- What steps do you need to take in order to insert a new element into the page?

-You would need to use the createelement method and then assignn it some content then append it to the dom or wherever you want to place it.

- What is the `textContent` property of an element object for?
  -textContent is for adding content/replacing element's content
- Name two ways to set the `class` attribute of a DOM element.
- The 2 way's you can add a class inside a class would be using the className property or the classList method().

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  -You can easily delete an element or change it's value and put them/access them only when it passes the if clause

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
