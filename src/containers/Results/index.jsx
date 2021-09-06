import { Context } from '../../context';
import { useContext } from 'react';
import Product from '../../components/Product';
import { ResultWrapper, ResultCount, ResultContainer } from './style';

const Result = () => {
    const { products, text: {resultChoice, resultProduct, notFound} } = useContext(Context);
    return (
        <ResultWrapper>
            <ResultCount active={products.length}>
                {products.length
                    ? `${resultChoice} ${products.length} ${resultProduct}`
                    : notFound
                }
            </ResultCount>
            <ResultContainer>
                {products.map(item => <Product key={item.id} {...item} /> )}
            </ResultContainer>
        </ResultWrapper>
    );
}

export default Result;
