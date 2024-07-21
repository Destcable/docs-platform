import { Card, Header } from "./shared/ui"

function App() {

    return (
        <>
            <Header />
            <div 
                style={{ 
                    marginTop: '2rem',
                    display: 'grid', 
                    gap: '2rem', 
                    paddingRight: '3rem', 
                    paddingLeft: '3rem',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
                }}>
                <Card title="Тестирование" />
                <Card title="Тестирование" />
                <Card title="Тестирование" />
                <Card title="Тестирование" />
                <Card title="Тестирование" />
                <Card title="Тестирование" />
                
            </div>

        </>
    )
}

export default App
