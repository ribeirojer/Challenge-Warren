import styles from './Filter.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

type Props = {}

const Filter = (props: Props) => {
  const [search, setSearch] = useState<string>("")
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (!search)
      return;

    let comboBox = document.getElementById("combobox") as HTMLSelectElement | null;;
    let status = comboBox?.options[comboBox.selectedIndex].text;

    navigate(`/search?q=${search}&s=${status}`);
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" spellCheck="false" className={styles.form__field} placeholder="input" id='input'
      onChange={(e)=> setSearch(e.target.value)} value={search}/>
      <label htmlFor="Pesquise pelo título" className={styles.form__label}>Pesquise pelo título</label>
      <div className={styles.form_select}>
        <select id='combobox'>
          <option value="valor1" >Status</option>
          <option value="valor3">Solicitada</option>
          <option value="valor2">Processando</option>
          <option value="valor4">Concluída</option>
        </select>
      </div>
    </form>
  )
}

export default Filter;