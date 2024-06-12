import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { DraftPatient, Patient } from './types';
type PatientState = {
  patients: Patient[];
  activeId: string;
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
  getPatientById: (id: Patient['id']) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient) => {
  return { ...patient, id: uuid() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set, _get) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },
        getPatientById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },

        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { ...data, id: state.activeId }
                : patient
            ),
            activeId: '',
          }));
        },
      }),
      {
        name: 'patient-storage',
      }
    )
  )
);
