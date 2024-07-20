import { Card, Header } from "./shared/ui"

function App() {

    return (
        <>
            <Header />
            <div style={{ display: "flex", gap: '2rem', paddingRight: '3rem', paddingLeft: '3rem' }}>
                <Card name="Тестирование" />
                <Card name="Тестирование" />
                <Card name="Тестирование" />
            </div>

        </>
    )
}

export default App
