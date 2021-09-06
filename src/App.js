import Filter from './containers/Filter';
import Result from './containers/Results';
import Provider, { Context }  from './context';


const App = () => (
    <Provider>
        <Context.Consumer>
            {() => (
                <div className="App">
                    <Filter />
                    <Result />
                </div>
            )}
        </Context.Consumer>
    </Provider>
);

export default App;
