import {mdiAlert, mdiGithub, mdiTwitter} from "@mdi/js";
import {Icon} from "@mdi/react";

const Kaizen = () => (
    <div className="card-content">
        <div className="container py-6">
            <div className="my-0.5">
                <p className="text-xl font-bold text-gray-700 flex">
                    <Icon path={mdiAlert}
                          size={1.2}
                          color="#ffc107"
                    />
                    改善・音声追加について
                </p>
                <p className="mt-2 text-gray-600">
                    ぽんぽこボタンはサイトの改善要望・音声追加のご提案をお待ちしています。
                    <br/>
                    <text className="flex">
                        <Icon path={mdiGithub}
                              size={1}
                              color="gray"
                        />
                        <a href="https://github.com/NaokiOouchi/ponpoko-button" target="_blank"
                           className="text-blue-500">
                            GitHub
                        </a>
                    </text>
                    <text className="flex">
                        <Icon path={mdiTwitter}
                              size={1}
                              color="#1DA1F2"
                        />
                        <a href="https://twitter.com/NaoNoaNaoNoaN" target="_blank"
                           className="text-blue-500">
                            製作者
                        </a>
                    </text>
                </p>
            </div>
        </div>
    </div>
);

export default Kaizen;