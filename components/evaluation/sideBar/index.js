import dynamic from "next/dynamic";
const SideBar = dynamic(() => import('./SideBar'), { loading: () => <div></div>, ssr: true });
export default SideBar;