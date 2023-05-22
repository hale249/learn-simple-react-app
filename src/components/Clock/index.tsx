import {useEffect, useState} from "react";

Clock.propTypes = {};
export function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        setTimeout(() => {
            const now = new Date();
            const newTimeString = now.toLocaleTimeString();
            setTimeString(newTimeString);
        });
    }, [])
    return (
        <div>
<p>{timeString}</p>
        </div>
    );
};
