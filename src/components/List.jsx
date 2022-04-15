import { useEffect, useState } from 'react';
import { Patien } from './Pactien';

export const List = ({ list, setEdit, update, setUpdate }) => {
  const [newList, setNewList] = useState(list);

  useEffect(() => {
    setNewList(list);
  }, [list]);
  const handleDelete = (id) => {
    setNewList(newList.filter(item => item.id !== id));
  };
  return (
    <>
      <h1 className='text-5xl'>Listo de paciente</h1>
      {
        newList.map(p => <Patien key={p.id} patien={p} setEdit={setEdit} update={update} setUpdate={setUpdate} handleDelete={handleDelete} />)
      }
    </>
  );
};
