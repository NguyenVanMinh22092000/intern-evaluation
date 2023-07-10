import dynamic from "next/dynamic";
const Layout = dynamic(() => import('./Layout'), { loading: () => <div></div>, ssr: true });
export default Layout;