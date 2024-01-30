import * as React from 'react';
import coffeeBar from '../img/coffee_bar.jpg'
const CoffeeEurope = () => {
    return (
        <div className="flex justify-evenly my-3 text-center text-green-100 bg-gray-800 bg-opacity-70 mx-2">
            <div>
                <hr />
                <h4 className="text-3xl text-center font-bold text-brown-600">
                    Origin in Europe
                </h4>

                <hr />
                <div className="flex">
                    <div>
                        <img src={coffeeBar} alt='seeds' />
                    </div>
                    <div>
                        <p>
                            The grain ends up arriving in Europe in 16th century through Venice and, through traders on the Spice Route, where the first coffee establishment is opened, although some opponents call it “Satan's bitter invention”.
                        </p>
                        <p>
                            The controversy was such that it required the intervention of the Pope who, to eliminate doubt, tasted the drink and announced his approval.
                        </p>
                        <p>
                            This action was the engine for the growth of popular houses, where coffee became a social drink, it was not a pioneer, Muslims already used the drink in their musical and sporting gatherings, such as chess.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CoffeeEurope;