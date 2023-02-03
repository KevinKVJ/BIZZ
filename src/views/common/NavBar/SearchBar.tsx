import { css } from '@emotion/react';
import { PropsWithChildren, useMemo } from 'react';

import SvgIcon from '@/components/SvgIcon';

interface searchBarProps extends PropsWithChildren {
    placeholder?: string;
}

const SearchBar = ({ placeholder = `Try "Burger King"` }: searchBarProps) => {
    const styles = useMemo(
        () => css`
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            align-items: center;
            margin: 0 20px;
            padding: 0 20px;

            display: flex;
            border: 1px solid #e9e9ea;
            border-radius: 36px;
            background: #eceef2;
            overflow: hidden;
            .search-icon {
                font-weight: 600;
                transform: translateY(1.5px);
            }
            .nav-searchbar {
                /* width: 316px; */
                flex-grow: 1;

                height: 40px;
                background: inherit;

                border: 1px solid #e9e9ea;
                /* width: 100%; */
                padding: 16px 10px;

                &:focus {
                    outline: none;
                }

                &::placeholder {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15.5px;
                    line-height: 140%;
                    /* or 22px */

                    letter-spacing: 0.4px;

                    color: #8f9396;
                }
            }
        `,
        []
    );
    return (
        <div css={styles}>
            <SvgIcon className='search-icon' name='search' width={25} height={25} />
            <input type='text' placeholder={placeholder} className='nav-searchbar' />
        </div>
    );
};
export default SearchBar;
