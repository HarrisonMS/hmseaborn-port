import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";

// import Res from "../../img/Resume.pdf";
import logo from "../../img/logo.png";
function Resume() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	return (
		<div style={{ height: "100vh" }}>
			<nav id="sub-nav">
				<img src={logo} alt="My Portfolio" id="logo" />
				<Link to="/">Home</Link>
			</nav>
			{/* <img resumesrc={ResumeImg} /> */}
			{/* <iframe
				src="https://drive.google.com/file/d/1BLi4oYmla4yprZ_oVK9pZLFtWEgcIGmD/view?usp=sharing"
				width="100%"
				height="100%"
				seamless
			></iframe> */}
			<Document
				file={
					"https://drive.google.com/file/d/1BLi4oYmla4yprZ_oVK9pZLFtWEgcIGmD/view?usp=sharing"
				}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
}
export default Resume;
