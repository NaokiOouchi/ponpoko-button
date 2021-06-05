import {mdiEmailNewsletter} from "@mdi/js";
import {Icon} from "@mdi/react";

const Description = () => (
    <div className="card-content">
        <div className="container py-6">
            <div className="my-0.5">
                <p className="text-xl font-bold text-gray-700 flex">
                    <Icon path={mdiEmailNewsletter}
                          size={1.2}
                          color="#8AE6C7"
                    />
                    新着情報（最終更新：2021/06/05）
                </p>
                <p className="mt-2 text-gray-600">
                    🥜オシャレになりたい！ピーナッツくんオンラインライブ「NUTS TO YOU！」にぽんぽこ出演！🍃
                </p>
                <font color="#FF6161">
                    <a href="https://virtual.spwn.jp/events/21070219-peanuts/" target="_blank" className="mt-2">
                        詳細・チケット購入はこちら！
                    </a>
                </font>
                <br/>
                <br/>
                <p className="mt-2 text-gray-600">
                    ぽこピーゆるキャラの姿がAR化！
                </p>
                <font color="#FF6161">
                    <a href="https://real-avatar.com/ponpoko.html" target="_blank" className="mt-2">
                        ぽこピーAR / リアルアバター制作・青山3Dスキャンスタジオ
                    </a>
                </font>
                <p className="text-gray-600">
                    ※AR対応機種のみ
                </p>
            </div>
        </div>
    </div>
);

export default Description;