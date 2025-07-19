import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";



const App = dynamic(() => import("@/app/admin/app"), ); //{ ssr: false}

const AdminPage = async () => {

    if (!(await isAdmin())) {
        redirect("/");
    }

    return (
        <App />
    );
};
 
export default AdminPage;