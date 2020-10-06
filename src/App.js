import React, { useState } from 'react';
import classes from './App.module.css';

function App() {

  const [number, setNumber] = useState(false);
  const [number1, setNumber1] = useState(false);
  const [number2, setNumber2] = useState(false);
  const [number3, setNumber3] = useState(true);



  return (
    <>
      <div className={classes.Background}>
        background нужно что бы здесь была очень длиная надпись , прям длянная что капец, а теперь , позвоните нам: +7 920 4897437
    </div>
      <div className={classes.main_window}>
        <div className={classes.div1}></div>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={(number3 === true) ? classes.div_left : classes.div_left_2}>
              <ul>
                <li className={classes.Link} onClick={() => { setNumber(!number); setNumber1(number1); setNumber2(false); setNumber3(true);}}>main</li>
                <li className={classes.Link} onClick={() => { setNumber(false); setNumber1(false); setNumber2(false); setNumber3(false);}}>monitor</li>
                <li className={classes.Link} onClick={() => { setNumber(number); setNumber1(!number1); setNumber2(false); setNumber3(true);}}>second</li>
                <li className={classes.Link} onClick={() => { setNumber(false); setNumber1(false); setNumber2(!number2); setNumber3(true); }}>big</li>
                <li className={classes.Link} onClick={() => { setNumber(false); setNumber1(false); setNumber2(number2); setNumber3(!number3); }}>left menu</li>
              </ul>
            </div>
          </div>

          <div className={classes.div4} >
            <div className={(number === true) ? classes.div5 : classes.div5_2}>Просто какая то информация которая не имеет никакого значения, она нужна только для теста</div>
            <div className={(number1 === true) ? classes.div6 : classes.div6_2}>И здесь все тоже самое, совершенно не важные вещи, так всякая фигня что бы затестить блок</div>
            <div className={(number2 === true) ? classes.div7 : classes.div7_2}>широкий блок</div>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
