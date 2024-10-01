import { useDispatch } from 'react-redux';
import { incrementnum, decrementNum } from './redux/redux';

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(incrementnum())
            }}>+</button>

            <button onClick={() => {
                dispatch(decrementNum())
            }}>-</button>

            <button onClick={() =>{
                dispatch(setText('Hello Geeks!'))
            }}>change</button>

        </div>
    );
}

export default Btn;
