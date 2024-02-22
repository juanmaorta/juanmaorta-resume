import { createContext } from 'react';
// import site config
import { commonConfig } from "./config/commonConfig";

// import JSON data from data.json
import data from './data.json';
const { contact: contactInfo, personal: personalInfo, professional: professionalInfo } = data;

export const PersonalDataContext = createContext(personalInfo);
export const ContactDataContext = createContext(contactInfo);
export const ProfessionalDataContext = createContext(professionalInfo);

export const SiteConfigContext = createContext(commonConfig);