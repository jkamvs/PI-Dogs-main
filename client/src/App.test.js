import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import App from "./App";
import store from './redux/store/index'

describe('<Crear_Raza/>', () => {

    it('Saludo', () => {
     render(<Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>

        </Provider>)

    });

});
