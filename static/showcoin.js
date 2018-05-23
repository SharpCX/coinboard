var itemStr = window.localStorage.getItem("tradeList");
var itemList = [
    "okexetcusdt",
    "okexetcquarterusd",
    "okexbtcusdt",
    "okexabtusdt",
    "okexactusdt",
    "zbaeusdt",
    "okexbtmusdt",
    "okexeosusdt",
    "okexkcashusdt",
    "okexyeeusdt",
    "okexzilusdt",
    "okexcmtusdt"
];

if (itemStr && itemStr.length > 0) {
    var tempItemList = JSON.parse(itemStr);
    tempItemList = tempItemList.filter(ele => {
        return ele.length > 0;
    })
    if (tempItemList.length > 0) {
        itemList = tempItemList;
    }
}

console.log(itemList);

new AICoin.markets({
    "symbols": itemList,
    "columns": [
        "degree",
        "vol",
        "buy",
        "sell",
        "hight",
        "low"
    ],
    "style": "tr%7Bheight%3A34px%3B%7D",
    "container": "markets_container",
    "lang": "zh"
})