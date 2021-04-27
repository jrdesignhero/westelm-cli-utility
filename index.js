#!/usr/bin/env node

let prompt = require('prompt-sync')();

let config = {
    columns: 0,
    images: [],
    setColumns: function (col) {
        this.columns = col;
        return true
    },
    getColumns: function () {
        return this.columns
    },
    addImages: function (imgURL) {
        this.images.push(imgURL);
        return true
    }
}

let logic = {
    css: ".w100{width:100%;display:block;}.row{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.col{box-sizing:border-box;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;position:relative;width:100%;min-height:1px}",
    markup: '',
    col_markup: ``,
    render: function (settings) {
        //formatt spacing
        console.log('');
        console.log('');

        for (let i = 0; i < settings.getColumns(); i++) {
            this.col_markup += `
                <div class="col">
                    <a class="w100" href="">
                        <img class="w100" src="${settings.images[i]}" />
                    </a>
                </div>
            `;
        }
        this.markup = `
            <div class="row">
                ${this.col_markup}
            </div>`;

        //formatt spacing
        console.log("============ HERE IS YOUR MARKUP ============");
        console.log('');

        console.log(this.markup);

        //formatt spacing
        console.log('');
        console.log('');
        console.log("============ HERE IS YOUR CSS ===============");
        console.log('');

        console.log(this.css);

        //formatt spacing
        console.log('');
        console.log('');
    },
    dynamicQuestions: function (settings) {
        for (let i = 0; i < settings.getColumns(); i++) {
            let temp_img = prompt(`Enter image ${i + 1} url: `);
            settings.addImages(temp_img);
        }
    },
    init: function (settings) {
        settings.columns = prompt('How many columns does your row have? ');
        this.dynamicQuestions(settings);
        this.render(settings);
    }
}

logic.init(config);


