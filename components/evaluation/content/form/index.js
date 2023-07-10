import dynamic from "next/dynamic";
const TemporaryDrawer = dynamic(() => import('./Form'), { loading: () => <div></div>, ssr: true });
export default TemporaryDrawer;