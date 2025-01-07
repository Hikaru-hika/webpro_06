"use strict";

let number=0;
const bbs = document.querySelector('#bbs');

document.querySelector('#post').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;

    const params = {  // URL Encode
        method: "POST",
        body:  'name='+name+'&message='+message,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log( params );
    const url = "/post";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        console.log( response );
        document.querySelector('#message').value = "";
    });
});

document.querySelector('#check').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body:  '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const url = "/check";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        let value = response.number;
        console.log( value );

        console.log( number );
        if( number != value ) {
            const params = {
                method: "POST",
                body: 'start='+number,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'               
                }
            }
            const url = "/read";
            fetch( url, params )
            .then( (response) => {
                if( !response.ok ) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then( (response) => {
                number += response.messages.length;
                for( let mes of response.messages ) {
                    console.log( mes );  // 表示する投稿
                    let cover = document.createElement('div');
                    cover.className = 'cover';
                    let name_area = document.createElement('span');
                    name_area.className = 'name';
                    name_area.innerText = mes.name;
                    let mes_area = document.createElement('span');
                    mes_area.className = 'mes';
                    mes_area.innerText = mes.message;
                    let time_area = document.createElement('span');
                    time_area.className = 'timestamp';
                    const date = new Date(mes.timestamp);
                    time_area.innerText = ` (${date.toLocaleString()})`;
                    cover.appendChild( name_area );
                    cover.appendChild( mes_area );
                    cover.appendChild(time_area);
                    bbs.appendChild( cover );
                }
            })
        }
    });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    // テーマの切り替え
    document.body.classList.toggle('dark-mode');
    
    // ボタンのテキストを切り替え
    const themeButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.innerText = 'ライトモード'; // ダークモード時
    } else {
        themeButton.innerText = 'ダークモード'; // ライトモード時
    }
});

document.getElementById('layout-toggle').addEventListener('click', () => {
    // モバイルモード切り替え
    document.body.classList.toggle('mobile-mode');
    
    // ボタンのテキスト切り替え
    const layoutButton = document.getElementById('layout-toggle');
    if (document.body.classList.contains('mobile-mode')) {
        layoutButton.innerText = 'デスクトップモード'; // モバイルモード時
    } else {
        layoutButton.innerText = 'モバイルモード'; // デスクトップモード時
    }
});

