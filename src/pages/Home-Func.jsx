import Tabela from "../components/Tabela"

export default function HomeFunc() {
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <Tabela data={[{id: 1, produto: 'Produto A', quantidade: 10}, {id: 2, produto: 'Produto B', quantidade: 5}]} />
            </div>
        </>
    )
}
