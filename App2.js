import React from 'react';
import SecondComponent from './SecondComponent';

const precode = [
	'962023011',
	'962023034',
	'962023018',
	'962023023'
];

class App extends React.Component {
	state = {
		code: '',
		error: '',
		highschool: '',
		university: '',
		degree: 'lisans',
		degrees: ['lisans','diplom','doktora','fogh lisans'],
		students: [
		]
	};

	onCodeChange = (e) => {
		const code = e.target.value;
		this.setState(() => ({code}));
	};

	onSchoolChange = (e) => {
		const highschool = e.target.value;
		this.setState(() => ({highschool}));
	};

	onUniversityChange = (e) => {
		const university = e.target.value;
		this.setState(() => ({university}));
	};

	onDegreeChange = (e) => {
		const degree = e.target.value;
		this.setState(() => ({degree}));
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		const students = this.state.students;
		if(precode.findIndex(this.findCode)>-1) {
			console.log(this.findCode);
			students.push({
				code: this.state.code,
				highschool: this.state.highschool,
				university: this.state.university,
				degree: this.state.degree
			  });
			  this.setState(() => ({
				code: '',
				highschool: '',
				university: '',
				degree: '',
				error: ''
			  }));
		}
		// else {
		// 	const error = 'student is not in the portal';
		// 	this.setState(() => ({error}));
		// }
	};

	findCode = () => {this.state.code};

	// deleteStudent = (removeStudent) => {
	// 	const students = this.state.students.filter((student) => removeStudent !== student)
	// 	this.setState(() => ({students}));
	// };

	render(){
		return(
			<div>
			  <form onSubmit={this.onFormSubmit}>

				<p>Code</p>
				<input name="code" type="text" value={this.state.code} onChange={this.onCodeChange} />
				<p>High School</p>
				<input name="school" type="text" value={this.state.highschool} onChange={this.onSchoolChange} />
				<p>University</p>
				<input name="university" type="text" value={this.state.university} onChange={this.onUniversityChange} />
				<p>Degree</p>
				<select name="degree" value={this.state.degree} onChange={this.onDegreeChange}>
                  {this.state.degrees.map((deg) => (<option key={deg}>{deg}</option>))}
				</select>
				<br />
				<button type="submit">submit</button>
				<hr/>
				<p>
					{this.state.students.map((student) => (<SecondComponent
						delete={this.deleteStudent} student={student} key={student.code} />))}
				</p>
              </form>
			</div>
		);
	}
}

export default App;