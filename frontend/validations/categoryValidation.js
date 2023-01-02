import * as yup from 'yup';


const categoryValidation = yup.object({
    name: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales")
})




export default categoryValidation