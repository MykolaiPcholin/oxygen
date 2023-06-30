import interior_1 from '../../assets/interiors/interior_1.png';
import interior_2 from '../../assets/interiors/interior_2.png';
import interior_3 from '../../assets/interiors/interior_3.png';
import interior_4 from '../../assets/interiors/interior_4.png';
import interior_5 from '../../assets/interiors/interior_5.png';
import interior_6 from '../../assets/interiors/interior_6.png';
import interior_7 from '../../assets/interiors/interior_7.png';
import interior_8 from '../../assets/interiors/interior_8.png';

const INITIAL_STATE = [
    {
        id: 0,
        src: interior_1,
        title: 'Vase #1',
    },
    {
        id: 1,
        src: interior_2,
        title: 'Vase #2',
    },
    {
        id: 2,
        src: interior_3,
        title: 'Vase #3',
    },
    {
        id: 3,
        src: interior_4,
        title: 'Vase #4',
    },
    {
        id: 4,
        src: interior_5,
        title: 'Vase #5',
    },
    {
        id: 5,
        src: interior_6,
        title: 'Vase #6',
    },
    {
        id: 6,
        src: interior_7,
        title: 'Vase #7',
    },
    {
        id: 7,
        src: interior_8,
        title: 'Vase #8',
    },
];


const interiorsReducer = ( state = INITIAL_STATE, action) => {

    switch (action.type) {

        default: {
            return state
        }

    }
}

export default interiorsReducer;