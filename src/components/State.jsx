import { useState } from "react";

function State() {
	let teachers = [
		"Branden Bent",
		"Tarn Assistant (that's what TA stands for right....?)",
		"Johnny CodeMan"
	];
	// let selectedIndex = -1; // -1 is an invalid index (it's impossible to have an index of -1 in an array), so we can use this to check if a teacher has been selected. Defaulting to -1 will default us to "No teacher selected" when the page loads

	// instead of using the traditional method above, we will learn about Hooks, an extremely powerful concept in React
	// Hooks are functions that let you use state and other React features without writing a class
	// useState allows us to tell react that this component will have data or state that will change over time

	// useState returns an array with two elements, the first element is the current state value, and the second element is a function that lets you update it
	// const arr = useState(-1);
	// // arr[0]; // current state value
	// // arr[1]; // function to update state value

	// Destructuring the array returned by useState is very useful for readability. The term "Destructuring" was touched on in class, but comparing the above array and it's values at the 0th and 1st position makes it clear what is happening

	const [selectedIndex, setSelectedIndex] = useState(-1); // -1 is an invalid index (it's impossible to have an index of -1 in an array), so we can use this to check if a teacher has been selected. Defaulting to -1 will default us to "No teacher selected" when the page loads




	const getMessage = () => (teachers.length === 0 ? <p>No teachers available</p> : null);

	return (
		<>
			<h1>LIST HEADING</h1>
			{getMessage()}
			<ul>
				{teachers.map((teacher, index) => <li key={index} className={
					selectedIndex === index ? "list-group-active" : "list-group"
				} onClick={() => { setSelectedIndex(index) }}>{teacher}</li>)}
			</ul>
		</>);
}

export default State