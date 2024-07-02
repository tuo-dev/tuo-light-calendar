# tuo-light-calendar (react)
light calendar

## Screenshot
![light-calendar-ko](https://github.com/tuo-dev/for-photo-storage/assets/137742986/d1970b63-6c9d-4e8e-b37f-bafbec5c0bac)
![light-calendar-en](https://github.com/tuo-dev/for-photo-storage/assets/137742986/e987d4d2-0cc9-4747-bca8-86496c5e8b18)


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
| language | language of header and day text | 'en' / 'ko' | 'en' |
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
