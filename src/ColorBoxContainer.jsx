import ColorBox from './ColorBox';

const ColorBoxContainer = () => {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);

  const getRandomColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215);
  
    let hexColor = "#" + randomColor.toString(16).padStart(6, '0');
    
    return hexColor;
  };

  const changeColor = (e) => {
    e.target.style.backgroundColor = getRandomColor();
  };

  return (
    <div className="grid grid-cols-4 w-11/12 lg:w-7/12 md:lg:w-9/12">
      {items.map((item, index) => (
        <ColorBox changeColor={changeColor} key={index} color={getRandomColor()} />
      ))}
    </div>
  );
};

export default ColorBoxContainer;
