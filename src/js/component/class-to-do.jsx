import React, { useState, useEffect } from "react";

const ClassToDo = () => {
	let [listItems, setListItems] = useState([]);
	let [task, setTask] = useState("");
	//Add fetch

	const handleAddItem = () => {
		setListItems([...listItems, task]);
		setTask("");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddItem({
			done: false,
			id: (+new Date()).toString(),
			task,
		});
	};

	const onClickRemoveTask = (indexToDelete) => {
		let newListItems = [...listItems];
		newListItems.splice(indexToDelete, 1);
		console.log(newListItems);
		setListItems(newListItems);
	};

	return (
		<>
			<input
				type="text"
				className="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				onKeyDown={(e) => {
					if (e.key == "Enter") {
						handleAddItem();
						setTask("");
					}
				}}
			/>
			<button className="button" onClick={handleAddItem}>
				Add
			</button>
			<div className="todo-list">
				{listItems.map((item, index) => {
					return (
						<div key={index}>
							<p>{item}</p>
							<button onClick={() => onClickRemoveTask(index)}>
								X
							</button>
						</div>
					);
				})}
				{listItems.length ? (
					<p>
						<button
							className="button"
							onClick={() => setListItems([])}>
							Delete all tasks
						</button>
					</p>
				) : null}
			</div>
		</>
	);
};

export default ClassToDo;
