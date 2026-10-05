export const makeWhatsAppUrl = (phone, message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
