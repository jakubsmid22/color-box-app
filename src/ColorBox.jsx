const ColorBox = ({color, changeColor }) => {    

    
  return (
    <div onClick={e => changeColor(e)} className="h-32 lg:h-48 cursor-pointer" style={{backgroundColor: color}}></div>
  );
};

export default ColorBox;
