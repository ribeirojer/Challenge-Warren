import Styles from "./HeaderTable.module.css";

type Props = {}

const HeaderTable = (props: Props) => {
  return (
    <div className={Styles.table_wrapper}>
        <table className={Styles.table_header}>
            <thead>
                <tr className={Styles.table_header__line}>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Valor</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default HeaderTable;