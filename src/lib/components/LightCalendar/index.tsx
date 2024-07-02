import { useMemo } from "react";

import './index.scss';

const DAY_LIST_KO = ['일','월','화','수','목','금','토'];
const DAY_LIST_EN = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

type CellType = {
  value: Date;
  type: 'prev' | 'current' | 'next';
}

interface ILightCalendarProps{
  language?: 'en' | 'ko'
  selectedDate: Date;
  onDateChange: (date:Date) => void;
  disableDateClick?: boolean;
  disableFuture?: boolean;
  containerSize?: {
    width: string;
    height: string;
  }
  fontSize?: {
    day?: number;
    date?: number;
  }
  cellSize?: number;
  cellColor?: {
    today?: string;
    selected?: string;
  }
  className?:string
  cellTextClassName?: string;
}

const LightCalendar = ({
  language = 'en',
  containerSize = {width: '100%', height: '100%'},
  selectedDate,
  onDateChange,
  disableDateClick = false,
  disableFuture = false,
  fontSize = {day: 14, date: 14},
  cellSize = 40,
  cellColor = {today: '#EDEDED', selected: '#ADD8E6'},
  className,
  cellTextClassName
}: ILightCalendarProps) => {

  const dateToText = (date: Date) => {
    return date.toLocaleDateString('en-CA');
  }
  
  const compareDate = (first: Date, sec: Date) => {
    return dateToText(first) === dateToText(sec);
  };

  const handleMonthClick = (direction: 'prev' | 'next', date?: number) => {
    if (direction === 'prev') {
      onDateChange(new Date(year, month - 1, date ? date : 1));
    } else {
      if (disableFuture && new Date() <= new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)) return;
      onDateChange(new Date(year, month + 1, date ? date : 1));
    }
  };

  const handleToday = () => {
    if (dateToText(new Date()) === dateToText(selectedDate)) return;
    onDateChange(new Date());
  }

  const handleDateClick = (data: CellType) => {
    if (disableDateClick || (dateToText(data.value) === dateToText(selectedDate))) return;
    const {type , value} = data;
    if (type === 'next' && disableFuture && new Date() <= new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)) return;
    
    onDateChange(value);
    if (type !== 'current') handleMonthClick(type, value.getDate());
  }

  const {year, month, cells} = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const startMonth = new Date(year, month + 1, 0);
    const currentDate = startMonth.getDate();

    const beforeMonth = new Date(year, month, 0);
    const prevDate = beforeMonth.getDate();
    const prevDay = beforeMonth.getDay();

    const cells:CellType[] = [];
    let count = 0;

    if (prevDay !== 6) { 
      for (let i = prevDay; i >= 0; i--) {
        cells.push({ value: (new Date(year,month - 1,prevDate - i)), type: 'prev' });
        count += 1;
      }
    }

    for (let i = 1; i <= currentDate; i++) {
      cells.push({ value: (new Date(year,month, i)), type: 'current' });
      count += 1;
    }
    
    for (let i = 1; i <= 42 - count; i++) {
      cells.push({ value: (new Date(year,month + 1, i)), type: 'next' });
    }

    return {year, month, cells}
  },[selectedDate])

  const enMonth = useMemo(() => {
    switch (month) {
      case (0) : return 'JAN'
      case (1) : return 'FEB'
      case (2) : return 'MAR'
      case (3) : return 'APR'
      case (4) : return 'MAY'
      case (5) : return 'JUN'
      case (6) : return 'JUL'
      case (7) : return 'AUG'
      case (8) : return 'SEP'
      case (9) : return 'OCT'
      case (10) : return 'NOV'
      case (11) : return 'DEC'
    }
},[language, month]);


  return (
    <div
      className={`light-calendar-container ${className}`}
      style={{width: containerSize.width, height: containerSize.height}}
    >
      <header>
        <div className="paginate-buttons">
          <button className="today-button" onClick={handleToday}>{language === 'en' ? 'today' : '오늘'}</button>
          <button className="arrow-button" onClick={() => handleMonthClick('prev')}>&lt;</button>
          <div className="year-month">{language === 'en' ? `${enMonth} ${year}` : `${year}년 ${month + 1}월`}</div> 
          <button
            className="arrow-button"
            onClick={() => handleMonthClick('next')}
            disabled={disableFuture && new Date() <= new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)}
          >&gt;</button>
        </div>
      </header>
      <table className="light-calendar">
        <thead>
          <tr>
            {(language === 'en' ? DAY_LIST_EN : DAY_LIST_KO).map((day,index) => (
              <th key={index}>
                <p
                  className="day-text"
                  style={{fontSize: `${fontSize.day}px`}}
                >
                  {day}
                </p>
              </th>
            ))}
          </tr>
        </thead >
        <tbody>
          {Array.from({length: 6}, (_, index) => index * 7).map((first) => {
              return (
                <tr key={first}>
                  {cells.slice(first, first + 7).map((cell, index) => {
                    return (
                      <td key={index}>
                        <button
                          className={`date-text ${cell.type} ${index % 7 === 0 ? 'sunday' : ''} ${cellTextClassName ? cellTextClassName : ''}}`}
                          style={{
                            width: `${cellSize}px`,
                            height: `${cellSize}px`,
                            fontSize: `${fontSize.date}px`,
                            cursor: `${disableDateClick ? 'default' : 'pointer'}`,
                            backgroundColor :
                            disableDateClick && compareDate(cell.value, new Date()) ? cellColor.today
                            : disableDateClick ? 'transparent'
                            : compareDate(cell.value, selectedDate) ? cellColor.selected
                            : compareDate(cell.value, new Date()) ? cellColor.today
                            : 'transparent'
                          }}
                          onClick={() => handleDateClick(cell)}
                        >
                            {cell.value.getDate()}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
          })}
        </tbody>
        </table> 
    </div>
  );
};

export default LightCalendar;