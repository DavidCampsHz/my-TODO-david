// import React from "react";
// import CheckBox from "./checkbox.jsx";

// const ToDoList = (props) => {
// 	const { listItems, setListItems } = props;
// 	const onChangeStatus = (e) => {
// 		const { task, checked } = e.target;
// 		const updateListItems = listItems.map((task) => ({
// 			...task,
// 			done: task.id === task ? checked : task.done,
// 		}));
// 		setListItems(updateListItems);
// 	};

// 	const onClickRemoveTask = (e) => {
// 		const updateListItems = listItems.filter((task) => !task.done);
// 		setListItems(updateListItems);
// 	};
// 	const checkItem = listItems.map((task) => (
// 		<CheckBox key={task.id} data={task} onChange={onChangeStatus} />
// 	));
// 	return (
// 		<>
// 			<div className="todo-list">
// 				{listItems.length ? checkItem : "You are on track!"}
// 				{listItems.length ? (
// 					<p>
// 						<button className="button" onClick={onClickRemoveTask}>
// 							Delete all tasks
// 						</button>
// 					</p>
// 				) : null}
// 			</div>
// 		</>
// 	);
// };
// //1.Interation
// //Title
// //how many components
// //read the task from an input
// //add that task into tasks

// //2.Iteration
// //delete one task

// export default ToDoList;
