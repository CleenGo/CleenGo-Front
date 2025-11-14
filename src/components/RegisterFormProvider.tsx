import { useState } from "react";

export default function RegisterFormProvider() {
  const [days, setDays] = useState<string[]>([]);
  const [hours, setHours] = useState<string[]>([]);
  const [services, setServices] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    phone: "",
    about: "",
  });

  const toggleSelection = (value: string, list: string[], setter: (val: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      days,
      hours,
      services,
    };

    console.log("Formulario Proveedor:", payload);
    alert("Registro enviado (ver consola)");
  };

  const availableDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const availableHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  const availableServices = [
    "Barrer",
    "Trapear",
    "Sacudir muebles",
    "Lavar vajilla",
    "Lavar ropa",
    "Tender camas",
    "Cortar césped",
    "Regar plantas",
    "Podar árboles",
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg overflow-y-auto max-h-[90vh]">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#0C2340]">
        Registro Proveedor
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Campos comunes */}
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          name="surname"
          type="text"
          placeholder="Apellido"
          value={formData.surname}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          name="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          name="phone"
          type="text"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />

        {/* Días */}
        <div>
          <h3 className="font-semibold mb-2 text-[#0C2340]">Días de trabajo</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableDays.map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={days.includes(day)}
                  onChange={() => toggleSelection(day, days, setDays)}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="font-semibold mb-2 text-[#0C2340]">Horarios disponibles</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableHours.map((hour) => (
              <label key={hour} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={hours.includes(hour)}
                  onChange={() => toggleSelection(hour, hours, setHours)}
                />
                {hour}
              </label>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="font-semibold mb-2 text-[#0C2340]">Servicios</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableServices.map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={services.includes(service)}
                  onChange={() => toggleSelection(service, services, setServices)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Acerca de */}
        <div>
          <h3 className="font-semibold mb-2 text-[#0C2340]">Sobre ti</h3>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Cuéntanos un poco sobre ti..."
            className="border rounded-lg px-3 py-2 w-full h-24"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg hover:opacity-90 mt-2"
        >
          Registrarme
        </button>
      </form>
    </div>
  );
}
