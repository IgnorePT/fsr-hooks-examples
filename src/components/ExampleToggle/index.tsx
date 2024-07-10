import { useState } from "react";

function ExampleToggle() {
    // let isOn = false

    const [isOn, setIsOn] = useState(false)

    if (isOn) {
        document.body.classList.add("on");
    } else {
        document.body.classList.remove("on");
    }

    return (
        <div>
            <h1 style={{
                color: isOn ? "black" : "white"
            }}>Light: {isOn ? "On" : "Off"}</h1>
            <button onClick={() => {
                // if (isOn === false) {
                //     setIsOn(true)
                // }

                // if (isOn === true) {
                //     setIsOn(false)
                // }

                // Truques negação
                setIsOn(!isOn)

            }}>Turn on light</button>
        </div>
    );

}

export default ExampleToggle