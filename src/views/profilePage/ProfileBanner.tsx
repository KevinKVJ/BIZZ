import { css } from '@emotion/react';

const ProfileBanner = () => {
    const profileBannerStyle = css`
        display: flex;
        align-items: flex-end;
        gap: 20px;
        flex-wrap: wrap;
        > .avatar {
            flex-shrink: 0;
            flex-grow: 0;

            width: 100px;
            height: 100px;

            border-radius: 100px;
            background-color: skyblue;
        }

        > .info {
            flex-grow: 1;
            flex-shrink: 0;
            .title {
                font-size: 20px;
                font-weight: 700;
            }

            .bio {
                font-size: 11px;
                max-width: 500px;
            }

            .stats {
                display: flex;
                column-gap: 5px;

                font-size: 11px;
            }
        }

        > .operation {
            display: flex;

            column-gap: 8px;
            > div {
                flex: 0 0 auto;

                box-sizing: content-box;

                padding: 10px;
                border: 1px solid #ffffff3f;
                border-radius: 5px;

                display: flex;
                align-items: center;
                column-gap: 5px;

                color: #fff;
            }

            .icon {
                width: 12px;
                height: 12px;
                background-color: skyblue;
            }

            .send_message {
                background-color: #000000bf;
            }

            .follow {
                background-color: #1687a7;
            }
        }
    `;
    return (
        <div className='profile_banner-wrapper' css={profileBannerStyle}>
            <div className='avatar'></div>
            <div className='info'>
                <div className='title'>Happy Otter</div>
                <div className='bio'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                    enim. Molestiae consectetur sint alias, laborum assumenda repellendus
                    necessitatibus ullam eos!
                </div>
                <div className='stats'>
                    <div className='followers'>210 Followers</div>
                    <div className='series'>15 Series</div>
                    <div className='page_views'>51.5k Page Views</div>
                </div>
            </div>
            <div className='operation'>
                <div className='send_message'>
                    <div className='icon'></div>
                    <div className='title'>Send Message</div>
                </div>
                <div className='follow'>
                    <div className='icon'></div>
                    <div className='title'>Follow</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
