let nature_img = 'images/nature.jpg';
let computing_img = 'images/computing.jpg';
let web_img = 'images/web.jpg';
let nature_text = 'Click here to see World Wide Nature...';
let computing_text = 'Click here to see World Wide Computing...';
let web_text = 'Click here to see World Wide Web...';

function implementChange(image_path, text_body) {
    document.getElementById('image').src = image_path;
    document.getElementById('button').innerText = text_body;
}
function changeImage() {
    let state = document.getElementById('button').innerText;
    if (state === computing_text) {
        implementChange(computing_img, web_text);
    }
    else if (state === web_text) {
        implementChange (web_img, nature_text);
    }
    else if (state === nature_text) {
        implementChange (nature_img, computing_text);
    }
}