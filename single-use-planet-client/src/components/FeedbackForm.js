import React, { useState } from 'react';

const FeedbackForm = () => {
	const [count, setCount] = useState(0);

	function handleYesSubmit(e) {
		e.preventDefault();
			alert("Thank you for submitting your feedback.");
			setCount(count + 1);

 	}	

 	function handleNoSubmit(e) {
 		e.preventDefault();
 			alert("Thank you for submitting your feedback. Please let us know how we can improve your experience.");
 	}	

		return (
			<div>
				<h3>Has this site helped you reduce, reuse, or recycle your items? </h3>
				<form id="feedbackForm" onSubmit={e => handleYesSubmit(e)}>
					<button type="submit" value="Yes" >Yes</button>
				</form>
				<form id="feedbackForm" >
					<button type="submit" value="No" onClick={e => handleNoSubmit(e)}>No</button>
				</form>
				  <p>This site has helped you reduce, reuse, or recycle {count} times.</p>
			</div>
		)
	}

export default FeedbackForm;