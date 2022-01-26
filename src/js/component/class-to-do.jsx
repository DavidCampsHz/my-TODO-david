import { element } from "prop-types";
import React, { useState, useEffect } from "react";

const ClassToDo = () => {
	let [listItems, setListItems] = useState([]);
	let [task, setTask] = useState("");

	useEffect(() => {
		getList();
	}, []);

	const editList = (editNewList) => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/davidcamposhernandez",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editNewList),
			}
		)
			.then(() => {
				getList();
			})
			.catch((error) => console.log("error", error));
	};

	const getList = () => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/davidcamposhernandez",
			requestOptions
		)
			.then((response) => response.json())
			//.then((data) => console.log("data", data))
			.then((result) => {
				console.log("result", result);
				setListItems(result);
			})
			.catch((error) => console.log("error", error));
	};

	const handleAddItem = () => {
		setTask("");
		editList([...listItems, { label: task, done: true }]);
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
		editList(newListItems);
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
							if (item.done == true) {
								return (
									<div className="clearfix" key={index}>
										<div className="task-item">
											<p>{item.label}</p>
										</div>
										<button
											className="remove-button"
											onClick={() =>
												onClickRemoveTask(index)
											}>
											<i class="fas fa-trash-alt"></i>
										</button>
									</div>
								);
							}
						})}
					</div>
					<div>
						{listItems.length ? (
							<p>
								<button
									className="button"
									onClick={() =>
										editList(
											listItems.filter(
												(item) => item.done == false
											)
										)
									}>
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
