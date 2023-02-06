import * as React from 'react';
import pastorKaldi from '../img/pastorKaldi.jpg'

const Origin = () => {
    return (
        <div className="flex justify-evenly my-3 text-center text-green-100 bg-gray-800 bg-opacity-70 mx-2">
            <div>
                <hr />
                <h4 className="text-3xl text-center font-bold">
                    Where is it come from?
                </h4>
                <hr />
                <div className='flex m-4'>
                    <div className='w-2/4'>
                        <img src={pastorKaldi} alt='pastorKaldi' />
                    </div>
                    <div className='my-2'>
                        <p className="card-text">
                            This coffee plant originates from Ethiopia. Used as food, around 600 AD. which was cultivated by the Arabs with the aim of using it in the preparation of a drink.
                        </p>
                        <p className="card-text">
                            Legend has it that, while walking his goats in the fields of a monastery, Kaldi began to feel strange about the agitation of the herd when he ingested some red cherries from a wild bush.
                        </p>
                        <p className="card-text">
                            Curious, the shepherd decided to taste the unknown fruit, which became the most desired by the monks, as soon after such action, they saw him dancing together with his goats. From that moment on, this “cherry mixture” was boiled and its liquid used as an element that kept the monks awake for a long time, during long hours of prayers.
                        </p>
                        <p className="card-text">
                            The coffee bean used to make the drink comes from a plant, in portuguese language as Cafeeiro, which belongs to the Rubiaceae family and can reach up to 10 meters in height.
                        </p>

                        <p className="card-text">
                            Those that are used in cultivation are cut down to facilitate harvesting.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Origin;