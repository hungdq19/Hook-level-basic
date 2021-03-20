import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './couterSlice';
import './style.scss';

CouterFeature.propTypes = {};

function CouterFeature(props) {
    const couter = useSelector((state) => state.couter);
    const dispash = useDispatch();
    const handleClick = () => {
        const action = increase();
        console.log(action);
        dispash(action);
    };
    const handleDrease = () => {
        const action = decrease();
        console.log(action);
        dispash(action);
    };
    return (
        <div>
            <h1>{`InitCount: ${couter}`}</h1>
            <Button
                className="m-20"
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                Increase
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleDrease}
            >
                Decrease
            </Button>
        </div>
    );
}

export default CouterFeature;
