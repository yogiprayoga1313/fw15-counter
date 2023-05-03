import React, {useState} from "react"

function SetCount() {
    const [count, setCount] = useState(0)
    const [err, setErr] = useState('')
    const handlePlus = () => {
        if (count === 10) {
            setErr("Max 10")
        } else {
            setErr("")
            setCount(count + 1)
        }

    }
    const handleMin = () => {
        if (count === 0) {
            setErr("Failed!")
        } else {
            setErr("")
            setCount(count - 1)
        }

    }
    return (
        <>
            <div className="flex justify-center text-2xl">
                <h1>{count}</h1>
            </div>
            <div className='flex justify-center mt-2 text-red-700'>
                <h1>{err}</h1>
            </div>
            <div className="mt-5">
                <button className="btn btn-error m-4" onClick={handleMin}>-</button>
                <button className="btn btn-accent m-4" onClick={handlePlus}>+</button>
            </div>
        </>
    )

}

export default SetCount

