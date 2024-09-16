import React, { useState } from 'react'
export default function Todo() {
    const [color, setcolor] = useState("#ffff")
    return (
        <div>
           < h1>Explore Our Color Picker</h1>
            <input type="color" value={color} onChange={(e) => setcolor(e.target.value)} className='w-100 h-full' />
            <div className='mt-2' style={{backgroundColor:color}}></div>
        </div>
    )
}
