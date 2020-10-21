import React, { useState } from 'react';
import classes from './App.module.css';
import Contacts from './Contacts'
import logo from './cayman.svg'
import Slider from './Slider'
import Calc from './Calc'
function App() {
  const [mainWindow, setMainWindow] = useState(true);
  const [calcWindow, setCalcWindow] = useState(false);

  const [first_col_main, setfirst_col_main] = useState(true);
  const [second_col_main, setsecond_col_main] = useState(false);
  const [third_col_main, setthird_col_main] = useState(true);
  const [forth_col_main, setforth_col_main] = useState(false);
  const [monitoring, setMonitoring] = useState(false);
  const [leftmenu, setLeftMenu] = useState(true);
  const [topmenu, setTopMenu] = useState(true);
  const [slider, setSlider] = useState(false);





  return (
    <>
      <div className={classes.Background}>
        <Contacts />
      </div>
      <div className={classes.main_window}>
        <div className={classes.div1}>
          {/* <div className={(topmenu === true) ? classes.div_top_menu : classes.div_top_menu_2}><span className={classes.SpanLogo}>top menu</span></div> */}

          <div className={(topmenu === true) ? classes.div_top_menu : classes.div_top_menu_2}>
            {/* <div className={classes.logo}><span className={classes.SpanLogo}>CAYMAN</span></div> */}
            <div className={classes.otstup}>отступ</div>
            <div>
              <ul className={classes.Ul_top}>
                <li className={classes.Li_top}>
                  <span className={classes.span_Link} onClick={() => { setMainWindow(true); setCalcWindow(false) }}>Главная</span>
                </li>
                <li className={classes.Li_top}>
                  <span className={classes.span_Link}>second</span>
                </li>
                <li className={classes.Li_top}>
                  <span className={classes.span_Link} onClick={() => { setMainWindow(false); setCalcWindow(true) }}>Калькулятор</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className={(calcWindow === true) ? classes.CalcMain_on : classes.CalcMain_off}>
          <Calc />
        </div>   
     
        <div className={(mainWindow === true) ? classes.div2_on : classes.div2_off}>
          <div className={classes.div3}>
            <div className={(leftmenu === true) ? classes.div_left : classes.div_left_2}>
              {/* <div className={classes.bigLogo}>
                <img src={logo}></img>
              </div> */}
              <ul>
                <li className={classes.Link} ><span className={classes.span_Link} onClick={() => { setfirst_col_main(true); setsecond_col_main(false); setthird_col_main(true); setforth_col_main(false); setMonitoring(false); setSlider(false); setLeftMenu(true); setTopMenu(true); }}>Главная</span></li>
                <li className={classes.Link}> <span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(true); setthird_col_main(false); setforth_col_main(true); setMonitoring(false); setSlider(false); setLeftMenu(true); setTopMenu(true); }}>Модульные котельные</span></li>
                <li className={classes.Link}> <span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(true); setthird_col_main(false); setforth_col_main(true); setMonitoring(false); setSlider(false); setLeftMenu(true); setTopMenu(true); }}>Гальваника</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(false); setthird_col_main(false); setforth_col_main(false); setMonitoring(true); setSlider(false); setLeftMenu(true); setTopMenu(true); }}>Мониторинг</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(false); setthird_col_main(false); setforth_col_main(false); setMonitoring(false); setSlider(true); setLeftMenu(true); setTopMenu(true); }}>Слайдер</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(false); setsecond_col_main(false); setthird_col_main(false); setforth_col_main(false); setMonitoring(false); setSlider(false); setLeftMenu(false); setTopMenu(false); }}>Контакты</span></li>
                <li className={classes.Link}><span className={classes.span_Link} onClick={() => { setfirst_col_main(first_col_main); setthird_col_main(third_col_main); setthird_col_main(third_col_main); setforth_col_main(forth_col_main); setMonitoring(monitoring); setLeftMenu(false); setTopMenu(topmenu); }}>Боковое меню</span></li>
              </ul>
            </div>
          </div>
          <div className={classes.div4} >
            <div className={(first_col_main === true) ? classes.div5 : classes.div5_2}>
              <p className={classes.upWord}>С какими ПЛК работаем</p>
              <p>- Schneider Electric ---> modicon m221, modicon m241</p>
              <p>- ПЛК Овен (весь модельный ряд)</p>
              <p>- Segnetics</p>
              <p>- WAGO</p>
              <p>- Arduino-совместимые контроллеры</p>
              <p>- Raspberry PI</p>
              <p className={classes.upWord} >Среды разработки</p>
              <p>- Codesys</p>
              <p>- EcoStruxure Machine Expert</p>
              <p>- Node-RED</p>
              <p className={classes.upWord} >Языки программирования</p>
              <p>- Языки IEC 61131-3 ---> ST,FBD,CFC,SFC,LD,IL</p>
              <p>- JavaScript</p>
              <p>- Python</p>
              <p>- C++</p>
              <p className={classes.upWord} >SCADA системы + OPC</p>
              <p>- Simple scada</p>
              <p>- Овен Телематика</p>
              <p>- Master scada</p>
              <p>- Lectus</p>
              <p>- OWEN OPC</p>
              <p className={classes.upWord} >Панели оператора</p>
              <p>- Weintek</p>
              <p>- ОВЕН СП3хх</p>
              <p>- Kinco</p>
              <p className={classes.upWord} >UI-интерфейс</p>
              <p>- web-приложение на базе React,JavaScript,PHP</p>
              <p>- web-визуализация на базе HomeAssistant</p>
              <p>- web-визуализация Codesys 3.5</p>
            </div>
            <div className={(second_col_main === true) ? classes.div55 : classes.div55_2}>Просто какая то информация которая не имеет никакого значения, она нужна только для теста</div>
            <div className={(third_col_main === true) ? classes.div6 : classes.div6_2}>
              <div className={classes.Slider1} ><Slider /></div>
              <div className={classes.Slider1} ><Slider /></div>
            </div>
            <div className={(forth_col_main === true) ? classes.div66 : classes.div66_2}>И здесь все тоже самое, совершенно не важные вещи, так всякая фигня что бы затестить блок</div>
            <div className={(monitoring === true) ? classes.div7 : classes.div7_2}>
              <iframe src="http://newsiterad.teplotehnika68.ru/pic.php" width="100%" height="100%" frameborder="no" sandbox seamless>
              </iframe>
            </div>
            <div className={(slider === true) ? classes.div8 : classes.div8_2}>
              <Slider />
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
