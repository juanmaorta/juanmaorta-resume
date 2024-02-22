import { createContext } from 'react';

// import JSON data from data.json
import data from './data.json';
const { contact: contactInfo, personal: personalInfo, professional: professionalInfo } = data;

export const PersonalDataContext = createContext(personalInfo);
export const ContactDataContext = createContext(contactInfo);
export const ProfessionalDataContext = createContext(professionalInfo); 