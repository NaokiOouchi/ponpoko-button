import {liveList} from '../../src/liveList'

const soundPlay = (path) => {
    const audio = new Audio(path)
    audio.play()
}

const Live = () => (
    <div>
        {
            liveList.map(function (value, index, array) {
                return <div className="card-content py-6">
                    <div className="container">
                        <div className="my-0.5">
                            <p className="text-xl font-bold text-gray-700">
                                {value.title}&emsp;
                                <font color="#FF6161">
                                    <a href={value.liveUrl} target="_blank" className="mt-2">
                                        配信ページ
                                    </a>
                                </font>
                            </p>
                            <p className="mt-2 text-gray-600">
                                {value.list.map(function (value, index, array) {
                                    return <button className="btn btn-green mx-1 my-1"
                                                   onClick={() => soundPlay("live/" + value.path)}>
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

export default Live;