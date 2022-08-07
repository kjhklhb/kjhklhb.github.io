let comments = [
  {
    name: 'jack',
    comment: '开机测试',
    time: '我鬼知道他什么时候发的',
  },
  {
    name: 'Lady',
    comment: '开机测试',
    time: '我鬼知道他什么时候发的',
  },
];
let nameStr = document.getElementById('name');
let commnetStr = document.getElementById('comment');
let content = document.getElementById('comments');
let btnclose = document.getElementById('btn-close');
let btnsubmit = document.getElementById('btn-submit');

function postComments() {
  comments.unshift({
    name: nameStr.value,
    comment: commnetStr.value,
    time: new Date(),
  });
}

let renderComments = function (comments) {
  content.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    let Comment = comments[i];
    content.insertAdjacentHTML(
      'beforeend',
      `
      <hr />
      <h4>
      <span>${Comment.name}</span>
      <span class="date">${Comment.time}</span>
      </h4>
      <p>${Comment.comment}</p>
      `
    )
  }
};

renderComments(comments);

btnsubmit.onclick = function () {

  postComments(comments);
  renderComments(comments);
}

btnclose.onclick = function () {

  if (btnclose.innerHTML == "关闭留言") {
    btnclose.innerHTML = '开启留言';
    nameStr.disabled = true;
    commnetStr.disabled = true;
  }
  else {
    btnclose.innerHTML = '关闭留言';
    nameStr.disabled = false;
    commnetStr.disabled = false;
  }
}