import * as React from 'react';
import seeds from '../img/seeds.jpg'

const Cultivation = () => {
    return (
        <div className="flex justify-evenly my-3 text-center text-green-100 bg-gray-800 bg-opacity-70 mx-2">
            <div>
                <hr />
                <h4 className="text-3xl text-center font-bold text-brown-600">
                    A little about... Cultivation
                </h4>

                <hr />
                <div className="flex m-4">
                    <div className='w-96 h-auto'>
                        <img src={seeds} alt='seeds' />
                    </div>
                    <div className='flex-wrap self-auto'>
                        <p className="card-text">
                            Despite growing all over the world, the coffee tree has a greater development in cold and humid places, located at higher altitudes in the tropics and subtopics.
                        </p>
                        <p className="card-text my-12">
                            While young, the fruit has a green color, turns yellowish and, only when it matures, it has a bright red color that indicates that it is ready to be harvested.
                        </p>

                        <p className="card-text">
                            Normally, the coffee tree begins to bear fruit only 3 to 4 years after planting. Its highest yield occurs between the 5th and 10th year of existence and its fruits can be germinated for up to 30 years.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Cultivation;