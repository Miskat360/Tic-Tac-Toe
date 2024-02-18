import React, { useRef, useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let data = ["", "", "", "", "", "", "", "", ""]
function TicTacToe() {
    const heroTextRef = useRef()
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)
    const boxes_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    let toggle = (e, num) => {
        setCount((count) => count + 1)
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}' data-cross="cross"/>`
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img src='${circle_icon}' data-circle="circle" />`
            data[num] = "o";
        }
        checkWin()
    }
    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6])
        } else {
            isArrayFull()
        }

    }
    const won = (winner) => {
        setLock(true)
        if (winner === "x") {
            toast.success('Congratulations! ❌ is win!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                // className: "black-background"
            });
        } else {
            toast.success('Congratulations! ⭕ is win!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }

    }
    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        boxes_array.map((item) => (
            item.current.innerHTML = ""
        ))
    }
    const isArrayFull = () => {
        if (("x" == data[0] || "o" == data[0]) && ("x" == data[1] || "o" == data[1]) && ("x" == data[2] || "o" == data[2]) && ("x" == data[3] || "o" == data[3]) && ("x" == data[4] || "o" == data[4]) && ("x" == data[5] || "o" == data[5]) && ("x" == data[6] || "o" == data[6]) && ("x" == data[7] || "o" == data[7]) && ("x" == data[8] || "o" == data[8])) {
            noOneWin("full")
        }
    }
    const noOneWin = (checkfull) => {
        if (checkfull == "full") {
            toast.info('oops! no one win.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    }
    return (
        <>
            <div className="w-full h-screen bg-[#0f1b21] font-[swear] font-medium">
                <div className="w-full h-full flex items-center justify-center flex-col text-white pt-[3vw]">
                    <h1 ref={heroTextRef} className='text-white lg:text-[3vw] md:text-[4vw] sm:text-[5vw] text-[8vw] flex md:mb-[1.5vw] mb-[5vw] capitalize'>tic tac toe game in *<span>react</span></h1>
                    <div className='lg:gap-2 md:gap-1 gap-[2px] grid grid-cols-3'>
                        <div onClick={(e) => { toggle(e, 0) }} ref={box1} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 1) }} ref={box2} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 2) }} ref={box3} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 3) }} ref={box4} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 4) }} ref={box5} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 5) }} ref={box6} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 6) }} ref={box7} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 7) }} ref={box8} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                        <div onClick={(e) => { toggle(e, 8) }} ref={box9} className="md:w-[9vw] w-[22vw] md:h-[9vw] h-[22vw] bg-[#1f3540] rounded flex items-center justify-center"></div>
                    </div>
                    <div>
                        <button onClick={reset} className="bg-[#1f3540] border-[#0f1b21] py-2 px-10 text-xl text-[#26ffcb] my-11 rounded-full capitalize">reset</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default TicTacToe