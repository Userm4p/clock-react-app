import { useEffect, useState } from 'react';
import './clock.css';

export const Clock = () => {

    // Initialize the clock
    const [hours, setHours] = useState<number>((new Date()).getHours());
    const [minutes, setMinutes] = useState<number>((new Date()).getMinutes());
    const [seconds, setSeconds] = useState<number>((new Date()).getSeconds());

    // Update the clock every second
    useEffect(() => {
        const interval = setInterval(() => {
          setHours((new Date()).getHours());
          setMinutes((new Date()).getMinutes());
          setSeconds((new Date()).getSeconds());
        }, 1000);
        return () => {clearInterval(interval)};
    }, []);

  return (
	<div className="flex">
        <div className="clock-box">   
            <div className="clock">
				<img style={{
                    transform: `rotate(${hours * 30}deg)`,
                }} src="/assets/aguja.png" id="hours" alt='aguja de horas'/>
				<img style={{
                    transform: `rotate(${minutes * 6}deg)`,
                }} src="/assets/agujaMinutos.png" id="minutes" alt='aguja de minutos'/>
				<img style={{
                    transform: `rotate(${seconds * 6}deg)`,
                }}
                 src="/assets/agujaSegundos.png" id="seconds" alt='aguja de segundos'/>
			</div>
        </div>
	</div>
  )
}
