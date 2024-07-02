import React, { useState } from 'react';
import LightCalendar from './lib/components/LightCalendar'

const Test = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div style={{padding: '10px', width: '100%', height: '100%', boxSizing: 'border-box'}}>
      <LightCalendar
        selectedDate={date}
        onDateChange={setDate}
      />
    </div>
  )
}

export default Test;