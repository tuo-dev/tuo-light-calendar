# tuo-light-calendar (react)
light calendar

## Screenshot
![tuo-light-calendar](https://github.com/tuo-dev/for-photo-storage/assets/137742986/55cc5775-b61e-40d4-8b31-00c36a21ab6f)


## Development

```
npm install
yarn install

npm run dev
yarn dev
```

## Install

```
npm install tuo-light-calendar
yarn add tuo-light-calendar
```

## Usage

```
const [date, setDate] = useState<Date>(new Date());

return (
  <LightCalendar
    selectedDate={date}
    onDateChange={setDate}
  />
)
```

## API

### LightCalendar props

| name | description | type | defalut | 
| --- | --- | --- | --- |
| selectedDate | currently selected date | Date | |
| onDateChange | changing selectedDate when selecting a date | (date:Date) => void | |
| disableDateClick | disable selecting a date | boolean | false |
| disableFuture | disable moving to future months from the current month | boolean | false |
| containerSize | size of the container including the header and calendar | {width: string, height: string} | {width: '100%', height: '100%'} |
| fontSize | font size of day and date (px) | {day: number, date: number} | {day: 14, date: 14} |
| cellSize | width and height of the selection area and today's date area (px) | number | 40 |
| cellColor | background color of each of the selection area and today's date area | {today: stirng, selected: string} | {today: 'EDEDED', selected: 'ADD8E6'} |
| className | additional css class of container including the header and calendar | stiring | |
| cellTextClassName | additional css class of the text in the selection area and today's date area | stiring | |
