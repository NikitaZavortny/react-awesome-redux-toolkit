import { useDispatch, useSelector } from "react-redux";
import {clicksSlice} from "../../state-management/redux-toolkit/store/reducers/clicksSlice";
import HomeFooter from "../awesome-components/footers/footer-home";
import Home from "../awesome-templates/home-template";
import CurveTransition from "../awesome-components/transitions/curve-transition";
import Clicker from "../../state-management/management-components/clicker/Clicker";
import Users from "../../state-management/management-components/user/users";

function ReduxToolkit() {
    return (
        <div className="text-white">
            <Home>
                <CurveTransition backcolor = "red">
                    <h1>This was realised with redux-toolkit</h1>
                </CurveTransition>

                <section class="black section-transition">
                    <Clicker/>
                    <Users/>
                </section>
                <HomeFooter />
            </Home>
        </div>
    );
}

export default ReduxToolkit;