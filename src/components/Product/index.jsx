import { useContext } from 'react';
import { Context } from '../../context';
import Button from "../Button";
import star from "../../icons/star.svg";

import {
    ProductWrapper,
    LabelContainer,
    LabelTop,
    LabelSales,
    LabelSalesTitle,
    Info,
    Logo,
    Price,
    PriceSymbol,
    List,
    ListItem
} from './style';

const Product = ({title, amount, tag, action, img, advantages}) => {
    const { text: {sale, buy, uah} } = useContext(Context);
    return (
        <ProductWrapper>
            <LabelContainer>
                {tag && <LabelTop>{tag}</LabelTop>}
                {action && (
                    <LabelSales>
                        <LabelSalesTitle icon={star}>{sale}</LabelSalesTitle>
                        {action}
                    </LabelSales>
                )}
            </LabelContainer>

            <Info>
                <Logo src={img} alt={title} />
                <Price>
                    {amount}
                    <PriceSymbol>{uah}</PriceSymbol>
                </Price>
            </Info>
            <List>
                {advantages.map(list => <ListItem key={list}>{list}</ListItem>)}
            </List>
            <Button>{buy}</Button>
        </ProductWrapper>
    )
}

export default Product;