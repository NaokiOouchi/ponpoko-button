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
                    新着情報（最終更新：2021/07/06）
                </p>
                <p className="mt-2 text-gray-600">
                    🍃祝！ぽんぽこちゃんねるチャンネル登録者数20万人突破！🍃
                </p>
                <font color="#FF6161">
                    <a href="https://www.youtube.com/watch?v=ACHwt8XmMtU" target="_blank" className="mt-2">
                        20万人耐久配信アーカイブはこちら！
                    </a>
                </font>
            </div>
        </div>
    </div>
);

export default Description;