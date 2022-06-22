import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import tr from "date-fns/locale/tr";
import "react-datepicker/dist/react-datepicker.css";


function Filter({ events, categories, setFilteredEvents }) {
  const [selectedDate, setSelectedDate] = useState({
    start_date: null,
    end_date: null,
  });
  const [filteredKeys, setFilteredKeys] = useState({
    searchTerm: "",
    start_date: null,
    end_date: null,
    category: null,
    city: "",
  });

  const filterStartDate = moment(selectedDate?.start_date).format("YYYY/MM/DD");
  const filterEndDate = moment(selectedDate?.end_date).format("YYYY/MM/DD");

  console.log(filterStartDate);
  console.log(filterEndDate);

  useEffect(() => {
    setFilteredKeys((prevObject) => ({
      ...prevObject,
      start_date: filterStartDate,
      end_date: filterEndDate,
    }));
    
  }, [filterStartDate, filterEndDate]);

  const filtered = () => {
    const updatedEvents = events?.filter((event) => {
      var filterName = filteredKeys.searchTerm.length !== 0 ? event.name
        .toLocaleLowerCase()
        .includes(filteredKeys.searchTerm.toLocaleLowerCase()) : event
      var filterCategory = filteredKeys.category !== null ? event.category === parseInt(filteredKeys.category) : event
      var filterCity = filteredKeys.city.length !== 0 ? event.city
        .toLocaleLowerCase()
        .includes(filteredKeys.city.toLocaleLowerCase()) : event
      // var filterDate = filteredKeys.start_date !== null && filteredKeys.end_date !== null  ?
      //   filteredKeys?.start_date < event.start_date &&
      //   event.start_date <= filteredKeys?.end_date : event
      //   console.log(filterDate);
      console.log(filteredKeys?.start_date > event.start_date);
      return filterName && filterCategory && filterCity 
    });

    console.log(updatedEvents);
    setFilteredEvents(updatedEvents);
  };


  const handleFilter = (e) => {
    e.preventDefault();
    filtered();
  };

  return (
    <div className="filter">
      <div className="container filter__container">
        <form method="get" onSubmit={handleFilter} className="filter__form">
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
            onChange={(dates) => {
              const [start, end] = dates;
              setSelectedDate((prevObject) => ({
                ...prevObject,
                start_date: start,
                end_date: end,
              }));
            }}
            startDate={selectedDate.start_date}
            endDate={selectedDate.end_date}
            selectsRange
            className="input"
            placeholderText="Tarih"
            dateFormat="dd MMMM"
            locale={tr}
            //   inline
          />
          <button type="submit" className="btn btn__primary">Ara</button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
