import Head from 'next/head'
import Header from "./components/Header";
import Link from "./components/Link";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Kaizen from "./components/Kaizen";

export default function Home() {
    return (
        <div>
            <Head>
                <title>ぽんぽこボタン</title>
                <meta name="description" content="ボタンを押すとぽんぽこさんの可愛くて素敵で少しヤンキーなボイスが再生されるファンサイトです。"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="main bg-gray-200 p-4">
                <Link/>
                <Description/>
                <div className="max-w-4xl px-5 py-6 mx-auto bg-white rounded-lg shadow-md">
                    <div className="container">
                        <div className="my-0.5">
                            <p className="text-xl font-bold text-gray-700">
                                挨拶
                            </p>
                            <p className="mt-2 text-gray-600">
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                                <button className="btn btn-green mx-1 my-1">
                                    挨拶１
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <Profile/>
                <Kaizen/>
            </main>
            <Footer/>
        </div>
    )
}