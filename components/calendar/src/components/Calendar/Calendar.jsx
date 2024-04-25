
import moment from 'moment';

export const Calendar = ({ date }) => {
  const weekdayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const weekdayNamesShortly = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const monthNamesGenitive = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const monthNamesNominative = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const momentDate = moment(date);

  const firstDayOfMonth = momentDate.clone().startOf('month');
  const lastDayOfMonth = momentDate.clone().endOf('month');
  const firstWeekdayOfMonth = firstDayOfMonth.day() || 7;

  const prevMonthDays = [];
  for (let i = firstWeekdayOfMonth - 2; i >= 0; i--) {
    prevMonthDays.push(<td key={`prev-${i}`} className="ui-datepicker-other-month">{lastDayOfMonth.clone().subtract(i, 'days').date()}</td>);
  }

  const currentMonthDays = [];
  for (let i = 1; i <= lastDayOfMonth.date(); i++) {
    const isToday = momentDate.date() === i ? 'ui-datepicker-today' : '';
    currentMonthDays.push(<td key={`current-${i}`} className={isToday}>{i}</td>);
  }

  const nextMonthDays = [];
  const totalDays = prevMonthDays.length + currentMonthDays.length;
  const remainingDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);
  for (let i = 1; i <= remainingDays; i++) {
    nextMonthDays.push(<td key={`next-${i}`} className="ui-datepicker-other-month">{i}</td>);
  }

  const weeks = [];
  const allDays = prevMonthDays.concat(currentMonthDays, nextMonthDays);
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(<tr key={`week-${i / 7}`}>{allDays.slice(i, i + 7)}</tr>);
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekdayNames[momentDate.day() - 1]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{momentDate.date()}</div>
          <div className="ui-datepicker-material-month">{monthNamesGenitive[momentDate.month()]}</div>
          <div className="ui-datepicker-material-year">{momentDate.year()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthNamesNominative[momentDate.month()]}</span>&nbsp;
          <span className="ui-datepicker-year">{momentDate.year()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          {[...Array(7)].map((_, index) => (
            <col key={`col-${index}`} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {weekdayNamesShortly.map((weekday, index) => (
              <th key={`weekday-${index}`} scope="col" title={weekday}>{weekday.slice(0, 2)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks}
        </tbody>
      </table>
    </div>
  );
};
