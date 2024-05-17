import NavBar from "../components/NavBar.tsx";
import Calculator from "../pages/calculator/Calculator.tsx";

function HomeLayout() {
    return (
        <>
            <NavBar/>
            <div className="w-full h-full flex justify-center items-center flex-row text-center border-b-2">
                <Calculator/>

            </div>
            <footer>Welcome to the Home page!</footer>
        </>
    );
}

export default HomeLayout;