import { useEffect, useState } from 'react';

export const Patien = ({ patien, setEdit, update, setUpdate, handleDelete }) => {
  const [patienUpdate, setPatienUpdate] = useState(patien);

  const { pet, owner, email, date, symptom, id } = patienUpdate;
  useEffect(() => {
    if (Object.values(update).some(v => v !== '') && update.id === patien.id) {
      setPatienUpdate(update);
    }
  }, [update]);

  const handleEdit = () => {
    setEdit(true);
    setUpdate({ ...patien });
    // console.log('edit');
  };

  return (
    <div className='border-emerald-100 shadow-lg rounded-md'>
      <div>
        <p className='m-3'>Mascota: <span>{pet}</span></p>
        <p className='m-3'>Propietario: <span>{owner}</span></p>
        <p className='m-3'>Correo electrónico <span>{email}</span></p>
        <p className='m-3'>Fehca: <span>{date}</span></p>
        <p className='m-3'>Síntomas: <span>{symptom}</span></p>
        <div className='flex justify-around'>
          <button className='m-5 w-full font-black bg-indigo-600 shadow-md text-white p-3 rounded-md self-stretch mt-5 hover:bg-indigo-400' onClick={handleEdit}>editar</button>
          <button className='m-5 w-full font-black bg-red-600 shadow-md text-white p-3 rounded-md self-stretch mt-5 hover:bg-red-400' onClick={() => handleDelete(id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};
