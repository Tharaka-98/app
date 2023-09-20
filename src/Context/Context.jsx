import { createContext } from "react";

// set the default
const GlobalContext = createContext({
    headerHeight: 0,
    setHeaderHeight: () => { },
    footerHeight: 0,
    setFooterHeight: () => { },
    isModelOpen: false,
    setIsModalOpen: () => { },
    customModal: {
        el: null,
        isOpen: false,
    },
    setCustomModal: () => { }
});

export default GlobalContext;