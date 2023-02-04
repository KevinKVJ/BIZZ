import { css } from '@emotion/react';

import ColumnSplitLine from './ColumnSplitLine';

const Navbar = () => {
    const navbarStyles = css`
        height: 50px;
        padding: 0 15px;

        border-bottom: 1px solid #ffffff3f;
        background-color: #000000cc;
        backdrop-filter: blur(12px);

        display: flex;
        align-items: center;

        > .nav_left {
            display: flex;
            justify-content: center;
            align-items: center;
            .logo {
                width: 86px;
                height: 30px;
                background-color: skyblue;
            }

            .section_select {
                height: 100%;
                padding: 15px 0;

                display: flex;

                font-size: 14px;
                color: #ffffff;
                justify-content: space-evenly;
                align-items: center;

                > div {
                    padding: 5px 10px;
                    border-radius: 3px;
                }

                .select_following {
                    background-color: #ffffff19;
                }
            }
        }

        > .nav_middle {
            flex-grow: 1;
        }

        > .nav_right {
            display: flex;
            align-items: center;
            column-gap: 15px;
            flex-shrink: 0;
            flex-grow: 0;
            .user {
                width: 36px;
                height: 36px;
                background-color: skyblue;
            }

            .notification {
                width: 26px;
                height: 26px;

                background-color: #ffffff;
            }

            .collection {
                width: 26px;
                height: 26px;

                background-color: #ffffff;
            }

            .new_post {
                height: 36px;
                border: 1px solid #ffffff3f;
                border-radius: 3px;
                display: flex;
                align-items: center;
                padding: 0 8px;
                flex-shrink: 0;
                flex-grow: 0;

                background-color: #1687a7;
                font-size: 14px;
                color: #ffffff;
            }
        }
    `;
    return (
        <div className='navbar' css={navbarStyles}>
            <div className='nav_left'>
                <div className='logo'></div>
                <ColumnSplitLine />
                <div className='section_select'>
                    <div className='select_following'>Following</div>
                    <div className='select_explore'>Explore</div>
                </div>
            </div>
            <ColumnSplitLine />

            <div className='nav_middle'>
                <div className='search_bar'></div>
            </div>

            <ColumnSplitLine />

            <div className='nav_right'>
                <div className='user'></div>
                <div className='notification'></div>
                <div className='collection'></div>
                <div className='new_post'>+ New Post</div>
            </div>
        </div>
    );
};

export default Navbar;
