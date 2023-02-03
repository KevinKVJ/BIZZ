import {
    CSSProperties,
    FC,
    PropsWithChildren,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

/* css Module Styles for this comp */
import dStyle from './dropdown.module.scss';

/* PropTypes */
interface IDropdown extends PropsWithChildren {
    activeSwitch: boolean /* External switch variable */;
    onClose?: () => void /* Function Executed when dropdown close */;
    minHeight?: string | number /* min height of dropdown */;
    minWidth?: string | number /* min width of dropdown */;
}

const Dropdown: FC<IDropdown> = ({
    activeSwitch,
    minHeight = 300,
    minWidth = 300,
    onClose = () => null,
    children,
}) => {
    /* True if Comp is mounted */
    const [mountSwitch, setMountSwitch] = useState(false);

    /* True if Comp is actually active */
    const [dropdownActive, setDropdownActive] = useState(false);

    /* Dynamic ZIndex for dropdown Comp */
    const [dynamicZIndex, setDynamicZIndex] = useState(0);

    /* Ref of Dropdown Wrapper div element */
    const ddwrapper = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        /* Let it be mounted with 1000 z-index before Comp actually switch on */
        if (activeSwitch) {
            setMountSwitch(true);
            setDynamicZIndex(1000);
        }
    }, [activeSwitch]);

    useEffect(() => {
        if (activeSwitch) {
            /* After the first render, set dropdownActive with true to switch on */
            setDropdownActive(true);
        } else {
            /* When activeSwitch is false, we should close the Comp */
            dropdownActive && setDropdownActive(false);
        }
    }, [activeSwitch]);

    useEffect(() => {
        /* Add document mouse click event for closing the Comp */
        function assertIsNode(e: EventTarget | null): asserts e is Node {
            if (!e || !('nodeType' in e)) {
                throw new Error(`Node expected`);
            }
        }
        const closeEventFunc = (e: MouseEvent) => {
            assertIsNode(e.target);
            if (!ddwrapper.current?.contains(e.target)) {
                setDropdownActive(false);
            }
        };
        activeSwitch && document.addEventListener('click', closeEventFunc, true);
        return () => {
            /* Clean event when the Comp re-render */
            document.removeEventListener('click', closeEventFunc);
        };
    }, [activeSwitch]);

    /* Dynamic style for open and close */
    const dropdownWrapperStyle = useMemo(
        () =>
            ({
                '--ddWOpacity': dropdownActive ? 1 : 0,
                '--ddMinWidth': `${minWidth}px`,
                '--ddMinHeight': `${minHeight}px`,
                '--ddWZIndex': dynamicZIndex,
            } as CSSProperties),
        [dropdownActive, dynamicZIndex]
    );

    /* handleClose function when transition is end */
    const handleClose = () => {
        if (!dropdownActive) {
            setMountSwitch(false);
            setDynamicZIndex(0);
            onClose();
        }
    };

    return mountSwitch ? (
        <div
            ref={ddwrapper}
            className={dStyle.dropdownWrapper}
            style={dropdownWrapperStyle}
            onTransitionEnd={handleClose}
        >
            <div className={dStyle.dropdown}>{children}</div>
        </div>
    ) : null;
};

// Dropdown.defaultProps = {
//     children: <div></div>,
// };

export default Dropdown;
