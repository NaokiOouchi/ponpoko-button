import {TwitterTimelineEmbed} from "react-twitter-embed";

const Profile = () => (
    <div className="card-content">
        <div className="my-0.5">
            <table>
                <tbody>
                <tr align="center">
                    <td width="40%" height="600">
                        <img style={{object_fit: "cover"}} src="
                                         image/OOc1vHDJ_400x400.jpg" alt=""/>
                        <br/>
                        <font className="text-sm md:text-xl" color="#7DAA55">甲賀流忍者 ぽんぽこ／<br/>Kougaryu-Ninja
                            Ponpoko</font>
                        <br/>
                        <br/>
                        <font className="text-sm md:text-xl">
                        滋賀県甲賀市在住で、甲賀流忍者と甲賀市の特産物、信楽焼の狸をモチーフとしており、地元の甲賀を盛り上げるために活動を行っている。
                        </font>
                        <br/>
                        (引用：
                        <a href="
                              https://ja.wikipedia.org/wiki/%E7%94%B2%E8%B3%80%E6%B5%81%E5%BF%8D%E8%80%85!%E3%81%BD%E3%82%93%E3%81%BD%E3%81%93"
                              target="_blank" style={{color: "#2b7bb9"}}>Wikipedia
                        </a>
                        )
                    </td>
                    <td width="60%" height="600">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="ponpokoka"
                            options={{height: 550}}
                            lang="ja"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Profile;