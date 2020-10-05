import React, {useState} from 'react';
import classes from './App.module.css';

function App() {

  const [number,setNumber]=useState(false);
  const [number1,setNumber1]=useState(false);



  return (  
    <>
    <div className={classes.Background}>
      background нужно что бы здесь была очень длиная надпись , прям длянная что капец, а теперь , позвоните нам: +7 920 4897437
    </div>
    <div className={classes.main_window}>
      <div className={classes.div1}></div>
      <div className={classes.div2}>
        <div className={classes.div3}>
          <ul>
            <li className={classes.Link} onClick={()=>{setNumber(!number);setNumber1(number1)}}>main</li>
            {console.log(number)}
            <li className={classes.Link} onClick={()=>{setNumber(false); setNumber1(false)}}>monitor</li>
            <li className={classes.Link} onClick={()=>{setNumber(number); setNumber1(!number1)}}>second</li>
          </ul>
        </div>
          
        <div className={classes.div4} >
          <div className={(number===true) ? classes.div5 : classes.div5_2}>Просто какая то информация которая не имеет никакого значения, она нужна только для теста</div>
          <div className={(number1===true) ? classes.div6 : classes.div6_2 }>И здесь все тоже самое, совершенно не важные вещи, так всякая фигня что бы затестить блок</div>
        </div>
      </div>
    </div>
    
    </>
    
  );
}

export default App;
