import { useEffect, useRef, useState } from "react";

const OTP = ({OTP_DIGIT_COUNT}) => {
    const inputRef = useRef([]);
    const [input, setInput] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

    useEffect(() => {
        inputRef.current[0].focus();
    }, [])

    const handleChangeInput = (e, index) => {
        const value = e.target.value;
        if(isNaN(value)) return;

        const newValue = value.trim();
        const newArrayValue = [...input];
        newArrayValue[index] = newValue.slice(-1);
        setInput(newArrayValue);

        newValue && inputRef.current[index + 1]?.focus(); 
    }

    const handleOnKeyDown = (e, index) => {    
        if (!e.target.value && e.key === "Backspace") {
          inputRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center flex-col gap-14">
            <p className="font-semibold text-5xl leading-4">OTP validation</p>

            <div className="w-full flex flex-row justify-center gap-10">
                {
                    input && input?.map((item, index) => (
                        <input
                            key={index}
                            ref={(input) => (inputRef.current[index] = input)}
                            type="text"
                            className="border border-black rounded-lg flex w-22 h-22 text-center text-3xl"
                            value={input[index]}
                            onChange={(e) => handleChangeInput(e, index)}
                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OTP;