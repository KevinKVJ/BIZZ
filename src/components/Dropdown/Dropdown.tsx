import { css } from '@emotion/react';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { IDropdownProps } from './DropdownType';

const Dropdown = ({ children, activeSwitch, onClose = () => null }: IDropdownProps) => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [transitionActive, setTransitionActive] = useState(false);
    const ddwrapper = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        setDropdownActive(activeSwitch);
    }, [activeSwitch]);

    useEffect(() => {
        activeSwitch && setTransitionActive(true);
        function assertIsNode(e: EventTarget | null): asserts e is Node {
            if (!e || !('nodeType' in e)) {
                throw new Error(`Node expected`);
            }
        }
        const closeEventFunc = (e: MouseEvent) => {
            assertIsNode(e.target);
            !ddwrapper.current?.contains(e.target) && setTransitionActive(false);
        };
        activeSwitch && document.addEventListener('click', closeEventFunc);
        return () => {
            document.removeEventListener('click', closeEventFunc);
        };
    }, [activeSwitch]);

    const dropdownWrapperStyle = useMemo(
        () => css`
            position: relative;
            opacity: ${transitionActive ? '1' : '0'};
            transition: opacity 0.2s ease-in-out;
        `,
        [transitionActive]
    );
    const dropdownStyle = useMemo(
        () => css`
            position: absolute;
            top: 30px;

            border-radius: 3px;
            box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.24),
                0 6px 12px 0 rgba(0, 0, 0, 0.16), 0 9px 18px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            height: 300px;
            background-color: red;
        `,
        []
    );
    return dropdownActive ? (
        <div
            css={dropdownWrapperStyle}
            ref={ddwrapper}
            onTransitionEnd={() => !transitionActive && onClose()}
        >
            <div css={dropdownStyle}>{children}</div>
        </div>
    ) : null;
};

export default Dropdown;
