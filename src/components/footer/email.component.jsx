import React from "react";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<form
				className="contact-form"
				onSubmit={this.submitForm}
				action="https://formspree.io/f/mleozvjz"
				method="POST"
			>
				<div className="form-container">
					<h1>Get in touch!</h1>
					{/* <!-- add your custom form HTML here --> */}
					<label>Name:</label>
					<input type="name" name="name" />
					<label>Email:</label>
					<input type="email" name="email" />
					<label>Message:</label>
					<textarea rows="10" type="text" name="message" />
					{status === "SUCCESS" ? (
						<p>
							Thanks you for contacting me. I will be in touch with you Asap.
						</p>
					) : (
						<button>Submit</button>
					)}
					{status === "ERROR" && <p>Ooops! There was an error.</p>}
				</div>
			</form>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}

{
	/* <form class="my-form">
  <div class="container">
    <h1>Get in touch!</h1>
    <ul>
      <li>
        <div class="grid grid-2">
          <input type="text" placeholder="Name" required>  
          <input type="email" placeholder="Email" required>  
        </div>
      </li>
      <li>
        <textarea placeholder="Message"></textarea>
      </li>   
      <li>
        <div class="grid grid-3">
          <div class="required-msg">REQUIRED FIELDS</div>
          <button class="btn-grid" type="submit" disabled>
            <span class="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="">
            </span>
            <span class="front">SUBMIT</span>
          </button>
          <button class="btn-grid" type="reset" disabled>
            <span class="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="">
            </span>
            <span class="front">RESET</span>
          </button> 
        </div>
      </li>    
    </ul>
  </div>
</form> */
}
