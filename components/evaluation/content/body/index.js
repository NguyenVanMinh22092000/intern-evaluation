import dynamic from "next/dynamic";
const Content = dynamic(() => import('./Content'), { loading: () => <div></div>, ssr: true });
export default Content;