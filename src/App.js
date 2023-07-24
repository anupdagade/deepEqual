import './App.css';

function App({ obj1, obj2 }) {
  const objectCompared = deepEqual(obj1, obj2);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link" data-testid={'comparison-result'}>
          <span>Comparison Value is - {`${objectCompared}`}</span>
        </div>
      </header>
    </div>
  );
}

export default App;

function removeUndefinedValues(oldObj) {
  const keysToKeep = Object.keys(oldObj).filter(
      (key)=> {
        return (oldObj[key] !== undefined)
      });

  const newObj = {};
  keysToKeep.forEach((key)=>{
    newObj[key] = oldObj[key]
  });

  return newObj
}

function deepCompareObjects(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if(keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepCompareObjects(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}


function deepEqual (obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const newObj1 = removeUndefinedValues(obj1)
  const newObj2 = removeUndefinedValues(obj2)

  const checkEquality = deepCompareObjects(newObj1, newObj2);
  return checkEquality
}
