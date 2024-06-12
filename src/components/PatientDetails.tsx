import { toast } from 'react-toastify';
import { usePatientStore } from '../store';
import { Patient } from '../types';
import PatientDetailItem from './PatientDetailItem';

type PatientDetailsProps = {
  patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error('Paciente Eliminado Correctamente');
  };

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg'>
      <PatientDetailItem label={'ID'} info={patient.id} />
      <PatientDetailItem label={'Nombre'} info={patient.name} />
      <PatientDetailItem label={'Propietario'} info={patient.caretaker} />
      <PatientDetailItem label={'Fecha Alta'} info={patient.date.toString()} />
      <PatientDetailItem label={'Sintomas'} info={patient.symptoms} />
      <div className='flex flex-col lg:flex-row  gap-3 justify-between mt-10'>
        <button
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase'
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase'
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
