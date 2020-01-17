import { Textobj } from '../../models/textobj';
// import { env } from '../../env';
export const type = 'itemAction';


// action
const itemAction = (textItems: Textobj[]) => ({
    type,
    payload: textItems,
});

// const URL = env.URL_SERVER || "http://localhost:3000";
// request
// export function postText(data:any)
// {
//     return fetch(`${URL}/text`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//         mode: 'cors'
//     });
// }

// Request POST /text
// export function fetchText(data: TextObj, cb: any) {
//         postText(data)
//         .then(async (response) => {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             } else {
//                 let text = await response.text();                                                
//                 cb(JSON.parse(text));
//             }
//         })
//         .catch((e) => console.log(e));

// }
export default itemAction;