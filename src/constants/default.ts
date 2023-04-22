import { MainContentType } from "@/interfaces/main";

import PLAYER_FOOTBALLER_PNG from '/public/player-footballer.png';
import PLAYER_BASKETBALL_PNG from '/public/player-basket-ball.png';

export const athletsData: MainContentType = {
    title: 'ATHLETS',
    image: PLAYER_FOOTBALLER_PNG,
    contents: [
        {
            key: '1',
            title: 'CONNECTION',
            description: 'Connect with coaches directly, you can ping coaches to view profile.',
        },
        {
            key: '2',
            title: 'COLLABORATION',
            description: 'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
        },
        {
            key: '3',
            title: 'GROWTH',
            description: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
        }
    ]
}

export const playersData: MainContentType = {
    title: 'PLAYERS',
    image: PLAYER_BASKETBALL_PNG,
    contents: [
        {
            key: '1',
            title: 'CONNECTION',
            description: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
        },
        {
            key: '2',
            title: 'COLLABORATION',
            description: 'Work with recruiter to increase your chances of finding talented athlete.',
        },
        {
            key: '3',
            title: 'GROWTH',
            description: 'Save your time, recruit proper athlets for your team.',
        }
    ]
}

// export const defaultContent: 