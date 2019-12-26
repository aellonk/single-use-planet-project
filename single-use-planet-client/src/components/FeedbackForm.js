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
			<div className="container-fluid">
			<h1 className="text-center mt-4">Feedback</h1>
				<h3 className="text-center">Has this site helped you reduce, reuse, or recycle your items? </h3>
				<form className="text-center" id="feedbackForm" >
					<button type="submit" value="Yes" className="m-3" onClick={e => handleYesSubmit(e)}>Yes</button>
					<button type="submit" value="No" className="m-3" onClick={e => handleNoSubmit(e)}>No</button>
				</form>
				  <p className="text-center mt-3">This site has helped you reduce, reuse, or recycle {count} times.</p>
			</div>
		)
	}

export default FeedbackForm;