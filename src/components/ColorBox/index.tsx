import {useState} from 'react';

ColorBox.propTypes = {
    
};

const getRandomColor = () => {
    const colorArray = ['pink', 'orange', 'yellow', 'purple', 'green']
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
};

function ColorBox() {
    const [color, setColor] = useState(() => {
        console.log('Init Color')
        return localStorage.getItem('box_color') || 'deeppink';
    });

    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    };
    return (
        <div className="color-box" style={{
            backgroundColor: color
        }}
        onClick={handleBoxClick}>
            Color box
        </div>
    );
}

export default ColorBox;
