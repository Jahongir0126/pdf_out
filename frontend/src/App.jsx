// Переработанный React-компонент с Bootstrap 5 и двухколоночной формой
import React, { useState } from 'react';
import axios from 'axios';
import defaultData from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    left: { ...defaultData.left["1"], ...defaultData.left["2"], ...defaultData.left["3"], ...defaultData.left["4"], ...defaultData.left["5"], ...defaultData.left["6"], ...defaultData.left["7"], ...defaultData.left["8"], ...defaultData.left["9"], ...defaultData.left["10"] },
    right: { ...defaultData.right["11"], ...defaultData.right["12"], ...defaultData.right["13"], ...defaultData.right["14"], ...defaultData.right["15"], ...defaultData.right["20"], ...defaultData.right["21"] },
    bottom: { ...defaultData.bottom }
  });

  const handleChange = (section, name, value) => {
    setForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value
      }
    }));
    const key = `${section}.${name}`;
    if (errors[key]) {
      setErrors({ ...errors, [key]: undefined });
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/fill-pdf', form, {
        responseType: 'blob'
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'anketa.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderFields = (section, fields) => (
    <>
      {fields.map(({ name, label, type }) => (
        <div className="" key={name}>
          <label className="form-label fw-bold">{label}</label>
          <input
            type={type}
            className={`form-control ${errors[`${section}.${name}`] ? 'is-invalid' : ''}`}
            value={form[section][name] || ''}
            onChange={e => handleChange(section, name, e.target.value)}
          />
          {errors[`${section}.${name}`] && (
            <div className="invalid-feedback">
              {errors[`${section}.${name}`]}
            </div>
          )}
        </div>
      ))}
    </>
  );

  const leftFields = [
    { name: 'lastName', label: 'Фамилия', type: 'text' },
    { name: 'firstName', label: 'Имя', type: 'text' },
    { name: 'middleName', label: 'Отчество', type: 'text' },
    { name: 'birthYear', label: 'Год рождения', type: 'text' },
    { name: 'birthMonth', label: 'Месяц рождения', type: 'text' },
    { name: 'birthDay', label: 'День рождения', type: 'text' },
    { name: 'birthPlace', label: 'Место рождения', type: 'text' },
    { name: 'nationality', label: 'Национальность', type: 'text' },
    { name: 'religion', label: 'Религия', type: 'text' },
    { name: 'yoshlarUchun', label: 'Ёшлар уюшмаси азосими', type: 'text' },
    { name: 'kasabaUchun', label: 'Касаба учун', type: 'text' },
    { name: 'educationLevel', label: 'Уровень образования', type: 'text' },
    { name: 'institution', label: 'Учебное заведение', type: 'text' },
    { name: 'specialty', label: 'Специальность', type: 'text' },
    { name: 'type', label: 'Тип обучения', type: 'text' },
    { name: 'diplomaSpec', label: 'Специальность по диплому', type: 'text' },
    { name: 'diplomaIssuer', label: 'Кем выдан диплом', type: 'text' },
    { name: 'diplomaNumber', label: 'Номер диплома', type: 'text' },
    { name: 'diplomaYear', label: 'Год выдачи диплома', type: 'text' },
    { name: 'diplomaDate', label: 'Дата выдачи диплома', type: 'text' }
  ];

  const rightFields = [
    { name: 'mainSpecialty', label: 'Основная специальность', type: 'text' },
    { name: 'specExperience', label: 'Стаж по специальности', type: 'text' },
    { name: 'generalExperience', label: 'Общий стаж', type: 'text' },
    { name: 'lastJob', label: 'Последнее место работы', type: 'text' },
    { name: 'reasonLeave', label: 'Причина ухода', type: 'text' },
    { name: 'familyStatus', label: 'Семейное положение', type: 'text' },
    { name: 'familyNotes', label: 'Примечания о семье', type: 'text' },
    { name: 'passportSeries', label: 'Серия паспорта', type: 'text' },
    { name: 'passportNumber', label: 'Номер паспорта', type: 'text' },
    { name: 'issuedBy', label: 'Кем выдан', type: 'text' },
    { name: 'issuedDate', label: 'Дата выдачи', type: 'text' },
    { name: 'address', label: 'Адрес', type: 'text' },
    { name: 'phone', label: 'Телефон', type: 'text' },
    { name: 'signature', label: 'Подпись', type: 'text' }
  ];

  const bottomFields = [
    { name: 'militaryGroup', label: 'Военная группа', type: 'text' },
    { name: 'militaryType', label: 'Тип военного учета', type: 'text' },
    { name: 'composition', label: 'Состав', type: 'text' },
    { name: 'militaryRank', label: 'Воинское звание', type: 'text' },
    { name: 'specialty', label: 'Специальность', type: 'text' },
    { name: 'militaryFit', label: 'Годность', type: 'text' },
    { name: 'commissionName', label: 'Название комиссии', type: 'text' },
    { name: 'commissionNote', label: 'Примечание комиссии', type: 'text' },
    { name: 'militaryNumber', label: 'Военный номер', type: 'text' }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary">Анкета</h1>
      <form className="bg-white border rounded p-4 shadow-sm">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fs-3 text-center">Левая колонка</h5>
            {renderFields('left', leftFields)}
          </div>
          <div className="col-md-6">
            <h5 className="fs-3 text-center">Правая колонка</h5>
            {renderFields('right', rightFields)}
          </div>
        </div>

        <hr className="my-4" />
        <h5 className="fs-3 text-center">Нижняя часть (военная информация)</h5>
        {renderFields('bottom', bottomFields)}

        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-primary btn-lg px-5"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Создание PDF...' : 'Скачать PDF'}
          </button>
        </div>
      </form>
    </div>
  );
}
