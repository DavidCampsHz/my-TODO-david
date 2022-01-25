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
			<div className="container">
				<h3 className="title-todo">
					Rule nº1: DON'T DELAY, START TODAY
				</h3>
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
					<strong>Add</strong>
				</button>
				<div className="todo-list">
					<div>
						{listItems.map((item, index) => {
							return (
								<div className="clearfix" key={index}>
									<p>{item}</p>
									<button
										className="remove-button"
										onClick={() =>
											onClickRemoveTask(index)
										}>
										<i class="fas fa-trash-alt"></i>
									</button>
								</div>
							);
						})}
					</div>
					<div>
						{listItems.length ? (
							<p>
								<button
									className="remove-all-button"
									onClick={() => setListItems([])}>
									Delete all tasks
								</button>
							</p>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default ClassToDo;
