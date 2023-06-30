import work_1 from '../../assets/works/work_1.png';
import work_2 from '../../assets/works/work_2.png';
import work_3 from '../../assets/works/work_3.png';
import work_4 from '../../assets/works/work_4.png';
import work_5 from '../../assets/works/work_5.png';
import work_6 from '../../assets/works/work_6.png';
import work_7 from '../../assets/works/work_7.png';
import work_8 from '../../assets/works/work_8.png';
import work_9 from '../../assets/works/work_9.png';
import work_10 from '../../assets/works/work_10.png';

const INITIAL_STATE = [
    {
        id: 0,
        src: work_1,
        title: 'Item # 1',
        price: '216',
        size: '18,5x18см',
        weight: '2.4',
        year: '2020',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 1,
        src: work_2,
        title: 'Item #2',
        price: '250',
        size: '23x19x15сm',
        weight: '1.6',
        year: '2021',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 2,
        src: work_3,
        title: 'Item #3',
        price: '160',
        size: '17,1x16,5x15cm',
        weight: '3.6',
        year: '2020',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 3,
        src: work_4,
        title: 'Item #4',
        price: '260',
        size: '22 x 20,5 x 20см',
        weight: '1.8',
        year: '2022',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 4,
        src: work_5,
        title: 'Item #5',
        price: '160',
        size: '17,1x16,5x15cm',
        weight: '2',
        year: '2019',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 5,
        src: work_6,
        title: 'Item #6',
        price: '250',
        size: '23x19x15сm',
        weight: '1',
        year: '2020',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 6,
        src: work_7,
        title: 'Item #7',
        price: '260',
        size: '22 x 20,5 x 20см',
        weight: '0.6',
        year: '2021',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 7,
        src: work_8,
        title: 'Item #8',
        price: '216',
        size: '18,5x18см',
        weight: '2.9',
        year: '2022',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 8,
        src: work_9,
        title: 'Item #9',
        price: '160',
        size: '17,1x16,5x15cm',
        weight: '1.5',
        year: '2021',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
    {
        id: 9,
        src: work_10,
        title: 'Item #10',
        price: '250',
        size: '23x19x15сm',
        weight: '3.2',
        year: '2020',
        description: ' Сeramic vase, two-sided. For fresh flowers and dried flowers. Еxists in one instance'
    },
];

const worksReducer = ( state = INITIAL_STATE, action) => {

    switch (action.type) {

        default: {
            return state
        }

    }
}

export default worksReducer;