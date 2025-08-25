import { useState } from "react";
import { BsCalendar, BsClockHistory} from "react-icons/bs";



function Calendario() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Horários pré-definidos
  const availableTimes = ["09:00", "11:00", "14:00", "16:00"];

  return (
    <div className="h-55">
      {/* Data */}
      <div className="flex items-center gap-3 mb-3">
        <BsCalendar className="text-cyan-500 h-5 w-5"/>
        <label className=" text-gray-400 font-semibold ">Escolha uma data</label>
      </div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="w-full p-3 bg-gray-800 text-white rounded-lg mb-4"
        min={new Date().toISOString().split("T")[0]} // não deixa escolher datas passadas
      />

      {/* Horários */}
      <div className="flex items-center gap-3 mb-3">
        <BsClockHistory className="text-cyan-500 h-5 w-5"/>
        <label className=" text-gray-400 font-semibold">Escolha um horário </label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {availableTimes.map((time) => (
          <button
            type="button"
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`p-2 rounded-lg transition ${
              selectedTime === time
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calendario;
