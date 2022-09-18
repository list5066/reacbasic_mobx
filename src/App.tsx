import React, {FC} from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import List from './list';
import MemoComponent from './Memo';
import StyledRight from './StyledRight';
import './MyApp.scss';
import Clock from './Clock'
import InputWithRef from './InputWithRef'
import PetStoreHeader from './PetStoreHeader'
import OwnersList from './OwnersList'
import PetsList from './PetsList'
// import hoctest from './hoctest'
const howDescription = 'Smoothly!'
function App() {
  const [isPurple, setIsPurple] = React.useState(false);
  const handleColorClick = () => setIsPurple(isPurple?false:true)
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    document.title = `You clicked ${count} times...`;
  }, [count]);

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row' }}>
        <div style={{width: '50%', color: '#343434'}}>
          <h1 className="greeting">Learn React <span className={isPurple?'purple':''} onClick={handleColorClick}>{howDescription}</span></h1>
          {isPurple ? <span>Пурпурный цвет текста</span> : <span>Зеленый цвет текста</span>}
          <ul>
            <List />
          </ul>
          <br />
          <br />
          <InputWithRef />
          <br />
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <br />
          <br />
          <hr />
          <div style={{display: 'inline-block', width: '300px', border: '5px dotted gray'}}>
            <PetStoreHeader />
            <OwnersList />
            <hr />
            <PetsList />
          </div>

        </div>
        <StyledRight>
          <div>
            <MemoComponent />
            <Clock />
            <br/>
            <br/>
            <br/>
            {/* <hoctest /> */}
          </div>
        </StyledRight>
      </div>
    </div>
  );
}

// const hoctest = (MyComponent: FC) => (props: any) => {
//   return (
//     <div>
//       <MyComponent {...props}>
//         {props.children.toUpperCase()}
//       </MyComponent>
//     </div>
//   )
// }

export default App;
