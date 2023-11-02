import { useState } from "react";
import "./App.css";
import DropDownList from "./Components/DropDownList";
import Header from "./Components/Header";

interface FieldType {
	name: string;
	grade: string;
	credit: string;
}

interface GradePointsType {
	[key: string]: number;
}

const GRADES = ["O", "A+", "A", "B+", "B", "C", "U"];
const FIELDS = Array.from({ length: 5 })
	.fill({})
	.map((_n, i) => ({ name: `Subject ${i + 1}`, grade: "O", credit: "1" }));

const App = () => {
	const [subjects, setSubjects] = useState<FieldType[]>(FIELDS);
	const [GPA, setGPA] = useState(0);

	const updateSubject = (id: number, value: string, attr: string) => {
		setSubjects(subjects =>
			subjects.map((subject, index) => {
				if (index === id) {
					subject[attr as keyof FieldType] = value;
				}
				return subject;
			})
		);
	};

	const addSubject = () => {
		setSubjects(subjects => [
			...subjects,
			{ name: `Subject ${subjects.length + 1}`, grade: "O", credit: "1" }
		]);
	};

	const removeSubject = (id: number) => {
		setSubjects(subjectss => subjectss.filter((_s, index) => index !== id));
	};

	const calculate = () => {
		const gradeCredits: GradePointsType = { O: 10, "A+": 9, A: 8, "B+": 7, B: 6, C: 5, U: 0 };

		const gradePointsObtained = subjects.reduce((acc, curr) => {
			acc = acc + gradeCredits[curr.grade as keyof GradePointsType] * parseInt(curr.credit);
			return acc;
		}, 0);

		const totalCredits = subjects.reduce((acc, curr) => {
			return (acc += parseInt(curr.credit));
		}, 0);

		const gpa = gradePointsObtained / totalCredits;

		setGPA(parseFloat(gpa.toPrecision(3)));
	};

	return (
		<div>
			<Header />
			<div className="field-container">
				{subjects.map((subject, index) => (
					<div key={index} className="field">
						<input
							type="text"
							value={subject.name}
							onChange={e => {
								const value = e.target.value;
								updateSubject(index, value, "name");
							}}
						/>
						<DropDownList
							id={index}
							list={GRADES}
							value={subject.grade}
							onChange={(id: number, value: string) => updateSubject(id, value, "grade")}
						/>
						<input
							type="number"
							value={subject.credit}
							onChange={e => {
								const value = e.target.value;
								updateSubject(index, value, "credit");
							}}
						/>
						<button onClick={() => removeSubject(index)}>Remove</button>
					</div>
				))}
				<button onClick={addSubject}>Add Subject</button>
			</div>
			<div className="result">
				<button onClick={calculate}>Caclulate</button>
				<button>Reset</button>
			</div>
			<h2>Your CGPA: {GPA}</h2>
		</div>
	);
};

export default App;
