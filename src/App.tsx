import React, {useState} from 'react';
import s from './App.module.css'

function App() {
    const [value, setValue] = useState(0)

    const countPlus = () => setValue(value + 1)
    const countReset = (e: React.MouseEvent<HTMLButtonElement>) => setValue(0)

    return (
        <div className={s.app}>
            <div className={s.right}>
                <div className={s.intr}>
                    <div className={s.max_value}>
                        <p className={s.max_value_text}>max value:</p>
                        <button className={s.btn}>5</button>
                    </div>
                    <div className={s.start_value}>
                        <p className={s.max_value_text}>start value:</p>
                        <button className={s.btn}>0</button>
                    </div>
                </div>
                <div className={s.set}>
                    <button className={s.btn_set}>set</button>
                </div>
            </div>

            <div className={s.left}>
                <div className={s.value}>
                    <h1>{value}</h1>
                </div>
                <div className={s.btns}>
                    <button className={s.btn_set} onClick={countPlus}>inc</button>
                    <button className={s.btn_set} onClick={countReset}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;