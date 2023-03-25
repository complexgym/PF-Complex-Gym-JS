const regexDay = /^(0?[1-9]|[12][0-9]|3[01])$/;
const regexMonth = /^(0?[1-9]|1[012])$/;
const regexYear = /^\d{4}$/;
const regexHour = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

export default function ValidateCalendar(input){
  let errors = {};

  if(!input.day){
    errors.day = "La clase requiere un dia para crearse"
  }else if(!regexDay.test(input.day)){
    errors.day = "El dia ingresado no es válido"
  }

   else if(!input.month){
    errors.month = "La clase requiere un mes para crearse"
  }else if(!regexMonth.test(input.month)){
    errors.month = "El mes ingresado no es válido"
  }

  else if(!input.year){
    errors.year = "La clase requiere un año para crearse"
  }else if(!regexYear.test(input.year)){
    errors.year = "El año ingresado no es válido"
  }

  else if(!input.hour){
    errors.hour = "La clase requiere una hora para crearse"
  }else if(!regexHour.test(input.hour)){
    errors.hour = "La hora ingresada no es válida, ejemplo: 00:00"
  }

  else if (!input.class){
    errors.class = "Por favor seleccione una actividad"
  }

  return errors;
}