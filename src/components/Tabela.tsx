import styles from './Tabela.module.css';
import { useState, useEffect } from 'react';
import Modal from './Modal';
const url = "https://warren-transactions-api.herokuapp.com/api/transactions";

type Props = {}
type Transactions = {
    amount:number;
    date:string;
    description:string;
    from:string;
    id:string;
    status:string;
    title:string;
    to:string;
}

const Tabela = ({ queryTitle, queryStatus }: { queryTitle:string|null, queryStatus:string|null}) => {
    
    const [dados, setDados] = useState<Transactions[]>([]);
    const [showModal, isShowModal] = useState<boolean>(false);
    const [modalAberto, setModalAberto] = useState<string>("");
    var apoio:Transactions[] = ([]);
    
    useEffect(() => {
        async function api(): Promise<void> {
            const data = await fetch(url, {
                method: "GET"
            });
            const jsonData = await data.json();
            jsonData.map((data: Transactions) => {
                apoio.push(data);
                setDados(apoio);
            });
            apoio = [];
        }
        api();
        }, []);//requisição de dados

    function handleShowModal({ id }: { id: string; }): void {
        setModalAberto(id);
        isShowModal(true);
        const fundoEscuro = document.getElementById("fundo_escuro");
        const modal = document.getElementById("modal");
        fundoEscuro?.setAttribute("Style", "display: block;");
        modal?.setAttribute("Style", "display: flex;");
    }

    function formatCurrency(number: number) {
        return number.toLocaleString('pt-br', { minimumFractionDigits: 2 }); //transforma numero qualquer em número em reais, mas sem o R$
    }

    function returnElements(value: Transactions): JSX.Element {
        return (
            <tr className={styles.linha} key={value.id} onClick={() => handleShowModal({ id: value.id })}>
                <td>{value.title}</td>
                <td>{value.description}</td>
                {(value.status === "created") && <td>Solicitada</td>}
                {(value.status === "processing") && <td>Processando</td>}
                {(value.status === "processed") && <td>Concluída</td>}
                <td>
                    <div>R$: </div>
                    <div>{formatCurrency(value.amount)}</div>
                </td>
            </tr>
        );
    }

    function removeloader(): void {
        let loader = document.getElementById("loader");
        loader?.setAttribute("Style", "display: none;");
    }

    function convertStatus (status:string|null): "created" | "processing" | "processed" | undefined{
        if(status==="Solicitada"){
            return "created";
        }
        if(status==="Processando"){
            return "processing";
        }
        if(status==="Concluída"){
            return "processed";
        }
    }
    const Status = convertStatus(queryStatus);//converte texto inglês para português
    
    return (<>
        <div className={styles.table_wrapper}>
            <table className={styles.table}>
                <tbody className={styles.tbl_content}>                        
                    {dados?.map((value: Transactions) => {
                        removeloader();
                        if (queryTitle === undefined || queryTitle === "" || queryTitle === null) {
                            return returnElements(value); //o primeiro render passa por aqui
                        }
                        if (value.title.includes(queryTitle) && queryStatus == "Status") {
                            return returnElements(value); //busca somente pelo titulo
                        }
                        if (value.title.includes(queryTitle) && value.status === Status) {
                            return returnElements(value); //renderiza de acordo com pesquisa pelo titulo e status
                        }
                    })}
                </tbody>
            </table>
        </div>
        {<div id="loader" className={styles.loader}></div>}
        {showModal && <Modal data={dados} isOpen={modalAberto}/>}
        </>
    )        
}

export default Tabela;