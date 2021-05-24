import Head from 'next/head'
import Header from "./components/Header";
import Link from "./components/Link";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Kaizen from "./components/Kaizen";
import Voices from "./components/Voices";

export default function Home() {
    const images = {src:"./images"}
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
                <Voices/>
                <Profile/>
                <Kaizen/>
            </main>
            <Footer/>
        </div>
    )
}