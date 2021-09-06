import React, { useContext } from 'react';
import { Context } from '../../context';
import {
    FilterWrapper,
    FilterTitle,
    FilterDescription,
    FilterForm,
    FilterInput,
    FilterSelect,
    FilterButton
} from './style';

const selectStyle = {
    valueContainer: base => ({
        ...base,
        padding: '0px 12px',
        fontSize: 16,
        cursor: 'pointer',
    }),
    control: base => ({
        ...base,
        borderRadius: 4,
        borderColor: '#D2D9E0',
        minHeight: 50,
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '22px',
            right: '14px',
            width: '0',
            height: '0',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid black',
            zIndex: '1'
        },
    }),
    menuList: base => ({
        ...base,
        padding: '0',
        textAlign: 'left',
    }),
    option: base => ({
        ...base,
        fontSize: 16,
        padding: '8px 12px',
        cursor: 'pointer',
    }),
    indicatorSeparator: base => ({
        ...base,
        display: 'none',
    }),
    dropdownIndicator: base => ({
        ...base,
        opacity: '0',
    }),
};

const Filter = () => {
    const {
        options,
        handleSubmit,
        text: {title, description, input, select, choice},
    } = useContext(Context);

    return (
        <FilterWrapper>
            <FilterTitle>{title}</FilterTitle>
            <FilterDescription>{description}</FilterDescription>
            <FilterForm onSubmit={handleSubmit}>
                <FilterInput
                    name="amount"
                    type="number"
                    placeholder={input}
                />
                <FilterSelect
                    isClearable
                    isSearchable={false}
                    name="category"
                    styles={selectStyle}
                    options={options}
                    placeholder={select}
                />
                <FilterButton type="submit">{choice}</FilterButton>
            </FilterForm>
        </FilterWrapper>
    );
}

export default Filter;
