import dynamic from "next/dynamic";
const FormUpdate = dynamic(() => import('./FormUpdate'), { loading: () => <div></div>, ssr: true });
export default FormUpdate;