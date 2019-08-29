import React, { Component } from 'react';

class FeedbackForm extends Component {
	render() {
		return (
			<div>
				<h3>Has this site helped you reduce, reuse, or recycle your items? </h3>
				<form>
					<button type="submit" value="Yes">Yes</button>
					<button type="submit" value="No">No</button>
				</form>
			</div>
		)
	}
}

export default FeedbackForm;