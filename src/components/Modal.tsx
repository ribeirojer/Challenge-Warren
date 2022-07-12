import styles from "./Modal.module.css"

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
const Modalteste = ({ data, isOpen }: {data:Transactions[], isOpen:string}) => {
    
    var index:number = 0;
    
    for(let i = 0; i < 21; i++){
        if(data[i].id===isOpen){
            index=i;
        }
    }//verifica quais dados exibir

    function handleCloseModal(): void {
        const fundoEscuro = document.getElementById("fundo_escuro");
        const modal = document.getElementById("modal");
        fundoEscuro?.setAttribute("Style", "Display: none;");
        modal?.setAttribute("Style", "Display: none;");
    }

    function formatCurrency(number: number): string {
        return number.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }//formata numero retornando COM o R$

    return (
        <>
        <div id="modal" className={styles.wrapper}>
            <div onClick={handleCloseModal} className={styles.close_button}>&times;</div>
            <div className={styles.modal_header}>{data[index].title}</div>
            <div className={styles.progress_bar_external}>
                {(data[index].status==="created") && <div className={styles.progress_bar_interna_small}></div>}
                {(data[index].status==="processing") && <div className={styles.progress_bar_interna_medium}></div>}
                {(data[index].status==="processed") && <div className={styles.progress_bar_interna_full}></div>}
            </div>
            {(data[index].status==="created") && <div className={styles.status}>Solicitada</div>}
            {(data[index].status==="processing") && <div className={styles.status}>Processando</div>}
            {(data[index].status==="processed") && <div className={styles.status}>Concluída</div>}
            <div>
                <span>Transferência:</span>
                <span className={styles.data_amount}>{formatCurrency(data[index].amount)}</span>
            </div>
            <div className={styles.modal__margin}>
                <span>De: </span>
                <span className={styles.data_from_and_to}>{data[index].from}</span>
            </div>
            <div>
                <span>Para: </span>
                <span className={styles.data_from_and_to}>{data[index].to}</span>
            </div>
        </div>
        <div id="fundo_escuro" onClick={handleCloseModal} className={styles.dark_background}></div>
        </>
    )
}

export default Modalteste;