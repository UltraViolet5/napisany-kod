def change_card_title(dict_card, new_title):
    """
    swap card title
    :param dict_card: dict for ex. from get_card_by_id()
    :param new_title: string
     """
    cards = get_cards()
    for card in cards:
        if card["id"] == dict_card["id"]:
            card["title"] = new_title
            write_card_csv(cards)
            break
    else:
        print("no  indicated card")


def write_card_csv(data):
    """
    override card csv
    :param data: list of dict's
    """
    headers = data[0].key()
    with open(CARDS_FILE, "w") as file:
        writer = csv.DictWriter(file, headers)
        writer.writeheader()
        writer.writerows(data)


@app.route("/set-card-name", methods=["PUT"])
def set_card_name():
    if request.method == "PUT":
        data_handler.update_card_name(request.data[0], request.data[1])
    else:
        print("set_card_name error")