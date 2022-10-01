import './App.css';
import React, {useState} from 'react';
import Select from 'react-select';
import { getcyb, getcscCourses } from './components/classData';



const App = () => {

var cscCourses = getcscCourses();  
const degrees = [
  {label: "Computer Science", value: 1},
];

const concentrations = [
  {label: "Software Engineering", value: 1},
  {label: "Cybersecurity", value: 2}
];

const years = [
  {label: "2021", value: 1},
  {label: "2022", value: 2}
];

const semesters = [
  {label: "Freshman - Fall", value: 1},
  {label: "Freshman - Spring", value: 2},
  {label: "Sophomore - Fall", value: 3},
  {label: "Sophomore - Spring", value: 4},
  {label: "Junior - Fall", value: 5},
  {label: "Junior - Spring", value: 6},
  {label: "Senior - Fall", value: 7},
  {label: "Senior - Spring", value: 8},
]

const [degree, setDegree] = useState(degrees[0].value)
const [concentration, setConcentration] = useState(concentrations[0].value)
const [year, setYear] = useState(years[0].value) 
const [semester, setSemester] = useState(semesters[0].value)

const [firstClass, setFirstClass] = useState("Class 1")
const [secondClass, setSecondClass] = useState("Class 2")
const [thirdClass, setThirdClass] = useState("Class 3")
const [fourthClass, setFourthClass] = useState("Class 4")
const [fifthClass, setFifthClass] = useState("Class 5")
const [sixthClass, setSixthClass] = useState("Class 6")
const [classInfo, setClassInfo] = useState("classinfo")
var tempCon = [];
var yearInfo = []; 
var semInfo = [];

function findClasses() {
  //setFirstClass(concentration.value)
  if(concentration.value == 1){
    //tempCon = getSeg();
  }
  else if(concentration.value == 2){
    tempCon = getcyb();
  }

  yearInfo = tempCon[year.value - 1];
  semInfo = yearInfo[1][semester.value - 1];
  setFirstClass(semInfo[0])
  setSecondClass(semInfo[1])
  setThirdClass(semInfo[2])
  setFourthClass(semInfo[3])
  setFifthClass(semInfo[4])
  setSixthClass(semInfo[5])
  for(var i; i < cscCourses.length(); i++){
    if(semInfo[0][0] == cscCourses[i][0]){
      setFirstClass(cscCourses[i]);
    }
    if(semInfo[1][0] == cscCourses[i][0]){
      setSecondClass(cscCourses[i]);
    }
    if(semInfo[2][0] == cscCourses[i][0]){
      setThirdClass(cscCourses[i]);
    }
    if(semInfo[3][0] == cscCourses[i][0]){
      setFourthClass(cscCourses[i]);
    }
    if(semInfo[4][0] == cscCourses[i][0]){
      setFifthClass(cscCourses[i]);
    }
    if(semInfo[5][0] == cscCourses[i][0]){
      setSixthClass(cscCourses[i]);
    }
  }
  
}

    return (
      <div className="App">
      <div className="header">
          <img className='logo' src="GeauxHackLogo.jpg"></img>
      </div>
      
      <h1>Welcome to GEAUX DEG</h1>
      <h2>Please select your degree, concentration, and booklet year.</h2>

      <div className='selection_box'>
            <div className="basic_dropdowns">
              <div className='dropdown' name="degree">
                  <Select 
                    value = {degree}
                    onChange = {(value) => setDegree(value)}
                    options={degrees} 
                    placeholder="Select a Degree"
                    autosize={true}
                  />
              </div>
              <div className='dropdown' name="concentration">
                  <Select 
                    value = {concentration}
                    onChange = {(value) => setConcentration(value)}
                    options={concentrations} 
                    placeholder="Select a Concentration"
                    autosize={true}
                  />
              </div>
              <div className='dropdown' name="year">
                  <Select 
                    value = {year}
                    onChange =  {(value) => setYear(value)}
                    options={years} 
                    placeholder="Select a Year"
                    autosize={true}
                  />
              </div>
            </div>
            <div className="optional_dropdown">
              <div className='dropdown' name="semester">
                  <Select 
                    value = {semester}
                    onChange = {(value) => setSemester(value)}
                    options={semesters} 
                    placeholder="Select a Semester"
                    autosize={true}
                  />
              </div>
            </div>
          <button onClick={findClasses}>Get Schedule</button>
      </div>

      <div className='boxes'>
          <div className='box'>
              <div className='top_textbox'>{firstClass[0]}</div>
              <div className='bottom_textbox'>{firstClass[1]}</div>
          </div>
          <div className='box'>
              <div className='top_textbox'>{secondClass[0]}</div>
              <div className='bottom_textbox'>{secondClass[1]}</div>
          </div>
          <div className='box'>
              <div className='top_textbox'>{thirdClass[0]}</div>
              <div className='bottom_textbox'>{thirdClass[1]}</div>
          </div>
          <div className='box'>
              <div className='top_textbox'>{fourthClass[0]}</div>
              <div className='bottom_textbox'>{fourthClass[1]}</div>
          </div>
          <div className='box'>
              <div className='top_textbox'>{fifthClass[0]}</div>
              <div className='bottom_textbox'>{fifthClass[1]}</div>
          </div>
          <div className='box'>
              <div className='top_textbox'>{sixthClass[0]}</div>
              <div className='bottom_textbox'>{sixthClass[1]}</div>
          </div>
      </div>

  </div>

    )
}

export default App;
