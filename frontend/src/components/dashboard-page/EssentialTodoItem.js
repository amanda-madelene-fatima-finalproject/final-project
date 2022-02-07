// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styled from "styled-components";
// import AddTodo from "./AddTodo";
// import TodoItem from "./TodoItem.js";
// import { getTasks } from "../../reducers/todo";
// import TodoCount from "../dashboard-page/TodoCount.js";
// import AllTasksButton from "./AllTasksButton.js";
// // import Container from "@material-ui/core/Container";
// import { Typography } from "@material-ui/core";
// import { todo } from "../../reducers/todo";


// //--------- STYLED COMPONENTS ----------//

// const Container = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 60px;
// `;

// const Section = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   /* input {
//     display: none;
//   } */
// `;



// const Headline = styled.h1`
//   color: #ef737d;
// `;

// //const Tasks = styled.div``;

// const EssentialTodoItem = () => {

//   //----------- SELECTORS ----------//
  

//   const essentialTasks = useSelector((store) => store.todo.essentialTasks);

//   //--------- OBJECT.KEYS METHOD----------//
//   // Method that converts the essentialTasks object to an array so we can iterate through it below
//   const essentialTasksKeys = Object.keys(essentialTasks); 
//   // console.log(essentialTasksKeys)

//   //--------- DISPATCH----------//
//   const dispatch = useDispatch();

//   //--------- USEEFFECT FOR DISPATCHING THE GetTASKS THUNK  ----------//

  

//   const onToggleEssentialTask = (item) => {
//     console.log(item)
//     dispatch(todo.actions.toggleEssentialTasks(item)) 
//   };


//   return (
//     <Container>
//         <Section>
        
//             <h2>Essential Tasks</h2>
//               <div key={item}> 
//               <p className={
//                     item.done ? 'complete-todo' : 'uncomplete-todo'
//                   }>{essentialTasks}</p> 
//               <StyledCheckBox
//                 className='checkbox'
//                 type='checkbox'
//                 checked={essentialTasks[item].done} //this gives us the value of the key selected: true or false
//                 onChange={() => onToggleEssentialTask(item)} //passing the key selected here (like hydrate or exercise or break etc)
//               />
//               </div>       
//           </Section>      
//      </Container>
//   );
// };
// export default EssentialTodoItem;

// const StyledCheckBox = styled.input`
//   cursor: pointer;
//   appearance: none;
//   background-color: #fff;
//   margin: 0;
//   font: inherit;
//   color: black;
//   width: 0.7em;
//   height: 0.7em;
//   border: 0.10em solid #ef737d;
//   border-radius: 1em;
//   transform: translateY(-0.075em);
//   display: grid;
//   place-content: center;
//   &::before {
//     content: '';
//     width: 0.4em;
//     height: 0.4em;
//     border-radius: 50%;
//     transform: scale(0);
//     transition: 120ms transform ease-in-out;
//     box-shadow: inset 1em 1em #ef737d;
//   }
//   &:checked::before {
//     transform: scale(1);
//   }
//   @media (max-width: 500px) {
//     width: 1.2em;
//     height: 1.2em;
//   }`

// const TodoText = styled.p`
// font-size: 13px;
// font-weight: bold;
// `;


// //Link to understand the essentialTasksKeys 
// //https://attacomsian.com/blog/javascript-iterate-objects#:~:text=keys()%20Method-,The%20Object.,the%20value%20of%20each%20property.