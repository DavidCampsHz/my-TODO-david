import React, { Fragment } from "react";

const CheckBox = (props) => {
	const {
		onChange,
		data: { id, task, done },
	} = props;

	return (
		<>
			<Fragment>
				<label className="todo-new-task">
					<input
						className="state"
						name={id}
						type="checkbox"
						defaultChecked={done}
						onChange={onChange}
					/>
					<div className="todo__text">{task}</div>
				</label>
			</Fragment>
		</>
	);
};

export default CheckBox;
