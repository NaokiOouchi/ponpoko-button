import Head from 'next/head'
import Header from "./components/Header";
import Link from "./components/Link";
import Description from "./components/Description";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Kaizen from "./components/Kaizen";
import Voices from "./components/Voices";
import Live from "./components/Live";
import News from "./components/News";

export default function Home() {
    const images = {src:"./images"}
    return (
        <div>
            <Head>
                <title>ぽんぽこボタン</title>
                <meta name="description" content="ボタンを押すとぽんぽこさんの可愛くて素敵で少しヤンキーなボイスが再生されるファンサイトです。"/>
                <meta property="og:title" content="ぽんぽこボタン" />
                <meta property="og:site_name" content="ぽんぽこボタン" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://ponpoko-button.vercel.app/image/05b4f308-61b5-4133-a6d5-87fbaa0195bd.png" />
                <link rel="icon" href="/favicon.ico"/>
                <meta name="google-site-verification" content="DvGbJRBBaR4Rd7orrKJnDKiCSqTglRHNik3gB2KDgZg" />
            </Head>
            <Header/>
            <main className="main bg-gray-200 p-4">
                <Link/>
                <Description/>
                <News/>
                <Voices/>
                <Live/>
                <Profile/>
                <Kaizen/>
            </main>
            <Footer/>
        </div>
    )
}