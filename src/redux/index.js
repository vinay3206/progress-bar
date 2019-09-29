import saga from './saga'
import reducer from './reducer'

const stateKey = "progressData";

const reducers = {
    [stateKey]: reducer
  };

export { saga, reducers }