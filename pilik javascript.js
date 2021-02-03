export function createListOfCardParams() {
    let listOfParams = [];
    let cards_id = $(".card_id");
    let cards_board_id = $(".card_board_id");
    let cards_title = $(".card-title");
    let cards_status = $('.card_status');
    let cards_order = $(".card_order");
    let cards_message = $(".card_message");

    listOfParams.push(cards_id);
    listOfParams.push(cards_board_id);
    listOfParams.push(cards_title);
    listOfParams.push(cards_status);
    listOfParams.push(cards_order);
    listOfParams.push(cards_message);

    let listOfListStr = []

    for (let params of listOfParams) {
        let listOfInnerHtml = getParameterInOrder(params);
        listOfListStr.push(listOfInnerHtml);
    }
    let listOfCardParam = createListOfCardParam(listOfListStr);

    let lenOfList = 5;
    for (let i = 1; i < lenOfList; i++) {
        cardParamToListParse(listOfListStr, i, listOfCardParam);
    }
    console.log(listOfCardParam)
    return listOfCardParam;
}


function createListOfCardParam(listOfListStr) {
    let cardListOfList = [];

    for (let str of listOfListStr[0]) {
        let cardParam = [str];
        cardListOfList.push(cardParam);

    }
    return cardListOfList;
}

function cardParamToListParse(listOfListStr, index, listOfParams) {
    let counter = 0
    for (let list of listOfParams) {
        list.push(listOfListStr[index][counter])
        counter++
    }

}


function getParameterInOrder(param) {
    let listOfParameters = [];

    for (let title of param) {
        listOfParameters.push(title.innerHTML)
    }
    return listOfParameters
}