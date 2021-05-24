import {Icon} from "@mdi/react";
import {mdiTwitter, mdiYoutube} from "@mdi/js";

const Link = () => (
    <div className="channel-grid">
        <button className="channel-btn" value="target='_blank'"
                onClick={() => window.open('https://www.youtube.com/channel/UC1EB8moGYdkoZQfWHjh7Ivw', '_blank', '')}>
            <Icon path={mdiYoutube}
                  size={1}
                  color="red"
            />
            <text className={"mx-1"}>ぽんぽこちゃんねる</text>
        </button>
        <button className="channel-btn"
                value="target='_blank'"
                onClick={() => window.open('https://twitter.com/ponpokoka', '_blank', '')}>
            <Icon path={mdiTwitter}
                  size={1}
                  color="#1DA1F2"
            />
            <text className={"mx-1"}>@ponpokoka</text>
        </button>
    </div>
);

export default Link;