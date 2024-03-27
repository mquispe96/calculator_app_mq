import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [toogleParenthesis, setToggleParenthesis] = useState(true);
  const [previous, setPrevious] = useState('');
  const [current, setCurrent] = useState('');

  useEffect(() => {
    const regBtns = document.querySelectorAll('.buttons__regularBtn');
    regBtns.forEach(btn => {
      if(darkMode){
        btn.classList.remove('regBtn-light');
        btn.classList.add('regBtn-dark');

      }
      else{
        btn.classList.remove('regBtn-dark');
        btn.classList.add('regBtn-light');
      }
    })
    const equal = document.querySelector('.buttons__equal');
    if(darkMode){
      equal.classList.remove('equal-light');
      equal.classList.add('equal-dark');

    }
    else{
      equal.classList.remove('equal-dark');
      equal.classList.add('equal-light');
    }
  }, [darkMode])

  useEffect(() => {
    const result = document.querySelector('.display__result');
    const op = document.querySelector('.display__op');
    if(current?.length > 10){
        result.style.fontSize = '30px';
        op.style.fontSize = '15px';
    }
    else{
        result.style.fontSize = '60px';
        op.style.fontSize = '30px';
    }
  }, [current])

  const deleteChar = () => setCurrent(prev => prev.slice(0, prev.length - 1));

  return (
    <section className = 'calculator' style = {{background: darkMode ? 'rgb(10,36,55)' : 'rgb(220,227,235)', color: darkMode ? 'white' : 'black'}}>
      <div className = 'header'>
        <h3 style = {{borderLeft: darkMode ? '1px white solid' : '1px black solid',
        borderBottom: darkMode ? '1px white solid' : '1px black solid'}}>Calculator App</h3>
        <i style = {{color: darkMode ? 'rgb(220,227,235)' : 'rgb(10,36,55)', border: darkMode ? '1px rgb(220,227,235) solid' : '1px rgb(10,36,55) solid'}}onClick = {() => setDarkMode(prev => !prev)} className = {darkMode ? 'fa-regular fa-sun mode-light' : 'fa-regular fa-moon mode-dark'}></i>
      </div>
      <div className = 'display'>
        <div style={{
          position: 'absolute',
          content: '',
          background: darkMode ? 'linear-gradient(90deg, rgb(10,36,55), white,white, rgb(10,36,55))' : 'linear-gradient(90deg, rgb(220,227,235), white,white, rgb(220,227,235))',
          width: '100%',
          height: '3px',
          bottom: 0,
        }}></div>
        <p className = 'display__op'>{previous}</p>
        <p onClick = {() => deleteChar()} className = 'display__result'>{current}</p>
      </div>
      <div className = 'buttons' style = {{background: darkMode ? 'rgb(12,47,70)' : 'rgb(236,240,244)'}}>
        <button onClick = {() => {setPrevious(current); setCurrent('');}} onDoubleClick = {() => {setCurrent(''); setPrevious('');}} className = 'buttons__ce'>CE</button>
        <button onClick = {() => {setCurrent(prev => prev + previous); setPrevious('');}} className = 'buttons__ops'>RE</button>
        <button onClick = {() => setCurrent(prev => prev + '%')} className = 'buttons__ops'>%</button>
        <button onClick = {() => setCurrent(prev => prev + '/')} className = 'buttons__ops'>/</button>
        <button onClick = {() => setCurrent(prev => prev + '7')} className = 'buttons__regularBtn'>7</button>
        <button onClick = {() => setCurrent(prev => prev + '8')} className = 'buttons__regularBtn'>8</button>
        <button onClick = {() => setCurrent(prev => prev + '9')} className = 'buttons__regularBtn'>9</button>
        <button onClick = {() => setCurrent(prev => prev + '*')} className = 'buttons__ops'>*</button>
        <button onClick = {() => setCurrent(prev => prev + '4')} className = 'buttons__regularBtn'>4</button>
        <button onClick = {() => setCurrent(prev => prev + '5')} className = 'buttons__regularBtn'>5</button>
        <button onClick = {() => setCurrent(prev => prev + '6')} className = 'buttons__regularBtn'>6</button>
        <button onClick = {() => setCurrent(prev => prev + '-')} className = 'buttons__ops'>-</button>
        <button onClick = {() => setCurrent(prev => prev + '1')} className = 'buttons__regularBtn'>1</button>
        <button onClick = {() => setCurrent(prev => prev + '2')} className = 'buttons__regularBtn'>2</button>
        <button onClick = {() => setCurrent(prev => prev + '3')} className = 'buttons__regularBtn'>3</button>
        <button onClick = {() => setCurrent(prev => prev + '+')} className = 'buttons__ops'>+</button>
        <button onClick = {() => setCurrent(prev => prev + '0')} className = 'buttons__regularBtn'>0</button>
        <button onClick = {() => setCurrent(prev => prev + '.')} className = 'buttons__regularBtn'>.</button>
        <button onClick = {() => {setCurrent(prev => {
          if(toogleParenthesis){
            return prev + '(';
          }
          else{
            return prev + ')';
          }
        }); setToggleParenthesis(prevState => !prevState);}} className = 'buttons__regularBtn'>( )</button>
        <button onClick = {() => {setPrevious(current); setCurrent(curr => {
          if(!curr) return '';
          try {
            return String(eval(curr));
          } catch (error){
            alert(error);
            return curr;
          }
        });
          }} className = 'buttons__equal'>=</button>
      </div>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);