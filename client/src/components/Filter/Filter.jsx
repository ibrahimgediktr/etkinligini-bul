import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import tr from "date-fns/locale/tr";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function Filter({ categories }) {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState({
    start_date: null,
    end_date: null,
  });
  const [filteredKeys, setFilteredKeys] = useState({
    searchTerm: "",
    start_date: "",
    end_date: "",
    category: "0",
    city: "",
  });

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setSelectedDate((prevObject) => ({
      ...prevObject,
      start_date: start,
      end_date: end,
    }));
    setFilteredKeys((prevObject) => ({
      ...prevObject,
      start_date: moment(start).format("YYYY/MM/DD"),
      end_date: moment(end).format("YYYY/MM/DD"),
    }));
  };

  const handleFilter = () => {
    navigate(
      `/search?name=${filteredKeys.searchTerm}&category=${filteredKeys.category}&city=${filteredKeys.city}&start_date=${filteredKeys.start_date}&end_date=${filteredKeys.end_date}`
    );
  };

  return (
    <div className="filter">
      <div className="container filter__container">
        <div className="filter__form">
          <input
            type="text"
            name="search"
            value={filteredKeys.searchTerm}
            className="filter__name input"
            placeholder="Etkinlik Adı"
            onChange={(e) =>
              setFilteredKeys({ ...filteredKeys, searchTerm: e.target.value })
            }
          />
          <select
            name="category"
            className="filter__category input"
            onChange={(e) =>
              setFilteredKeys({ ...filteredKeys, category: e.target.value })
            }
          >
            <option value="0">Kategoriler</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="city"
            value={filteredKeys.city}
            className="filter__city input"
            placeholder="Şehir"
            onChange={(e) =>
              setFilteredKeys({ ...filteredKeys, city: e.target.value })
            }
          />
          <DatePicker
            selected={selectedDate.start_date}
            onChange={(dates) => handleDateChange(dates)}
            startDate={selectedDate?.start_date}
            endDate={selectedDate?.end_date}
            selectsRange
            className="input"
            placeholderText="Tarih"
            dateFormat="dd MMMM"
            locale={tr}
            // inline
          />
          <button
            type="button"
            onClick={() => handleFilter()}
            className="btn btn__primary"
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
