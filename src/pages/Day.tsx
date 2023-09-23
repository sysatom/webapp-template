import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function Day() {
  return (
    <div>
      <p>
        Now: {`${dayjs().format('YYYY-MM-DD HH:mm:ss')}`} <br/>
        {`${dayjs('1999-01-01').toNow()}`}
      </p>
    </div>
  )
}

export default Day;