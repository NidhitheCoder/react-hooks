# react-hooks

Learn react Hooks with codevolution crash course.

## What are react Hooks?

- Hooks are new feature addition in react version 16.8 which allow you to use react features without having to write a class.
- eg. state of a component
- Hooks dont work inside classes.
- state vs hooks - https://betterprogramming.pub/react-hooks-vs-classes-add2676a32f2
## Why hooks?

- Avoid the whole confusion with 'this' keyword.
- Hooks allow you to reuse stateful logic.
- Organize the logic inside a component into reusable isolated units.

## Rules of hook

- Only call the hooks at top level.
- Don't call hooks inside condition,loops, or nested functions.
- Only call hooks from react functions.
  - call them with react funcitonal components and not just any regular javascript functions.

## useState Hook

- The useState Hook lets you add state to functional components.
- In classes, the state is always an object.
- With the useState hook, the state doesn't have to be an object.
- The useState hook return an array with 2 elements.
  - The first value is current value of the state, and the second element is a state setter function.
- If you need to new state value is depends on the previous state value ? you can pass a function to the setter function.
- When we are dealing with arrays or objects, always make sure to spread your state variable and then call the setter function.

## useEffect Hook
- The effect hook lets you perform side effects in functional components.
- It is a close replacement for  componentDidMount, ComponentDidUpdate and componentWillMount.
