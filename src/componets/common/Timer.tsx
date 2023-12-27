import { useEffect } from "react";
interface Props {
    minutes: number;
    seconds: number;
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}
const Timer = ({ minutes, seconds, setMinutes, setSeconds }: Props) => {
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {minutes === 0 && seconds === 0 ? <span className="block  mt-10"></span> : (
                <h1 className="font-num font-bold text-black text-4xl mt-10">
                    {" "}
                    {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            )}
        </div>
    );
};

export default Timer;
