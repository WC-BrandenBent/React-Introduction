// React developers typically use a naming convention called PascalCase for user-defined components.

function Message() {

	// This return is NOT html even though it looks like it
	// It is called JSX (JavaScript XML) and will be compiled to React.createElement() and turned into JavaScript for the browser to read
  return <h1>Hello World</h1>;
}	

export default Message;