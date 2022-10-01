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

import ReactModal from 'react-modal';
import {getcscCourses} from './components/classData';


const App = () => {
  const [modal1IsOpen, set1IsOpen] = React.useState(false);
  const [modal2IsOpen, set2IsOpen] = React.useState(false);
  const [modal3IsOpen, set3IsOpen] = React.useState(false);
  const [modal4IsOpen, set4IsOpen] = React.useState(false);
  const [modal5IsOpen, set5IsOpen] = React.useState(false);
  const [modal6IsOpen, set6IsOpen] = React.useState(false);
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      height: 300,
      width: 500,
      borderRadius: 20,
    },
  };

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
  
}

    return (
      <div className="App">
      <div className="header">
          <img className='logo' src="GeauxHackLogo.jpg"></img>
          <h1 className='header_text'>Welcome to GEAUX DEG</h1>
      </div>
      
      <h1></h1>
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

          <div name='box1'className='box' onClick={() => set1IsOpen(true)}>
              <div className='top_textbox'>Sample Top {cscCourses[0][0]}</div>
              <div className='bottom_textbox'>Sample Bot Text</div>
          </div>
          <ReactModal style={customStyles} isOpen={modal1IsOpen} onRequestClose={() => set1IsOpen(false)} shouldCloseOnOverlayClick>
              <div className='modal_text_course_name'>1Modal Text 1</div>
              <div className='modal_text'>Modal Text 2</div>
              <div className='modal_text'>Modal Text 3</div>
              <div className='modal_text_description'>Modal Text 4</div>
              <div className='modal_text'>Modal Text 5</div>
              <div className='modal_text'>Modal Text 6</div>
          </ReactModal>

          <div name='box2'className='box' onClick={() => set2IsOpen(true)}>
              <div className='top_textbox'>Sample Top Text</div>
              <div className='bottom_textbox'>Sample Bot Text</div>
          </div>
          <ReactModal style={customStyles} isOpen={modal2IsOpen} onRequestClose={() => set2IsOpen(false)} shouldCloseOnOverlayClick>
              <div className='modal_text_course_name'>2Modal Text 1</div>
              <div className='modal_text'>Modal Text 2</div>
              <div className='modal_text'>Modal Text 3</div>
              <div className='modal_text_description'>Modal Text 4</div>
              <div className='modal_text'>Modal Text 5</div>
              <div className='modal_text'>Modal Text 6</div>
          </ReactModal>

          <div name='box3'className='box' onClick={() => set3IsOpen(true)}>
              <div className='top_textbox'>Sample Top Text</div>
              <div className='bottom_textbox'>Sample Bot Text</div>
          </div>
          <ReactModal style={customStyles} isOpen={modal3IsOpen} onRequestClose={() => set3IsOpen(false)} shouldCloseOnOverlayClick>
              <div className='modal_text_course_name'>3Modal Text 1</div>
              <div className='modal_text'>Modal Text 2</div>
              <div className='modal_text'>Modal Text 3</div>
              <div className='modal_text_description'>Modal Text 4</div>
              <div className='modal_text'>Modal Text 5</div>
              <div className='modal_text'>Modal Text 6</div>
          </ReactModal>


          <div name='box4'className='box' onClick={() => set4IsOpen(true)}>
              <div className='top_textbox'>Sample Top Text</div>
              <div className='bottom_textbox'>Sample Bot Text</div>
          </div>
          <ReactModal style={customStyles} isOpen={modal4IsOpen} onRequestClose={() => set4IsOpen(false)} shouldCloseOnOverlayClick>
              <div className='modal_text_course_name'>4Modal Text 1</div>
              <div className='modal_text'>Modal Text 2</div>
              <div className='modal_text'>Modal Text 3</div>
              <div className='modal_text_description'>Modal Text 4</div>
              <div className='modal_text'>Modal Text 5</div>
              <div className='modal_text'>Modal Text 6</div>
          </ReactModal>


          <div name='box5'className='box' onClick={() => set5IsOpen(true)}>
              <div className='top_textbox'>Sample Top Text</div>
              <div className='bottom_textbox'>Sample Bot Text</div>
          </div>
          <ReactModal style={customStyles} isOpen={modal5IsOpen} onRequestClose={() => set5IsOpen(false)} shouldCloseOnOverlayClick>
              <div className='modal_text_course_name'>5Modal Text 1</div>
              <div className='modal_text'>Modal Text 2</div>
              <div className='modal_text'>Modal Text 3</div>
              <div className='modal_text_description'>Modal Text 4</div>
              <div className='modal_text'>Modal Text 5</div>
              <div className='modal_text'>Modal Text 6</div>
          </ReactModal>

          <div name='box6'className='box' onClick={() => set6IsOpen(true)}>
              <div className='top_textbox'>Sample Top Text</div>
              <div className='bottom_textbox'>Sample Bot Text</div>

          </div>
          <ReactModal style={customStyles} isOpen={modal6IsOpen} onRequestClose={() => set6IsOpen(false)} shouldCloseOnOverlayClick>
              <div className='modal_text_course_name'>6Modal Text 1</div>
              <div className='modal_text'>Modal Text 2</div>
              <div className='modal_text'>Modal Text 3</div>
              <div className='modal_text_description'>Modal Text 4</div>
              <div className='modal_text'>Modal Text 5</div>
              <div className='modal_text'>Modal Text 6</div>
          </ReactModal>

      </div>

  </div>

  )
}

export default App;
