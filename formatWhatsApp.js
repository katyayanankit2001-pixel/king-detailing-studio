export function bookingMessage(form) {
  return `Hello King Detailing Studio, I would like to enquire about detailing.\n\nName: ${form.name}\nCar: ${form.carBrand} ${form.carModel}\nService: ${form.service}\nPreferred date: ${form.date || 'Flexible'}\nPreferred time: ${form.time || 'Flexible'}`;
}
