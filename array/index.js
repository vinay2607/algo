// 'use strict';
// function to find first and last index of element of sorted array
/*
function firstLastIndex(arr, el) {
    let first = 0, last = arr.length - 1, foundFirst = -1, foundLast = -1;
    while (first <= last && last !== first + 1) {
        console.log({ first, last })
        let mid = ~~((first + last) / 2);
        if (arr[mid] === el) {
            if (mid === 0 || arr[mid - 1] !== el) {
                foundFirst = mid;
            }
            else {
                while (arr[mid] === arr[mid - 1]) {
                    mid--
                }
                foundFirst = mid;
            }
            if (mid === arr.length - 1 || arr[mid + 1] !== el) {
                foundLast = mid
            }
            else {
                while (arr[mid] === arr[mid + 1]) {
                    mid++
                }
                foundLast = mid;
            }
            return [foundFirst, foundLast]
        }
        else if (el < arr[mid]) {
            last = mid
        }
        else {
            first = mid
        }
    }
    console.log([foundFirst, foundLast])
    return [foundFirst, foundLast];
}
firstLastIndex([5, 7, 7, 8, 8, 10], 6)

*/


/**
 *
 * @param {Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
 *
 */
// function to read zigzag string in straight line
// function convert(str, numsRow) {
//     // for()
//     console.log(2 * numsRow - 2)
//     console.log(str[2 * (2 * numsRow - 2)])
// }
// convert("PAYPALISHIRING", 4)


// const test = [
//     {
//         nestedArray: [
//             {
//                 staffName: {
//                     label: "Jeremy Mercer",
//                     value: "6037bf3f1e9ec0822ff869a4",
//                 },
//                 limit: "3",
//                 queueId: "6143129f4c16ee0012286488",
//                 organizationId: "601adb9b0d83f69de3007ddf",
//                 staffFromId:
//                     '[{"salesRepId":"6037c12f1e9ec0822ff869b0","leadId":["61c954cc0be60400132bb3de"]},{"salesRepId":"6037c2041e9ec0822ff869bc","leadId":["61c954bd0be60400132bb369"]},{"salesRepId":"6037bf3f1e9ec0822ff869a4","leadId":["61c954bc0be60400132bb33f","61c954bb0be60400132bb31d"]}]',
//             },
//             {
//                 staffName: {
//                     label: "Amanda Lovely",
//                     value: "6037bf941e9ec0822ff869a7",
//                 },
//                 limit: "1",
//                 queueId: "6143129f4c16ee0012286488",
//                 organizationId: "601adb9b0d83f69de3007ddf",
//                 staffFromId:
//                     '[{"salesRepId":"6037c12f1e9ec0822ff869b0","leadId":["61c954cc0be60400132bb3de"]},{"salesRepId":"6037c2041e9ec0822ff869bc","leadId":["61c954bd0be60400132bb369"]},{"salesRepId":"6037bf3f1e9ec0822ff869a4","leadId":["61c954bc0be60400132bb33f","61c954bb0be60400132bb31d"]}]',
//             },
//         ],
//     },
//     {
//         nestedArray: [
//             {
//                 staffName: {
//                     label: "John Wick",
//                     value: "615d725190a9740012e08248",
//                 },
//                 limit: "2",
//                 queueId: "619258431e6c1000129f1c56",
//                 organizationId: "615d68ef90a9740012e0770e",
//                 staffFromId:
//                     '[{"salesRepId":"615d725190a9740012e08248","leadId":["61c954c80be60400132bb3c3"]},{"salesRepId":"61b0795bd4a161001200ee15","leadId":["61c954c00be60400132bb37b"]}]',
//             },
//             {
//                 staffName: {
//                     label: "John Wick",
//                     value: "615d725190a9740012e08249",
//                 },
//                 limit: "4",
//                 queueId: "619258431e6c1000129f1c56",
//                 organizationId: "615d68ef90a9740012e0770e",
//                 staffFromId:
//                     '[{"salesRepId":"615d725190a9740012e08248","leadId":["61c954c80be60400132bb3c3"]},{"salesRepId":"61b0795bd4a161001200ee15","leadId":["61c954c00be60400132bb37b"]}]',
//             },
//         ],
//     },
// ];
// const finalData = []
// test.forEach((item) => {
//     const Obj = {}
//     Obj.queueId = item.nestedArray[0].queueId
//     Obj.organizationId = item.nestedArray[0].organizationId;
//     Obj.staffFromId = item.nestedArray[0].staffFromId;
//     Obj.transferStaffIds = item.nestedArray.map(el => {
//         return { staffId: el.staffName.value, limit: el.limit }
//     });
//     console.log(Obj)
// })
const datas = [
    {
        "queueId": "6143129f4c16ee0012286488",
        "transferStaffIds": [
            {
                "staffId": "6037c0ff1e9ec0822ff869ad",
                "limit": "10"
            },
            {
                "staffId": "6037bf3f1e9ec0822ff869a4",
                "limit": "1"
            },
            {
                "staffId": "6037bf941e9ec0822ff869a7",
                "limit": "2"
            }
        ],
        "organizationId": "601adb9b0d83f69de3007ddf",
        "staffFromId": [
            {
                "salesRepId": "6037bf3f1e9ec0822ff869a4",
                "leadId": [
                    "61c954c80be60400132bb3c3",
                    "61c9549f0be60400132bb2cc",
                    "61c9549f0be60400132bb2c2",
                    "61c9549f0be60400132bb2c4"
                ]
            },
            {
                "salesRepId": "61b0795bd4a161001200ee15",
                "leadId": [
                    "61c954c00be60400132bb37b"
                ]
            }
        ]
    },
    // {
    //     "queueId": "619258431e6c1000129f1c56",
    //     "organizationId": "615d68ef90a9740012e0770e",
    //     "staffFromId": [
    //         {
    //             "salesRepId": "615d725190a9740012e08248",
    //             "leadId": [
    //                 "61c954cc0be60400132bb3de"
    //             ]
    //         },
    //         {
    //             "salesRepId": "615d70b690a9740012e0800a",
    //             "leadId": [
    //                 "61c954be0be60400132bb372"
    //             ]
    //         }
    //     ],
    //     "transferStaffIds": [
    //         {
    //             "staffId": "615d725190a9740012e08248",
    //             "limit": "1"
    //         },
    //         {
    //             "staffId": "61b0795bd4a161001200ee15",
    //             "limit": "1"
    //         }
    //     ]
    // }
]

for (let data of datas) {
    for (let j = 0; j < data.transferStaffIds.length; j++) {
        let limits = parseInt(data.transferStaffIds[j].limit)
        for (let i = 0; i < data.staffFromId.length; i++) {
            let newLeadIds
            if (!limits) break;
            const temp = data.staffFromId[i].leadId.length
            if (data.staffFromId[i].leadId === 0) continue;
            if (limits >= temp) {
                newLeadIds = [...data.staffFromId[i].leadId]
                limits -= temp
                data.staffFromId[i].leadId = 0
            }
            else {
                newLeadIds = data.staffFromId[i].leadId.splice(0, limits)
                limits -= newLeadIds.length
            }
            console.log(newLeadIds, data.transferStaffIds[j].staffId)
        }
    }
}