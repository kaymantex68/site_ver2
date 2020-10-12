import React, { useState } from 'react';
import classes from './App.module.css';
import Contacts from './Contacts'

function App() {

  const [first_col_main, setfirst_col_main] = useState(true);
  const [second_col_main, setsecond_col_main] = useState(false);
  const [third_col_main, setthird_col_main] = useState(true);
  const [forth_col_main, setforth_col_main] = useState(false);
  const [monitoring, setMonitoring] = useState(false);
  const [leftmenu, setLeftMenu] = useState(true);
  const [topmenu, setTopMenu] = useState(true);



  return (
    <>
      <div className={classes.Background}>
        <Contacts />
    </div>
      <div className={classes.main_window}>
        <div className={classes.div1}>
          {/* <div className={(topmenu === true) ? classes.div_top_menu : classes.div_top_menu_2}><span className={classes.SpanLogo}>top menu</span></div> */}

          <div className={(topmenu === true) ? classes.div_top_menu : classes.div_top_menu_2}>
            <div className={classes.logo}><span className={classes.SpanLogo}>CAYMAN</span></div>
            <div className={classes.otstup}>отступ</div>
            <div>
              <ul className={classes.Ul_top}>
                <li className={classes.Li_top}>
                  <span className={classes.span_Link}>first</span>
                </li>
                <li className={classes.Li_top}>
                  <span className={classes.span_Link}>second</span>
                </li>
                <li className={classes.Li_top}>
                  <span className={classes.span_Link}>third</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={(leftmenu === true) ? classes.div_left : classes.div_left_2}>
              <ul>

                <li className={classes.Link} ><span className={classes.span_Link} onClick={() => { setfirst_col_main(true); setsecond_col_main(false);  setthird_col_main(true); setforth_col_main(false); setMonitoring(false); setLeftMenu(true); setTopMenu(true); }}>Главная</span></li>
                <li className={classes.Link}> <span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(true); setthird_col_main(false); setforth_col_main(true); setMonitoring(false); setLeftMenu(true); setTopMenu(true); }}>Модульные котельные</span></li>
                <li className={classes.Link}> <span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(true); setthird_col_main(false); setforth_col_main(true); setMonitoring(false); setLeftMenu(true); setTopMenu(true); }}>Гальваника</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(false);  setsecond_col_main(false); setthird_col_main(false); setforth_col_main(false); setMonitoring(true); setLeftMenu(true); setTopMenu(true); }}>Мониторинг</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(false);  setsecond_col_main(false); setthird_col_main(false); setforth_col_main(false); setMonitoring(true); setLeftMenu(true); setTopMenu(true); }}>Мониторинг ПДУ</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(false); setthird_col_main(false); setforth_col_main(false); setMonitoring(false); setLeftMenu(false); setTopMenu(false); }}>Контакты</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(first_col_main);  setthird_col_main(third_col_main); setthird_col_main(third_col_main); setforth_col_main(forth_col_main); setMonitoring(monitoring); setLeftMenu(false); setTopMenu(topmenu); }}>Боковое меню</span></li>

              </ul>
            </div>
          </div>

          <div className={classes.div4} >
            <div className={(first_col_main === true) ? classes.div5 : classes.div5_2}>Просто какая то информация которая не имеет никакого значения, она нужна только для теста</div>
            <div className={(second_col_main === true) ? classes.div55 : classes.div55_2}>Просто какая то информация которая не имеет никакого значения, она нужна только для теста</div>

            <div className={(third_col_main === true) ? classes.div6 : classes.div6_2}>И здесь все тоже самое, совершенно не важные вещи, так всякая фигня что бы затестить блок</div>
            <div className={(forth_col_main === true) ? classes.div66 : classes.div66_2}>И здесь все тоже самое, совершенно не важные вещи, так всякая фигня что бы затестить блок</div>

            <div className={(monitoring === true) ? classes.div7 : classes.div7_2}>
             <din className={classes.div8}>
              <iframe src="http://newsiterad.teplotehnika68.ru/pic.php" width="100%" height="100%" frameborder="no" sandbox seamless>
              </iframe>

              </din>
            </div>
          </div>
        </div>
        {/* * 
          * кнопка возврата когда скрыто меню 
          */}
        <div onClick={() => { setLeftMenu(true); setTopMenu(true); setfirst_col_main(true); setthird_col_main(true); }} className={(leftmenu === false) ? classes.Back : classes.Back_2}></div>
      </div>

    </>

  );
}

export default App;
