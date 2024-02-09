const data = [
  {
    id: 1,
    quesion: "What is React component?",
    answer:
      "A React component is a reusable building block for building user interfaces in React.js applications. It encapsulates a piece of UI functionality and can be composed together with other components to create complex UIs.",
  },
  {
    id: 2,
    quesion: "What is React Hook?",
    answer:
      "React Hooks are functions that allow functional components in React to use state, lifecycle methods, and other React features without writing a class.",
  },
  {
    id: 3,
    quesion: "What is React UseEffect?",
    answer:
      "useEffect is a React Hook that allows functional components to perform side effects in response to certain events. These side effects may include data fetching, DOM manipulation, subscription setup, or any operation that doesn't directly affect the UI rendering",
  },
  {
    id: 4,
    quesion: "What is React useRef?",
    answer:
      "useRef is a React Hook that provides a way to create a mutable reference to a DOM element or any other value that persists across renders of a functional component. It allows you to access the underlying DOM node or value imperatively, similar to using ref in class components.",
  },
  {
    id: 5,
    quesion: "What is React useSelector?",
    answer:
      "The useSelector hook allows functional components to extract data from the Redux store state. It's typically used to read a slice of the Redux state and subscribe to updates to that part of the state. This hook is similar to the mapStateToProps function used in class-based components with connect.",
  },
];

export default data;
