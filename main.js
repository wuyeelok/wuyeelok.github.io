// Referencing responsive nav by Ash Neilson - start
const mediaMax = 43 * 16; // same as max-width in style.css

const menu = $("nav ul");

$("#openup").on("click", function (e) {
  e.preventDefault();
  menu.slideToggle();
});

$(window).resize(function () {
  const w = $(this).width();
  if (w > mediaMax && menu.is(":hidden")) {
    menu.removeAttr("style");
  }
});

$(".open-menu").height($(window).height());

// Smooth Scrolling
$(".cf a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      { scrollTop: $(hash).offset().top },
      800,
      function () {
        window.location.hash = hash;
      }
    );

    const w = $(window).width();
    if (w <= mediaMax) {
      menu.slideToggle();
    }
  }
});

$(".internal-link").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      { scrollTop: $(hash).offset().top },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
// Referencing responsive nav by Ash Neilson - end

const skill_icons = document.getElementsByClassName("skill_icon");
if (skill_icons !== null) {
  const skill_icon_list = [...skill_icons];

  skill_icon_list.forEach((skill_icon_ele) => {
    skill_icon_ele.addEventListener("click", function () {
      if (this.classList.contains("fa-plus")) {
        this.classList.remove("fa-plus");
        this.classList.add("fa-minus");
        this.parentElement.parentElement.classList.remove("chosen");
      } else if (this.classList.contains("fa-minus")) {
        const plus_icons = document.getElementsByClassName("fa-plus");
        if (plus_icons !== null) {
          const plus_icon_list = [...plus_icons];
          plus_icon_list.forEach((plus_icon_ele) => {
            plus_icon_ele.classList.remove("fa-plus");
            plus_icon_ele.classList.add("fa-minus");
            plus_icon_ele.parentElement.parentElement.classList.remove(
              "chosen"
            );
          });
        }
        this.classList.remove("fa-minus");
        this.classList.add("fa-plus");
        this.parentElement.parentElement.classList.add("chosen");
      }
    });
  });
}

// Refer to https://attacomsian.com/blog/javascript-detect-mobile-device
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const paraWechatIdEle = document.getElementById("para__wechat-id");
const paraWechatQrEle = document.getElementById("para__wechat-qr");

if ("desktop" === deviceType()) {
  paraWechatIdEle.classList.remove("hide-ele");
} else {
  paraWechatQrEle.classList.remove("hide-ele");
}
