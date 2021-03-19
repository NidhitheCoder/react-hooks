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
- It is a close replacement for componentDidMount, ComponentDidUpdate and componentWillMount.
- we can control occurance of the some events using dependencies with useEffect.

## useContext

- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- For passing props do not need intermediate component for child components, useContext helps to achieve it directly.
- There are 3 steps to making use of context :-
  1. Create the context.
  2. We need to provide this context to a value
  3. We consuming the context value using the render props pattern.

## useReducer

- useReducer is a hook that used for state management.
- It is an alternative for useState().
- The difference between useState and useReducer is useState is built using useReducer.
- Each hooks is related to,
  useState - state
  useEffect - side effects
  useContext - context API
  useReducer - reducers
- useReducer(reducer,initialState)
- newState = reducer(currentState,action)
- useReducer returns a pair of values [newState,dispatch].

=> If we need to share state between components (global state management) then use useReducer and useContext compained.

## useState v/s useReducer

- Type of state => number,string,and boolean it is better to use useState. if the state in the form of object or array it is better to use useReducer.
- Number of state transitions => if the number of state transition is one or two then it is better to use useState, otherwise(too may states) use useReducer.
- Releted state transitions => if there is no relation then use useState otherwise use useReducer.
- Business logic - if there is no business login then it better to use useState. if there are some comlex business logic choose useReducer.
- Local vs Global state => if state is local choose useState otherwise choose useReducer.

## What is useCallback hook

- useCallback is a hook that will return a memoized version of callback function that only changes if one of the dependencies has changed.

## Why we are using useCallback ?

- It is usefull when passing callback to optimised child components that rely on referance quality to prevent unnecessory renders.

## useMemo Hook
- useMemo hook also helps to performance optimization.   

## Cusotm Hooks

- A custom hook is basically a javascript functions whose name start with 'use'. A custom hook can  also call other hooks if required.
- Why we use custom hook ? - Share logic between two or more components. Alternative for HOC and Render props.
