# tuo-light-calendar (react)
light calendar

## Screenshot
![light-calendar](https://github.com/tuo-dev/for-photo-storage/assets/137742986/ead52d60-dcdc-4b44-a840-3c33741b0e21)


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
| cellSize | width and height of the selection area and today's date area (px) | number | 40 |
| cellColor | background color of each of the selection area and today's date area | {today: stirng, selected: string} | {today: '#EDEDED', selected: '#ADD8E6'} |
| selectedFontColor | font color of the selected date | string | '#333333' |
| classNames | additional css class of calendar container and the text for day and date  | {contanier: stirng, day?: string, today?: string, date?: string, differentMonth?: string, sunday?: string} | |
| customHeader | customize the header | (dateText: string, handleMonth: (direction: 'prev' | 'next') => void, clickToday: () => void, futureDisabled: boolean) => JSX.Element | |
