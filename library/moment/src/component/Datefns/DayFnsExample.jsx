import React, { useState, useRef } from 'react';

import { sub, add, format, differenceInHours } from 'date-fns';
import addWeeks from 'date-fns/addWeeks'; //Tree shaking
import { ko } from 'date-fns/locale';

import { format as formatTz, toDate } from 'date-fns-tz';

export default function DayFnsExample() {
    const [day, setDay] = useState(null);
    const birthDayRef = useRef();
    const handleBirthdayChange = e => {
        setDay(format(new Date(e.target.value), 'EEEE', { locale: ko }));
    };

    const dateFnsDate = new Date();
    const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
    const newDateFnsDate2 = addWeeks(newDateFnsDate, 1);

    return (
        <div>
            <h1>date-fns</h1>
            <div>Immutable check.</div>
            <div>
                {format(dateFnsDate, 'yyyy-MM-dd')}
                <br />
                {format(newDateFnsDate, 'yyyy-MM-dd')}
                <br />
                {format(newDateFnsDate2, 'yyyy-MM-dd')}
                <br />
            </div>
            <br />
            <div>Summer Time New-york</div>
            <div>
                2018년 3월 10일 13시에 하루 더하기:
                {formatTz(
                    add(new Date('2018-03-10 13:00:00'), { days: 1 }),
                    'yyyy-MM-dd HH:mm:ssXX',
                    { timeZone: 'America/New_York' }
                )}
            </div>
            <div>
                2018년 3월 10일 13시에 24시간 더하기:
                {format(
                    add(
                        toDate(new Date('2018-03-10 13:00:00'), {
                            timeZone: 'America/New_York',
                        }),
                        { hours: 24 }
                    ),
                    'yyyy-MM-dd HH:mm:ssXX'
                )}
            </div>
            <br />
            <div>Leap year Korea</div>
            <div>
                2017년 1월 1일에 1년 빼기:
                {format(
                    sub(new Date('2017-01-01'), { years: 1 }),
                    'yyyy-MM-dd'
                )}
            </div>
            <div>
                2017년 1월 1일에 365일 빼기:
                {format(
                    sub(new Date('2017-01-01'), { days: 365 }),
                    'yyyy-MM-dd'
                )}
            </div>
            <br />
            <div>한국어로 표기하기 07-17-2021을 2021년 7월 17일로 표기</div>
            <div>{format(new Date('07-17-2021'), 'yyyy년 MM월 dd일')}</div>
            <br />
            <div>자기 생일 요일 찾기</div>
            <div>
                <input
                    type="date"
                    ref={birthDayRef}
                    onChange={handleBirthdayChange}
                />
                <div>무슨 요일이였을까?</div>
                <div>{day}</div>
            </div>
            <br />
            <div>두 날짜 비교하기</div>
            <div>2021-07-17 03:00 와 2017-07-18 02:00는 몇시간 차이인가?</div>
            <div>
                {differenceInHours(
                    new Date('2021-07-17 03:00'),
                    new Date('2021-07-18 02:00')
                )}
            </div>
        </div>
    );
}
