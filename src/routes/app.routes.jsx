import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home"
import { SignInPatient } from '../pages/SignInPatient';
import { SignUpPatient } from '../pages/SignUpPatient';
import { UserPatientProfile } from '../pages/UserPatientProfile';
import { UserPatientProfileInfo } from '../pages/UserPatientProfileInfo';
import { UserPatientProfileCredentials } from '../pages/UserPatientProfileCredentials';
import { UserTherapistProfile } from '../pages/UserTherapistProfile';
import { UserTherapistProfileInfo } from '../pages/UserTherapistProfileInfo';
import { UserTherapistProfileCredentials } from '../pages/UserTherapistProfileCredentials';
import { SignUpTerapeuta } from '../pages/SignUpTerapeuta';
import { UserPassword }from '../pages/UserPassword';
import { Contato }from '../pages/Contato';
import {Sobre} from '../pages/Sobre';
import { STerapeuta } from '../pages/STerapeuta';
import { SPaciente } from '../pages/SPaciente';



export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signinpatient" element={<SignInPatient />} />
            <Route path="/signuppatient" element={<SignUpPatient />} />
            <Route path="/userpatientprofile" element={<UserPatientProfile />} />
            <Route path="/userpatientprofileinfo" element={<UserPatientProfileInfo />} />
            <Route path="/userpatientprofilecredentials" element={<UserPatientProfileCredentials />} />
            <Route path="/usertherapistprofile" element={<UserTherapistProfile/>} />
            <Route path="/usertherapistprofileinfo" element={<UserTherapistProfileInfo/>} />
            <Route path="/usertherapistprofilecredentials" element={<UserTherapistProfileCredentials/>} />
            <Route path ="/singupterapeuta" element={<SignUpTerapeuta/>} />
            <Route path="/userpassword" element={<UserPassword/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path ="/STerapeuta" element={<STerapeuta/>} />
            <Route path ="/SPaciente" element={<SPaciente/>} />
            
            
        </Routes>
    );
}
