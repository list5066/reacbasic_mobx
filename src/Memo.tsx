import React from 'react';
const sum = (n: number) => {
    // console.log('sum func2 ');    
	return n + n
 };

const MemoComponent = () => {
  const [num, setNum] = React.useState(0);
  const [isGreen, setIsGreen] = React.useState(false);
  const result = React.useMemo(() => sum(num), [num]);
  // const result = sum(num);

  return (
    <div style={{border: '4px dashed #c0c0c0', display: 'inline-block'}}>

      <h1 onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "red" }}
      >
        Example useMemo
      </h1>
      <h2>
        Sum {result}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};
export default MemoComponent;