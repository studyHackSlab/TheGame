document.addEventListener('DOMContentLoaded', (event) => {

    // 手札
    const card_table = document.getElementById('storage').children;

    // カードの作成 2-99
    let card = [];
    for (let i = 2; i < 100; i++) {
        card.push(i);
    }
    console.log(card);

    // 手札を配置する
    for (let i = 0; i < card_table.length; i++) {

        // ランダムな数字を生成する
        let card_number = Math.floor(Math.random() * Number(card.length));
        // let card_number = Math.floor( Math.random() * (Number(card.length) + 1) );
        // let card_number = Math.floor(Math.random() * card.length) + 2;
        card_table[i].src = "img/" + card[card_number] + ".png";
        card_table[i].alt = card[card_number];

        // 配列から削除
        card.splice(card.indexOf(card[card_number]), 1)
    }

    console.log(card);

    // 手札から選ばれたカード
    for (let i = 0; i < card_table.length; i++) {
        card_table[i].addEventListener('click', function () {

            // 選択されている置き場
            let elements = document.getElementsByName('check');

            // 選択されている置き場を確認する
            for (let j = 0; j < elements.length; j++) {
                if (elements.item(j).checked) {
                    console.log(this.alt);
                    // console.log(elements.item(j).value);
                    // console.log(elements.item(j).nextSibling.nextSibling.children[0].alt);

                    // 置き場の数字より手札から選んだカードの数字の方が大きかったら置き場に手札を置く
                    if (elements.item(j).value == "up" && Number(this.alt) > Number(elements.item(j).nextSibling.nextSibling.children[0].alt)) {
                        elements.item(j).nextSibling.nextSibling.children[0].src = "img/" + this.alt + ".png";
                        elements.item(j).nextSibling.nextSibling.children[0].alt = this.alt;

                        // 選択したカードを入れ替える
                        let card_number = Math.floor(Math.random() * Number(card.length));
                        // let card_number = Math.floor( Math.random() * (Number(card.length) + 1) );
                        // let card_number = Math.floor(Math.random() * card.length) + 2;
                        this.src = "img/" + card[card_number] + ".png";
                        this.alt = card[card_number];

                        console.log(card_number);
                        console.log(card[card_number]);

                        // 配列から削除
                        card.splice(card.indexOf(card[card_number]), 1)

                        // this.src = "img/no.png";
                        console.log(card);
                    }
                    else if (elements.item(j).value == "down" && Number(this.alt) < Number(elements.item(j).nextSibling.nextSibling.children[0].alt)) {
                        elements.item(j).nextSibling.nextSibling.children[0].src = "img/" + this.alt + ".png";
                        elements.item(j).nextSibling.nextSibling.children[0].alt = this.alt;

                        // 選択したカードを入れ替える
                        let card_number = Math.floor(Math.random() * Number(card.length));
                        // let card_number = Math.floor( Math.random() * (Number(card.length) + 1) );
                        // let card_number = Math.floor(Math.random() * card.length) + 2;
                        this.src = "img/" + card[card_number] + ".png";
                        this.alt = card[card_number];

                        console.log(card_number);
                        console.log(card[card_number]);

                        // 配列から削除
                        card.splice(card.indexOf(card[card_number]), 1)

                        // this.src = "img/no.png";
                        console.log(card);

                    }
                    console.log(elements.item(j).nextSibling.nextSibling.children[0]);
                    document.getElementsByTagName('h1')[0].innerHTML = card.length;
                }
            }

        });
    }
});
