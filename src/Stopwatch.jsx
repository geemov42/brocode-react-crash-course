import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const Stopwatch = props => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }
    function formatTime() {

        let hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0');
        let minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, '0');
        let seconds = String(Math.floor(elapsedTime / (1000) % 60)).padStart(2, '0');
        let milli = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}.${milli}`;
    }

  return (
    <>
        <div className='stopwatch'>
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button className='start-button' onClick={start}>Start</button>
                <button className='stop-button' onClick={stop}>stop</button>
                <button className='reset-button' onClick={reset}>reset</button>
            </div>
        </div>
    </>
  )
}

Stopwatch.propTypes = {}

export default Stopwatch