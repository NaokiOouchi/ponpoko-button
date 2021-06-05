import {mdiHelpCircle} from "@mdi/js";
import {Icon} from "@mdi/react";
const Description = () => (
    <div className="card-content">
        <div className="container py-6">
            <div className="my-0.5">
                <p className="text-xl font-bold text-gray-700 flex">
                    <Icon path={mdiHelpCircle}
                          size={1.2}
                          color="skyblue"
                    />
                    このサイトは？
                </p>
                <p className="mt-2 text-gray-600">
                    ボタンを押すとぽんぽこさんの可愛くて素敵で少しヤンキーなボイスが再生されるファンサイトです。
                </p>
                <p className="text-gray-600">
                    完全非公式のサイトであり、ご本人からのご指摘やお怒りがあり次第対応させていただきます。
                </p>
                <br/>リスペクト：
                <font color="#FF6161">
                    <a href="http://ushiumi.ichiya-boshi.net/" target="_blank" className="mt-2">
                        宇志海ボタン
                    </a>
                </font>
                &emsp;
                <font color="#FFC9FF">
                    <a href="https://www.natorisana.love/" target="_blank" className="mt-2">
                        さなボタン（２）
                    </a>
                </font>
            </div>
        </div>
    </div>
);

export default Description;