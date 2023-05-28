const rootEle = document.getElementById('root');

const root = ReactDOM.createRoot(rootEle);
const App = ({children}) => {
    return (
        <main className="main">
            <h1>This is the main app</h1>
            {children}
        </main>
    );
}

function List(){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

root.render(
    <>
        <App>
            <h2>My larning Path</h2>
            <List/>
        </App>
    </>
)