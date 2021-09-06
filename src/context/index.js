import { createContext, useState } from 'react'
export const Context = createContext(true);

const data = [
    {
        id: 1,
        category: 'КБТ',
        title: 'Холодильник',
        amount: 5000,
        action: 'Миксер в подарок',
        tag: 'Лидер продаж',
        img: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png',
        advantages: ['Бесплатная доставка', 'Есть возможность взять в кредит', 'Гарантия 3 года']
    },
    {
        id: 2,
        category: 'КБТ',
        title: 'Микроволновка',
        amount: 2250,
        action: 'Книга рецептов в подарок',
        tag: null,
        img: 'https://cdn.iconscout.com/icon/free/png-512/bosch-282178.png',
        advantages: ['Доступно в разных цветах', 'Гарантия 3 года']
    },
    {
        id: 3,
        category: 'МБТ',
        title: 'Фен',
        amount: 750,
        action: null,
        tag: null,
        img: 'https://cdn.iconscout.com/icon/free/png-512/samsung-226432.png',
        advantages: ['Доступно в разных цветах', 'Гарантия 1 месяц']
    },
    {
        id: 4,
        category: 'МБТ',
        title: 'Электронные весы',
        amount: 1800,
        tag: 'Лучшая цена',
        action: null,
        img: 'https://cdn.iconscout.com/icon/free/png-512/bosch-282178.png',
        advantages: ['Бесплатная доставка по Киеву', 'Гарантия 1 год']
    },
];
const text = {
    title: 'Интернет магазин "В копеечку"',
    description: 'Подбирайте и оформляйте товары по выгодным ценам.',
    input: 'Сумма до, грн',
    select: 'Категория',
    choice: 'Подобрать',
    sale: 'Акция',
    buy: 'Купить',
    uah: '₴',
    resultChoice: 'Вам подобрано',
    resultProduct: 'продукта',
    notFound: 'Ничего не найдено',
}
const Provider = ({children}) => {
    const [ products, setProducts ] = useState(data);
    const categories = [...new Set(data.map(item => item.category))];
    let options = categories.map((label, value) => ({value, label}));

    const handleSubmit = e => {
        e.preventDefault();
        const {amount: { value: selectAmount }, category: { value: category }} = e.target;
        const selectCategory = options[category]?.label;

        let filterData = data.filter(item => item.amount >= selectAmount);
        if (selectCategory) filterData = filterData.filter(item => item.category === selectCategory);
        setProducts(filterData);
    }

    return (
        <Context.Provider value={{ text, products, options, handleSubmit }}>
            {children}
        </Context.Provider>
    )
};

export default Provider;