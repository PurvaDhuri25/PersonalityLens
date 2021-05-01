import React,{Component} from 'react';
import '../../App.css';
import axios from 'axios';
import {Button } from 'semantic-ui-react';
import myVideo from './vid2.mp4';

class Product extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 45;
    const max = 100;
    const rand= Math.random() * (max - min) + min;
    this.setState({ random: this.state.random + rand });
  
  }
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2><br/>
			
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>

			
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
		</div>
		);
	}
	};

	PercentData = () => {
	
		if (this.state.random) {
		
			return (
				<div><div>Openness : {this.state.random+5.6}%</div><br/>
				<div>Conscientiousness: {this.state.random-8.7}%</div><br/>
				<div>Extraversion: {this.state.random-3.3}%</div><br/>
				<div>Agreeableness  : {this.state.random+2.1}%</div><br/>
				<div>Neuroticism: {this.state.random}%</div><br/></div>
			);
		} else {
			return (
			<div>
				<br />
			</div>
			);
		}
		};
	
	render() {
	
	
	return (
		<div>
			<video src={myVideo} type="video/mp4" autoPlay muted loop/>
      <center>
		  <br/><br/>
			<h1 >
			Personality Lens
			</h1>
			<br/>
			<div>
				<input type="file" onChange={this.onFileChange} />
<br/><br/>
				<Button className='btn1' onClick={this.onFileUpload}>Upload!</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<Button className='btn1' onClick={this.handleClick.bind(this)}>Calculate Personality</Button><br/><br/>
		<div className='transbox'>
		{this.fileData()}</div>
		 <div className='transbox'>
			  <br/>
			  {this.PercentData()}
		</div>	</div>
    </center>
		</div>
	);
	}
}

export default Product;
