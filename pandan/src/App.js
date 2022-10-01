import './App.css';
import React from 'react';
import Select from 'react-select';

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

const App = () => (  
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
                      options={degrees} 
                      placeholder="Select a Degree"
                      autosize={true}
                    />
                </div>
                <div className='dropdown' name="concentration">
                    <Select 
                      options={concentrations} 
                      placeholder="Select a Concentration"
                      autosize={true}
                    />
                </div>
                <div className='dropdown' name="year">
                    <Select 
                      options={years} 
                      placeholder="Select a Year"
                      autosize={true}
                    />
                </div>
              </div>
              <div className="optional_dropdown">
                <div className='dropdown' name="semester">
                    <Select 
                      options={semesters} 
                      placeholder="Select a Semester"
                      autosize={true}
                    />
                </div>
              </div>
            <button>Get Schedule</button>
        </div>

        <div className='boxes'>
            <div className='box'>
                <div className='top_textbox'>Sample Top Text</div>
                <div className='bottom_textbox'>Sample Bot Text</div>
            </div>
            <div className='box'>
                <div className='top_textbox'>Sample Top Text</div>
                <div className='bottom_textbox'>Sample Bot Text</div>
            </div>
            <div className='box'>
                <div className='top_textbox'>Sample Top Text</div>
                <div className='bottom_textbox'>Sample Bot Text</div>
            </div>
            <div className='box'>
                <div className='top_textbox'>Sample Top Text</div>
                <div className='bottom_textbox'>Sample Bot Text</div>
            </div>
            <div className='box'>
                <div className='top_textbox'>Sample Top Text</div>
                <div className='bottom_textbox'>Sample Bot Text</div>
            </div>
            <div className='box'>
                <div className='top_textbox'>Sample Top Text</div>
                <div className='bottom_textbox'>Sample Bot Text</div>
            </div>
        </div>

    </div>
);

export default App;
