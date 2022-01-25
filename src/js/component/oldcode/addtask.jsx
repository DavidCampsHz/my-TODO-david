import React, { useState } from "react";

const AddNewTask = (props) => {
	const { handleAddItem } = props;
	const [task, setTask] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(newTask);
		// setNewTask("");
		handleAddItem({
			done: false,
			id: (+new Date()).toString(),
			task,
		});
		setTask("");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="add-task">
					<div className="file-input">
						<input
							type="text"
							className="text"
							value={task}
							onChange={(e) => setTask(e.target.value)}
						/>
						{/* <button
                            className="button green"
                            disabled={newTask ? "" : "disabled"}>
                            Add
                        </button> */}
					</div>
				</div>
			</form>
		</>
	);
};

export default AddNewTask;
