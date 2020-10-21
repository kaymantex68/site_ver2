import React, { useState } from 'react';
import classes from './Calc.module.css';

function Calc() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [C, setC] = useState(0);
    const [N, setN] = useState(0);

    function CurrentN() {
        let Iax,
            Iay,
            Ibx,
            Iby,
            Icx,
            Icy,
            Inx,
            Iny,
            In;
        Iax = A * 0;
        Iay = A * 1;
        console.log(`Iax ${Iax} Iay ${Iay}`)

        Ibx = B * Math.cos(30 * Math.PI / 180);
        Iby = B * Math.cos(60 * Math.PI / 180) * (-1);
        console.log(`Ibx ${Ibx} Iby ${Iby}`)

        Icx = C * Math.cos(30 * Math.PI / 180) * (-1);
        Icy = C * Math.cos(60 * Math.PI / 180) * (-1);
        console.log(`Icx ${Icx} Icy ${Icy}`)

        Inx = Iax + Ibx + Icx;
        console.log(`Inx ${Inx}`)
        Iny = Iay + Iby + Icy;
        console.log(`Inx ${Iny}`)
        In = Math.sqrt((Inx * Inx) + (Iny * Iny));
        console.log(`In ${In}`)
        setN(In);
    }
    return (
        <div className={classes.CalcMain}>
            <p className={classes.p_ABZ}>Ток нулевого проводника <span className={classes.Pink}>3х ФАЗНОЙ</span> цепи при <span className={classes.Pink}>НЕССИМЕТРИЧНОЙ</span> нагрузке</p>
            <p className={classes.p_ABZ}><span className={classes.Green}>Фаза А</span></p>
            <input className={classes.i_ABZ} type="text" onChange={(e) => { setA(e.target.value); }} />
            <p className={classes.p_ABZ}><span className={classes.Green}>Фаза B</span></p>
            <input className={classes.i_ABZ} type="text" onChange={(e) => { setB(e.target.value); }} />
            <p className={classes.p_ABZ}><span className={classes.Green}>Фаза C</span></p>
            <input className={classes.i_ABZ} type="text" onChange={(e) => { setC(e.target.value); }} />
            <div>
                <span className={classes.button} onClick={CurrentN}>Расчитать</span>
            </div>
            <p className={classes.p_ABZ}>Фаза N</p>
            <div><p className={classes.p_ABZ}>{N} А</p></div>
        </div>
    )
}

export default Calc;