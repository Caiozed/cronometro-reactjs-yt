import { useState } from 'react';
import './Cronometro.css';

function Cronometro () {
    const TEMPO_TOTAL = 30;
    let [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL)
    const startTimer = () => {
        setTimeout(() => {
            if (tempoRestante > 0) {
                setTempoRestante(tempoRestante -= 1);
            }
        }, 1000)
    }

    const formataTempo = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    const calculaFracao = () => {
        return tempoRestante / TEMPO_TOTAL;
    }

    startTimer()
    return(
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                    <path
                        id="base-timer-path-remaining"
                        strokeDasharray={(calculaFracao() * 283).toFixed(0) + " 283"}
                        className="base-timer__path-remaining"
                        d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
                    ></path>
                </g>
            </svg>
            <span id="base-timer-label" className="base-timer__label">
                {formataTempo(tempoRestante)}
            </span>
        </div>
    )
}

export default Cronometro