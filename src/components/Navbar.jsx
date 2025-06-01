import { FaTruck, FaHome, FaBoxes } from 'react-icons/fa'
import { IoPerson } from "react-icons/io5"
import { FaCartShopping, FaMoneyCheckDollar } from "react-icons/fa6"
import Button from "./ButtonNav.jsx"

export default function Navbar(){
    return(
            <div className="fixed w-24 text-center text-white bg-[#06630b] h-full flex flex-col">
                <Button icon={<FaHome />} text={"Home"} link={"/"}/>
                <Button icon={<FaBoxes />} text={"Estoque"} link={"/estoque"}/>
                <Button icon={<IoPerson />} text={"Funcionários"} link={"/funcionario"}/>
                <Button icon={<FaMoneyCheckDollar />} text={"Pagamentos"} link={"/pagamento"}/>
                <Button icon={<FaCartShopping />} text={"Pedidos"} link={"/pedido"}/>
                <Button icon={<FaTruck />} text={"Entregas"} link={"/entrega"}/>       
            </div>
    )
}