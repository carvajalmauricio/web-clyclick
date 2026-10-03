export const ODONTOCLICK_WHATSAPP_NUMBER = "593963186252";

export const ODONTOCLICK_CONTACT_MESSAGE =
  "Hola, vi Odontoclick en la web. Quiero conocer la plataforma y solicitar mi prueba gratuita de 7 días.";

export function odontoclickWa(message = ODONTOCLICK_CONTACT_MESSAGE) {
  return `https://wa.me/${ODONTOCLICK_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
