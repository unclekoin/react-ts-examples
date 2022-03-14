import React, {FC, useRef, useState} from 'react';

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('controlled value:', value || 'empty');
        console.log('uncontrolled value:', inputRef.current?.value || 'empty');
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input onChange={changeHandler} value={value} type="text" placeholder="controlled"/>
            <input ref={inputRef} type="text" placeholder="uncontrolled"/>
            <button onClick={clickHandler}>Click</button>
            <div
                onDrag={dragHandler}
                draggable style={{width: 200, height: 200, backgroundColor: 'red', marginBottom: 5}}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, backgroundColor: isDrag ? 'blue' : 'red', marginBottom: 5}}
            ></div>
        </div>
    );
};

export default EventExample;
