# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?

- hooks are a simple way of enhancing functionallity in your code/components

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only call hooks at the top level: Don't call hooks inside loops, conditions, or nested functions. ...
  Only call hooks from React functions: Hooks can be called from React function components or custom hooks, but not from standard JavaScript functions or class components.
- What is the purpose of state in React?
- The purpose of state with/In react is that it focuses/targets the user/any element's state inside of the block of code

- Why can't we just maintain state in a local variable?
  React requires state variables as it does not keep track of local variables
- What two actions happen when you call a `state setter` function?
- State Setter Callback Function​​ This function accepts the previous value as an argument and returns an updated value
- When does the local `state variable` get updated with the new value?
  If the previous state is not used to compute the next state, just pass the next state value as the argument for the state setter

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
