import {voiceList} from './Voices/voiceList'

const Voices = () => (
    <div>
            {
                voiceList.map(function (value, index, array) {
                    console.log(value)
                    return <div className="card-content py-6">
                        <div className="container">
                            <div className="my-0.5">
                                <p className="text-xl font-bold text-gray-700">
                                    {value.title}
                                </p>
                                <p className="mt-2 text-gray-600">
                                    {value.list.map(function (value, index, array){
                                        return <button className="btn btn-green mx-1 my-1">
                                            {value.title}
                                        </button>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                })
            }
    </div>
);


export default Voices;