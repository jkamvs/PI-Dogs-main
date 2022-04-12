import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import Crear_Raza from "./index";
import store from '../../redux/store/index'

describe('<Crear_Raza/>', () => {
    const dato = () => {
        const {container} = render(<Provider store={store}>
            <BrowserRouter>
                <Crear_Raza/>
            </BrowserRouter>

        </Provider>)
        return container
    };
    it('El form debe tener un label que diga: "Name:"', () => {
        const element = dato().querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Name:');
    });
    it('El form debe tener un input con name "name" y type "text"', () => {
        const element = dato().querySelectorAll('input')[0]
        expect(element.type).toBe('text');
        expect(element.name).toBe('name');
    });
    it('El form debe tener un label que diga: "Altura:"', () => {
        const element = dato().querySelectorAll('label')[1]
        expect(element.innerHTML).toBe('Altura:');
    });
    it('El form debe tener un input con name "minimoAltura" y type "number"', () => {
        const element = dato().querySelectorAll('input')[1]
        expect(element.type).toBe('number');
        expect(element.name).toBe('minimoAltura');
    });
    it('El form debe tener un input con name "maximoAltura" y type "number"', () => {
        const element = dato().querySelectorAll('input')[2]
        expect(element.type).toBe('number');
        expect(element.name).toBe('maximoAltura');
    });
    it('El form debe tener un label que diga: "Peso:"', () => {
        const element = dato().querySelectorAll('label')[2]
        expect(element.innerHTML).toBe('Peso:');
    });
    it('El form debe tener un input con name "minimoPeso" y type "number"', () => {
        const element = dato().querySelectorAll('input')[3]
        expect(element.type).toBe('number');
        expect(element.name).toBe('minimoPeso');
    });
    it('El form debe tener un input con name "maximoPeso" y type "number"', () => {
        const element = dato().querySelectorAll('input')[4]
        expect(element.type).toBe('number');
        expect(element.name).toBe('maximoPeso');
    });
    it('El form debe tener un label que diga: "Años de vida:"', () => {
        const element = dato().querySelectorAll('label')[3]
        expect(element.innerHTML).toBe('Años de vida:');
    });
    it('El form debe tener un input con name "minimoLifeSpan" y type "number"', () => {
        const element = dato().querySelectorAll('input')[5]
        expect(element.type).toBe('number');
        expect(element.name).toBe('minimoLifeSpan');
    });
    it('El form debe tener un input con name "maximoLifeSpan" y type "number"', () => {
        const element = dato().querySelectorAll('input')[6]
        expect(element.type).toBe('number');
        expect(element.name).toBe('maximoLifeSpan');
    });
});
