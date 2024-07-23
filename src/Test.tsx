import React, { useState } from 'react';
import LightCalendar from './lib/components/LightCalendar'

const Test = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div style={{padding: '10px', width: '100%', height: '100%', boxSizing: 'border-box'}}>
      <LightCalendar
        language='ko'
        selectedDate={date}
        onDateChange={setDate}
        disableFuture
      />
    </div>
  )
}

export default Test;