import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Main from "../components/Main";

export const metadata = {
    title: "Broodl - Dashboard",
};
export default function DasboardPage(){
    const isAuthenticated = false;
    let children;

    !isAuthenticated? children = (<Login/>) : children = (<Dashboard/>) 
    return(
        <Main>
            {children}
        </Main>
    )
}