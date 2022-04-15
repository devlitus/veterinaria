import { useEffect, useState } from 'react';
import { useForm } from '../hooks/userForm';
import { Error } from './Error';
import { List } from './List';
let listTotal = [];
const initState = { pet: '', owner: '', email: '', date: '', symptom: '' };
export const Form = () => {
  const [values, handleInputChange, reset, handleInputUpdate] = useForm(initState);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState({});
  const [isError, setIsError] = useState(false);
  const { pet, owner, email, date, symptom } = values;
  useEffect(() => {
    if (edit) {
      handleInputUpdate(update);
    }
  }, [update]);
  const handleSubmit = (e) => {
    e.preventDefault();
    (Object.values(values).some(v => !v)) ? setIsError(true) : setIsError(false);
    if (isError) {
      values.id = Date.now();
      listTotal = [...listTotal, values];
      localStorage.setItem('list', JSON.stringify(listTotal));
      reset();
    } else {
      setUpdate(values);
      handleInputUpdate(values);
      setEdit(false);
      reset();
      // console.log(edit);
    }
  };
  return (
    <div className='flex justify-between '>
      <form onSubmit={handleSubmit}>
        <h1 className='text-5xl mb-5'>Formulario</h1>
        {isError && <Error />}
        <div className='flex flex-col mb-5'>
          <label className='text-4lg font-semibold' htmlFor='pet'>Nombre de la mascota</label>
          <input className='border-2 rounded-md' type='text' name='pet' value={pet} onChange={handleInputChange} />
        </div>
        <div className='flex flex-col mb-5'>
          <label className='font-semibold' htmlFor='owner'>Nombre del dueño</label>
          <input className='border-2 rounded-md' type='text' name='owner' value={owner} onChange={handleInputChange} />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='email'>Correo electrónico</label>
          <input className='border-2 rounded-md' type='text' name='email' value={email} onChange={handleInputChange} />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='date'>Fecha de la consulta</label>
          <input className='border-2 rounded-md' type='date' name='date' id='date' value={date} onChange={handleInputChange} />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='symptom'>Síntomas</label>
          <textarea className='border-2 rounded-md' name='symptom' id='symptom' value={symptom} cols='30' rows='5' onChange={handleInputChange} />
        </div>
        <button className='bg-indigo-600 shadow-md font-black text-white p-3 rounded-md w-full mt-5 hover:bg-indigo-400' type='submit'>{!edit ? 'Enviar' : 'Editar'}</button>
      </form>
      <div>
        <List list={listTotal} setEdit={setEdit} update={update} setUpdate={setUpdate} />
      </div>
    </div>
  );
};
