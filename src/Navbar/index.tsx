import * as React from 'react';
import CoffeeEurope from '../CoffeeEurope/index';
import Cultivation from '../Cultivation/index';
import Origin from '../Origin/index';
import './navStyles.css';
const Navbar = () => {
    const [showOrigin, setShowOrigin] = React.useState(true);
    const [showCultivation, setShowCultivation] = React.useState(false);
    const [showCoffeeEurope, setShowCoffeeEurope] = React.useState(false);

    const handleOpenOrigin = () => {
        setShowOrigin(!showOrigin);
    };
    const handleOpenCultivation = () => {
        setShowCultivation(!showCultivation);
    };
    const handleOpenCoffeeEurope = () => {
        setShowCoffeeEurope(!showCoffeeEurope);
    };
    
    return (
        <>
            <div className="flex justify-evenly flex-row bg-green-600 items-center ">
                <div className="cup my-3 ">
                    <div className="handle"></div>
                </div>

                <div className='block'>
                    <button type="button" onClick={handleOpenOrigin}>
                        <h2> Origin of Coffee </h2>
                    </button>
                </div>

                <div className='block'>
                    <button type="button" onClick={handleOpenCultivation}>
                        <h2> Cultivation </h2>
                    </button>
                </div>

                <div className='block'>
                    <button type="button" onClick={handleOpenCoffeeEurope}>
                        <h2> Coffee in Europe </h2>
                    </button>
                </div>
            </div>

            {showOrigin ? <Origin /> : null}
            {showCultivation ? <Cultivation /> : null}
            {showCoffeeEurope ? <CoffeeEurope />: null}
        </>
    )
}
export default Navbar;