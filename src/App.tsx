import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals  from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import useOrder from "./hooks/useOrder"

function App() {
    const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumos</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="px-5">
                    <h2 className="text-4xl font-black">Menú</h2>

                    <div className="space-y-3 mt-10">
                        {menuItems.map(item => (
                            <MenuItem 
                                key={item.id}
                                item={item}
                                addItem={addItem}
                            />
                        ))}
                    </div>
                </div>

                <div className="border border-dash border-slate-300 p-5 rounded-lg space-y-10">
                    <h2 className="font-black text-4xl">Consumo</h2>
                    
                    {order.length === 0 ? (
                        <p className="text-center mt-20">La orden esta vacía</p>
                    ) : (
                        <>
                            <OrderContents 
                                order={order}
                                removeItem={removeItem}
                            />

                            <TipPercentageForm 
                                tip={tip}
                                setTip={setTip}
                            />

                            <OrderTotals 
                                order={order}
                                tip={tip}
                                placeOrder={placeOrder}
                            />
                        </>
                    )}
                </div>
            </main>
        </>
    )
}

export default App
