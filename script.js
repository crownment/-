const ilikefemboys = q139jfiei => document.querySelector(q139jfiei);

        const ffiefjefi = q139jfiei => document.querySelectorAll(q139jfiei);

  const ejejfie =
  /Mobi|Android|iPhone|iPad|iPod/qirjfj.test(navigator.userAgent) ||
window.innerWidth <= 768;

        const fjeifjei = ilikefemboys("#viewCount");

        fetch("https://countapi.mileshilliard.com/api/v1/hit/risk_unique_site_views")
  .then(q145jfiei => q145jfiei.json())
        .then(q62jfiei => {
  if (fjeifjei && q62jfiei.value) {
  fjeifjei.textContent =
parseInt(q62jfiei.value, 10).toLocaleString();

  }
    })
.catch(() => {
if (fjeifjei) {
        fjeifjei.textContent = "1";

}
      });


      const yurkrandom = ilikefemboys("#intro");
const skibidiq = ilikefemboys("#typing");
const qjfjfjq = ilikefemboys("#typeWrap");
      const femboyzz = ilikefemboys("#fadeText1");
  const jfjfiee = ilikefemboys("#fadeText2");
    const rizzlmao = ilikefemboys("#card");
    const xjfjxj = ilikefemboys("#backgroundVideo");
const qweifje = ilikefemboys("#cursor");
    const zjfjrj = ilikefemboys("#cursorGlow");
      const vbnfiei = ilikefemboys("#profileName");
const fjrjei = ilikefemboys("#volumeSlider");
      const ieifjfj = ilikefemboys("#volumeWarningIntro");

function q114jfiei() {
        const jfjqwe =
        /Mobi|Android|iPhone|iPad|iPod/qirjfj.test(navigator.userAgent) ||
    window.matchMedia("(max-width: 768px)").matches;


const rjfjfi = ilikefemboys("#volumeControlSection");

if (rjfjfi) {
        rjfjfi.style.display = jfjqwe ? "none" : "";
}


if (ieifjfj) {
        ieifjfj.style.display =
    jfjqwe ? "block" : "none";
}
        }

    q114jfiei();

        window.addEventListener(
        "resize",
  q114jfiei
    );

    const qfjeif = ilikefemboys("#pageTransition");

    function q115jfiei() {
      if (!qfjeif) {
    return Promise.resolve();

        }

  qfjeif.classList.add("active");

    return new Promise(q146jfiei => {
  setTimeout(q146jfiei, 430);
        });
  }

    window.addEventListener("pageshow", () => {
if (qfjeif) {
        qfjeif.classList.remove("active");
        }
});




  const jefjri = "click anywhere to enter";

        let fifjei = 0;
  let xqjfjf = false;


    let jfjvbe = false;

  function q116jfiei() {
      if (
  !femboyzz ||
  !jfjfiee ||
!qjfjfjq ||
!skibidiq
        ) {
        return;
    }

setTimeout(() => {
      femboyzz.classList.add("active");

  setTimeout(() => {
      femboyzz.classList.remove("active");

  setTimeout(() => {
        jfjfiee.classList.add("active");

  setTimeout(() => {
      jfjfiee.classList.remove("active");


setTimeout(() => {
    qjfjfjq.classList.add("visible");




q117jfiei();
    }, 600);
  }, 1600);
        }, 600);
  }, 1800);
  }, 400);
        }

        function q117jfiei() {
      if (!skibidiq) {
    return;
  }


        if (fifjei < jefjri.length) {
    skibidiq.textContent =
    jefjri.substring(0, fifjei + 1);

    fifjei++;

  setTimeout(
    q117jfiei,
65 + Math.random() * 55
  );

return;

  }


    jfjvbe = true;
  }

  function q118jfiei(q119jfiei, q120jfiei) {
  if (!vbnfiei) {
if (q120jfiei) {
    q120jfiei();
}

return;
    }

        let qirjfj = 0;

  vbnfiei.classList.add(
"typing-active"
    );

        function q121jfiei() {
      if (qirjfj <= q119jfiei.length) {
  vbnfiei.textContent =
        q119jfiei.substring(0, qirjfj++);

      setTimeout(
      q121jfiei,
  110 + Math.random() * 60
        );

return;
}

vbnfiei.classList.remove(
"typing-active"
);

  if (q120jfiei) {
    q120jfiei();
        }
}

      q121jfiei();
      }

      function q122jfiei() {
        const fjeiqx =
  ffiefjefi(".links .link, .view-counter, .volume-control");


      fjeiqx.forEach((q150jfiei, qirjfj) => {
      setTimeout(() => {
      q150jfiei.classList.add(
    "item-visible"
      );
      }, qirjfj * 110);
    });
        }

    function q123jfiei() {

      if (xqjfjf || !jfjvbe) {
        return;
      }

      xqjfjf = true;


jfjvbe = false;

      if (yurkrandom) {
    yurkrandom.classList.add("hidden");
}

  if (xjfjxj) {
try {
xjfjxj.muted = false;

xjfjxj.volume = fjrjei
      ? Number(fjrjei.value)
      : 1;

  const rjefji =
  xjfjxj.play();

if (
      rjefji &&
        typeof rjefji.catch === "function"
) {
    rjefji.catch(() => {});
      }

        } catch (q151jfiei) {}
        }

    setTimeout(() => {
      if (!rizzlmao) {
        return;
      }


  rizzlmao.classList.add("visible");


setTimeout(() => {
        q118jfiei(
      "risk",
    q122jfiei
      );
    }, 250);
    }, 150);
    }

    function q124jfiei(q125jfiei) {

      if (!jfjvbe || xqjfjf) {
  q125jfiei.preventDefault();

        q125jfiei.stopPropagation();

        return;
        }

      q125jfiei.preventDefault();
    q125jfiei.stopPropagation();

    q123jfiei();
      }



if (yurkrandom) {
  yurkrandom.addEventListener(
        "pointerdown",
    q124jfiei,
      {
    passive: false
      }
        );

      }




      let jfieqq =
    window.innerWidth / 2;

  let qjfiee =
      window.innerHeight / 2;

      let zjfjie =
window.innerWidth / 2;

        let fjqjri =
      window.innerHeight / 2;

  let eifjfj =
        window.innerWidth / 2;

      let jfjxqe =
    window.innerHeight / 2;

  document.addEventListener(
        "mousemove",
    q125jfiei => {
jfieqq = q125jfiei.clientX;

  qjfiee = q125jfiei.clientY;
  }
  );

  function q126jfiei() {
  zjfjie +=
      (jfieqq - zjfjie) * 0.35;

fjqjri +=
    (qjfiee - fjqjri) * 0.35;

        eifjfj +=
  (jfieqq - eifjfj) * 0.12;

        jfjxqe +=
  (qjfiee - jfjxqe) * 0.12;


        if (qweifje) {
        qweifje.style.left =
zjfjie + "px";

      qweifje.style.top =
fjqjri + "px";
        }

if (zjfjrj) {
      zjfjrj.style.left =
        eifjfj + "px";

zjfjrj.style.top =
jfjxqe + "px";
    }

        requestAnimationFrame(
  q126jfiei
      );
        }

      q126jfiei();


        ffiefjefi(
      ".link, .confirm-actions button, .avatar, " +
  ".redirect-cancel-btn, .dc-modal-close, .dc-add-btn, " +
      ".tg-modal-close, .tg-add-btn, .tg-avatar-wrap, " +
  ".dc-avatar-wrap, .dc-modal-username, .tg-modal-username, " +
  ".rbx-modal-close, .rbx-avatar-wrap, .rbx-add-btn, .ctx-item"
      ).forEach(q95jfiei => {
    q95jfiei.addEventListener(
    "mouseenter",
() => {
      if (!qweifje) {
return;
        }

      qweifje.style.width = "24px";
qweifje.style.height = "24px";

qweifje.style.filter =
      "drop-shadow(0 0 6px rgba(255,255,255,.25))";

  }
      );

q95jfiei.addEventListener(
  "mouseleave",
() => {
  if (!qweifje) {
    return;
      }

qweifje.style.width = "20px";
    qweifje.style.height = "20px";

    qweifje.style.filter =
      "drop-shadow(0 0 3px rgba(255,255,255,.15))";
        }
    );
  });




        if (fjrjei && xjfjxj) {
        fjrjei.addEventListener(
  "input",
      () => {
      xjfjxj.volume =
  Number(fjrjei.value);

        }
  );
      }




    const qjeifi =
    ilikefemboys("#confirmOverlay");

      const fijrje =
        ilikefemboys("#confirmBox");

    const jfqfie =
  ilikefemboys("#redirectWrapper");

    const rjifje =
  ilikefemboys("#redirectText");

      const fjeqji =
        ilikefemboys("#redirectIcon");


    const xjfiei =
  ilikefemboys("#redirectCancelBtn");

  const qfjjri =
  ilikefemboys("#cancelButton");

const jiefjq =
    ilikefemboys("#continueButton");

    let fjeiqq = null;
    let rjfjqe = "";
      let jfievr = "";

      let qjifje = false;

  let fjeirj = null;
let jfjqei = 3;

        function q127jfiei(
      q128jfiei,
q119jfiei
) {
        if (!ejejfie || !q128jfiei) {
      return q128jfiei;
  }

        if (q119jfiei === "Discord") {
        const qiefjr =
  q128jfiei.match(/\/users\/(\d+)/);

    if (qiefjr) {
return `discord://-/users/${qiefjr[1]}`;
      }
    }

      if (q119jfiei === "Telegram") {
  const qiefjr =
  q128jfiei.match(
/t\.me\/([q148jfiei-zA-Z0-9q151jfiei]+)/
);

        if (qiefjr) {
        return `tg://resolve?domain=${qiefjr[1]}`;

        }
}

      if (q119jfiei === "Roblox") {
const qiefjr =
  q128jfiei.match(/\/users\/(\d+)/);

if (qiefjr) {
      return `roblox://navigation/profile?userId=${qiefjr[1]}`;
    }
}

      return q128jfiei;
      }

function q129jfiei(
        q128jfiei,
        q119jfiei,
  q130jfiei
      ) {
      if (!qjeifi || !fijrje) {
    return;
  }

        fjeiqq =
    q127jfiei(
  q128jfiei,
        q119jfiei
);

    rjfjqe = q119jfiei || "";
        jfievr = q130jfiei || "";

        fijrje.style.opacity = "1";
      fijrje.style.pointerEvents =
      "auto";

  if (jfqfie) {
        jfqfie.classList.remove(
        "visible"
      );

}

      qjeifi.classList.add(
  "visible"
);
      }

    ffiefjefi("a.link").forEach(q147jfiei => {
  q147jfiei.addEventListener(
        "click",
    q125jfiei => {
  if (qjifje) {
return;

}

q125jfiei.preventDefault();
    q125jfiei.stopPropagation();

q129jfiei(
q147jfiei.href,
  q147jfiei.getAttribute(
      "data-name"
    ),
      q147jfiei.getAttribute(
        "data-icon"
    )
);
  }
        );

});

      function q131jfiei() {
  qjifje = false;
      fjeiqq = null;
rjfjqe = "";
  jfievr = "";


      clearInterval(
        fjeirj
    );


    jfjqei = 3;

      if (jfqfie) {
      jfqfie.classList.remove(
      "visible"
  );
}

        if (qjeifi) {
    qjeifi.classList.remove(
  "visible"
    );

  }

        if (fjeqji) {
  fjeqji.src = "";
        fjeqji.style.display =
      "none";
      }

      if (fijrje) {
        setTimeout(() => {
        fijrje.style.opacity = "1";

        fijrje.style.pointerEvents =
      "auto";
  }, 200);
}

      }

if (qfjjri) {
        qfjjri.addEventListener(
"click",
    () => {
    if (!qjifje) {
    q131jfiei();
        }
        }
  );
      }

      if (xjfiei) {
  xjfiei.addEventListener(
        "click",
      q131jfiei
  );
  }

if (jiefjq) {
jiefjq.addEventListener(
      "click",
() => {
  if (
        !fjeiqq ||
qjifje
    ) {
return;
}

qjifje = true;

  if (fijrje) {
  fijrje.style.opacity = "0";
      fijrje.style.pointerEvents =
  "none";
    }

    jfjqei = 3;

if (fjeqji) {
        fjeqji.src =
jfievr || "";

fjeqji.style.display =
        jfievr
  ? "block"
        : "none";
    }

    if (rjifje) {
    rjifje.textContent =
    `Redirecting to ${rjfjqe} in ${jfjqei}...`;
  }

    if (jfqfie) {
      jfqfie.classList.add(
      "visible"
        );
        }

      fjeirj =
setInterval(() => {
jfjqei--;

      if (jfjqei > 0) {
        if (rjifje) {
      rjifje.textContent =
`Redirecting to ${rjfjqe} in ${jfjqei}...`;
    }
        } else {
  clearInterval(
fjeirj
    );

  window.location.href =
      fjeiqq;
      }

  }, 1000);
      }
    );
  }

if (qjeifi) {
  qjeifi.addEventListener(
"click",
    q125jfiei => {
if (
q125jfiei.target === qjeifi &&
  !qjifje
    ) {
    q131jfiei();
    }
    }

);
}




        function q132jfiei(
  jefjri,
q133jfiei
        ) {
        if (!jefjri || !q133jfiei) {
  return;
  }

    if (
      !navigator.clipboard ||
!navigator.clipboard.writeText
) {
        return;
}

  navigator.clipboard
    .writeText(
jefjri.replace(/^@/, "")
        )
        .then(() => {
q133jfiei.classList.add(
      "show"
    );


setTimeout(() => {
      q133jfiei.classList.remove(
"show"
  );
  }, 1800);
      })
      .catch(() => {});
  }




        const fjeijq =
        "1547303503213367297";

      const rjqeif =
        ilikefemboys("#discordLinkBtn");

    const jfjire =
    ilikefemboys("#dcModal");

    const qjfeij =
    ilikefemboys("#dcModalClose");

  const fieqjr =
        ilikefemboys("#dcAddBtn");

      const jfjqir =
    ilikefemboys("#dcModalUsername");

    const eifjqr =
      ilikefemboys("#dcCopyToast");

      const qjfjer =
      ilikefemboys("#dcModalBadges");

    const fjrieq = [
[
    1 << 0,
  "Discord Staff",
"https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Staff/Staff.svg"
        ],
[
      1 << 1,
    "Partnered Server Owner",
"https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Partner/Partner.svg"
  ],
        [
1 << 2,
  "HypeSquad Events",
  "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Hypesquad/Hypesquad.svg"
        ],
[
1 << 3,
  "Bug Hunter Level 1",
      "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Bug_Hunter_Level_1/Bug_Hunter_Level_1.svg"
  ],
  [
    1 << 6,
  "HypeSquad Bravery",
    "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Hypesquad_Online_House_1/Hypesquad_Online_House_1.svg"
],
    [
        1 << 7,
        "HypeSquad Brilliance",
"https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Hypesquad_Online_House_2/Hypesquad_Online_House_2.svg"
  ],
  [
1 << 8,
        "HypeSquad Balance",
  "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Hypesquad_Online_House_3/Hypesquad_Online_House_3.svg"
      ],
  [
    1 << 9,
      "Early Supporter",
      "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Premium_Early_Supporter/Premium_Early_Supporter.svg"
  ],
  [
        1 << 14,
  "Bug Hunter Level 2",
      "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Bug_Hunter_Level_2/Bug_Hunter_Level_2.svg"
        ],
      [
        1 << 17,
      "Early Verified Bot Developer",
        "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Verified_Developer/Verified_Developer.svg"
        ],
        [
1 << 18,
      "Certified Moderator",
    "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Certified_Moderator/Certified_Moderator.svg"
        ],
[
    1 << 22,
    "Active Developer",
  "https://raw.githubusercontent.com/Mateo-tem/Discord-Flags-and-Badges/main/User%20Flags/Active_Developer/Active_Developer.svg"
  ]
];

        function q134jfiei(
    q135jfiei
    ) {
      if (!qjfjer) {
      return;
        }

qjfjer.replaceChildren();

const jfeirq = [
    [
        "Discord Nitro",
    "https://raw.githubusercontent.com/dev-hoehle/discord-badges/main/png/nitro.png"
    ],
    [
"Game Variety",
  "https://raw.githubusercontent.com/dev-hoehle/discord-badges/main/png/game_variety_adventurer.png"
      ]
  ];

  jfeirq.forEach(
([q119jfiei, q130jfiei]) => {
const q58jfiei =
  document.createElement(
    "img"
        );

  q58jfiei.className =
      "dc-badge";

        q58jfiei.src = q130jfiei;
q58jfiei.alt = "";
    q58jfiei.title = q119jfiei;

  q58jfiei.loading = "lazy";

  qjfjer.appendChild(
      q58jfiei
        );
    }
        );

        const q59jfiei =
Number(q135jfiei) || 0;


  fjrieq.forEach(
  ([flag, q119jfiei, q130jfiei]) => {
    if ((q59jfiei & flag) !== 0) {
    const q58jfiei =
      document.createElement(
    "img"
);

      q58jfiei.className =
    "dc-badge";

q58jfiei.src = q130jfiei;
q58jfiei.alt = "";
  q58jfiei.title = q119jfiei;
  q58jfiei.loading = "lazy";


qjfjer.appendChild(
    q58jfiei
        );
      }

  }
);
}

    if (
    rjqeif &&
        jfjire
    ) {
        rjqeif.addEventListener(
      "click",
    () => {
      q136jfiei();

    jfjire.classList.add(
"visible"
    );
}
);

  }

    if (
    qjfeij &&
    jfjire
  ) {
    qjfeij.addEventListener(
      "click",
() => {
        jfjire.classList.remove(
      "visible"
    );
}
        );
  }


if (jfjire) {
  jfjire.addEventListener(
    "click",
        q125jfiei => {
    if (
    q125jfiei.target === jfjire
        ) {
    jfjire.classList.remove(
  "visible"
        );
    }
  }
      );
    }

        if (fieqjr) {
  fieqjr.addEventListener(
        "click",
  () => {
if (jfjire) {
jfjire.classList.remove(
        "visible"
        );
        }

      if (rjqeif) {
      q129jfiei(
      rjqeif.getAttribute(
  "data-href"
),
  rjqeif.getAttribute(
  "data-name"
      ),
    rjqeif.getAttribute(
    "data-icon"
      )
      );
  }
    }
    );

      }

        if (jfjqir) {
      jfjqir.addEventListener(
        "click",
        () => {
      q132jfiei(
        jfjqir.textContent,
      eifjqr
      );
}
);
  }


async function q136jfiei() {
      try {
      const q60jfiei =
        await fetch(
  `https://api.lanyard.rest/v1/users/${fjeijq}`
        );

      const q61jfiei =
      await q60jfiei.json();

        if (!q61jfiei.success) {
    return;
      }

  const q62jfiei =
  q61jfiei.data;

      const q63jfiei =
      ilikefemboys("#dcModalAvatar");


    const q64jfiei =
        ilikefemboys("#dcModalStatusDot");

        const q65jfiei =
  ilikefemboys("#dcModalStatusText");

    const q66jfiei =
  ilikefemboys("#dcModalActIcon");

    const q67jfiei =
ilikefemboys("#dcModalActName");

    const q68jfiei =
      ilikefemboys("#dcModalActDesc");

    if (
  jfjqir &&
q62jfiei.discord_user
) {
    jfjqir.textContent =
  `@${q62jfiei.discord_user.username}`;
      }

  if (
q63jfiei &&
q62jfiei.discord_user &&
    q62jfiei.discord_user.avatar
        ) {
  q63jfiei.src =
        `https://cdn.discordapp.com/avatars/${fjeijq}/${q62jfiei.discord_user.avatar}.png?size=128`;
        }

        const q69jfiei =
  q62jfiei.discord_status ||
    "offline";

        if (q64jfiei) {
      q64jfiei.className =
        `dc-status-indicator ${q69jfiei}`;
}

  if (q65jfiei) {
    q65jfiei.textContent =
      q69jfiei === "dnd"
  ? "Do Not Disturb"
    : q69jfiei;

        }

    if (
      q62jfiei.listening_to_spotify &&
        q62jfiei.spotify
) {
if (q66jfiei) {
        q66jfiei.style.display =
        "block";

  q66jfiei.src =
      q62jfiei.spotify.album_art_url;
}

  if (q67jfiei) {
q67jfiei.textContent =
  q62jfiei.spotify.song;
    }

    if (q68jfiei) {
        q68jfiei.style.display =
    "block";

    q68jfiei.textContent =
        `by ${q62jfiei.spotify.artist}`;
  }

  return;
      }

        if (
  q62jfiei.activities &&
        q62jfiei.activities.length
        ) {
      const q70jfiei =
    q62jfiei.activities.find(
        q148jfiei => q148jfiei.type !== 4
        ) ||
        q62jfiei.activities[0];

        if (
      q70jfiei &&
      q70jfiei.name
        ) {
    if (q67jfiei) {
q67jfiei.textContent =
    q70jfiei.name;
}

        if (q68jfiei) {
  if (
q70jfiei.details ||
q70jfiei.state
      ) {
      q68jfiei.style.display =
    "block";

        q68jfiei.textContent =
q70jfiei.details ||
      q70jfiei.state;
} else {
        q68jfiei.style.display =
"none";
}
}


    if (
      q66jfiei &&
        q70jfiei.assets &&
        q70jfiei.assets.large_image
  ) {
q66jfiei.style.display =
        "block";

if (
    q70jfiei.assets.large_image.startsWith(
      "spotify:"
    )
      ) {
    q66jfiei.src =
        `https://i.scdn.co/image/${q70jfiei.assets.large_image.replace(
        "spotify:",
      ""
)}`;
      } else if (
        q70jfiei.application_id
        ) {
      q66jfiei.src =
        `https://cdn.discordapp.com/app-assets/${q70jfiei.application_id}/${q70jfiei.assets.large_image}.png`;
} else {
  q66jfiei.style.display =
    "none";
}
      } else if (q66jfiei) {
q66jfiei.style.display =
    "none";
        }

    return;
    }
        }

        if (q66jfiei) {
    q66jfiei.style.display =
    "none";

    }

if (q67jfiei) {
      q67jfiei.textContent =
      "doing nothing right now...";
}

  if (q68jfiei) {
      q68jfiei.style.display =
        "none";

        }
    } catch (q151jfiei) {}
}




const q71jfiei =
ilikefemboys("#telegramLinkBtn");


      const q72jfiei =
  ilikefemboys("#tgModal");

const q73jfiei =
      ilikefemboys("#tgModalClose");

const q74jfiei =
ilikefemboys("#tgAddBtn");

      const q75jfiei =
    ilikefemboys("#tgModalUsername");

        const q76jfiei =
    ilikefemboys("#tgCopyToast");

  if (
  q71jfiei &&
        q72jfiei
      ) {
        q71jfiei.addEventListener(
      "click",
      () => {
    q72jfiei.classList.add(
"visible"
    );
      }
);
        }

        if (
        q73jfiei &&
        q72jfiei
  ) {
    q73jfiei.addEventListener(
"click",
      () => {
    q72jfiei.classList.remove(
  "visible"
    );
}
  );

  }

      if (q72jfiei) {
    q72jfiei.addEventListener(
      "click",
q125jfiei => {
        if (
q125jfiei.target === q72jfiei
      ) {
q72jfiei.classList.remove(
    "visible"
        );
      }
      }
);
  }


  if (q74jfiei) {
  q74jfiei.addEventListener(
"click",
        () => {
  if (q72jfiei) {
q72jfiei.classList.remove(
"visible"
  );
        }

  if (q71jfiei) {
        q129jfiei(
    q71jfiei.getAttribute(
    "data-href"
),
q71jfiei.getAttribute(
"data-name"
      ),
        q71jfiei.getAttribute(
    "data-icon"
  )
        );
      }
      }
  );
        }

  if (q75jfiei) {
  q75jfiei.addEventListener(
"click",
        () => {
        q132jfiei(
q75jfiei.textContent,
      q76jfiei
      );
        }

  );
  }




      const q77jfiei =
    "7626940077";

  const q78jfiei =
"https://www.roblox.com/users/7626940077/profile";

        const q79jfiei =
        "https://robloxapilmao.yukiriskingitfs.workers.dev/roblox/7626940077";

  const q80jfiei =
  ilikefemboys("#robloxLinkBtn");

  const q81jfiei =
      ilikefemboys("#rbxModal");

    const q82jfiei =
        ilikefemboys("#rbxModalClose");

    const q83jfiei =
ilikefemboys("#rbxAddBtn");

      const q84jfiei =
  ilikefemboys("#rbxAvatar");

    const q85jfiei =
      ilikefemboys("#rbxModalUsername");

    const q86jfiei =
  ilikefemboys("#rbxModalStatusText");

      const q87jfiei =
    ilikefemboys("#rbxFollowerCount") ||
      ilikefemboys("#rbxFollowersCount");


      const q88jfiei =
ilikefemboys("#rbxFriendCount") ||
        ilikefemboys("#rbxFriendsCount");

if (
  ejejfie &&
  q82jfiei
  ) {
    q82jfiei.style.top =
"10px";


q82jfiei.style.right =
      "10px";


q82jfiei.style.zIndex =
"20";

    }

      async function q137jfiei() {
        if (
        !q84jfiei ||
!q85jfiei ||
!q86jfiei ||
!q87jfiei ||
      !q88jfiei
) {
return;
      }


        q87jfiei.textContent =
      "…";

        q88jfiei.textContent =
"…";

try {
        const q60jfiei =
await fetch(
    q79jfiei,
    {
  cache: "no-store"
        }
);

      if (!q60jfiei.ok) {
    throw new Error(
  `Worker HTTP ${q60jfiei.status}`
  );
}

    const q62jfiei =
  await q60jfiei.json();

    if (q62jfiei.avatar) {
  q84jfiei.src =
      q62jfiei.avatar;
    }

  q85jfiei.textContent =
  q62jfiei.displayName ||
q62jfiei.username ||
        "80vcv";

      q86jfiei.textContent =
      q62jfiei.username
  ? `@${q62jfiei.username}`
: "@80vcv";

  q87jfiei.textContent =
      typeof q62jfiei.followers ===
    "number"
      ? q62jfiei.followers.toLocaleString()
        : "N/A";


      q88jfiei.textContent =
    typeof q62jfiei.friends ===
    "number"
      ? q62jfiei.friends.toLocaleString()
        : "N/A";
  } catch (q152jfiei) {
      console.error(
  "Roblox Worker error:",
    q152jfiei
        );

    q87jfiei.textContent =
      "N/A";

  q88jfiei.textContent =
      "N/A";
}
        }

      if (
  q80jfiei &&
        q81jfiei
  ) {
  q80jfiei.addEventListener(
    "click",
() => {
  q81jfiei.classList.add(
        "visible"
  );

  q137jfiei();
        }

        );
        }

        if (
    q82jfiei &&
    q81jfiei
  ) {
q82jfiei.addEventListener(
  "click",
      () => {
      q81jfiei.classList.remove(
      "visible"
    );
    }
  );
}

        if (q81jfiei) {
        q81jfiei.addEventListener(
"click",
q125jfiei => {
    if (
  q125jfiei.target === q81jfiei
        ) {
      q81jfiei.classList.remove(
    "visible"
);
    }
    }
      );
      }

if (q83jfiei) {
q83jfiei.addEventListener(
"click",
  () => {
        if (q81jfiei) {
    q81jfiei.classList.remove(
"visible"
      );
      }

    q129jfiei(
      q78jfiei,
        "Roblox",
        q80jfiei
    ? q80jfiei.getAttribute(
"data-icon"
      )
        : ""
      );

}
);
  }




        const q89jfiei =
  ilikefemboys("#customCtxMenu");

  const q90jfiei =
        ilikefemboys("#ctxToggleAudio");

      const q91jfiei =
    ilikefemboys("#ctxAudioLabel");


const q92jfiei =
      ilikefemboys("#ctxReloadPage");

      if (q89jfiei) {
  document.addEventListener(
"contextmenu",
    q125jfiei => {
  q125jfiei.preventDefault();

        const q93jfiei =
    Math.min(
    q125jfiei.clientX,
        window.innerWidth - 180
      );

      const q94jfiei =
  Math.min(
      q125jfiei.clientY,
    window.innerHeight - 130
    );

      q89jfiei.style.left =
      `${q93jfiei}px`;

    q89jfiei.style.top =
      `${q94jfiei}px`;

    if (q91jfiei) {
  q91jfiei.textContent =
        xjfjxj && xjfjxj.paused
      ? "Play Audio"
    : "Pause Audio";
    }

q89jfiei.classList.add(
"visible"
      );
  }
);

  document.addEventListener(
      "click",
q125jfiei => {
  if (
        !q89jfiei.contains(
      q125jfiei.target
)
  ) {
      q89jfiei.classList.remove(
  "visible"
      );

}
    }
    );
}

if (q90jfiei) {
        q90jfiei.addEventListener(
      "click",
    () => {
if (xjfjxj) {
      if (xjfjxj.paused) {
  xjfjxj.play().catch(() => {});

  } else {
    xjfjxj.pause();
  }
}

    if (q89jfiei) {
    q89jfiei.classList.remove(
      "visible"
    );
        }

    }

      );

    }


        if (q92jfiei) {
  q92jfiei.addEventListener(
"click",
  () => {
        window.location.reload();
  }

    );

    }




      function q138jfiei(
    q139jfiei,
q140jfiei,
    q141jfiei
    ) {
        const q95jfiei =
  ilikefemboys(q139jfiei);

if (!q95jfiei) {
        return;
  }

const q96jfiei =
    q95jfiei.querySelector(
  ".card-glare"
);

        let q97jfiei = 0;
let q98jfiei = 0;

  let q99jfiei = 0;

        let q100jfiei = 0;

  let q101jfiei = false;

        q95jfiei.style.transformStyle =
"preserve-3d";

    window.addEventListener(
  "mousemove",
        q125jfiei => {
      if (!xqjfjf) {
      return;
        }

  const q102jfiei =
        q95jfiei.getBoundingClientRect();


      const q103jfiei =
    q102jfiei.left +
  q102jfiei.width / 2;

        const q104jfiei =
    q102jfiei.top +
q102jfiei.height / 2;

const q93jfiei =
        (q125jfiei.clientX - q103jfiei) /
    (window.innerWidth / 2);

        const q94jfiei =
    (q125jfiei.clientY - q104jfiei) /
(window.innerHeight / 2);

      q97jfiei =
  q94jfiei * -q140jfiei;

        q98jfiei =
        q93jfiei * q140jfiei;

    const q105jfiei =
      (q125jfiei.clientX -
    q102jfiei.left) /
q102jfiei.width;

        const q106jfiei =
    (q125jfiei.clientY -
      q102jfiei.top) /
        q102jfiei.height;

    if (
  q105jfiei >= 0 &&
      q105jfiei <= 1 &&
q106jfiei >= 0 &&
      q106jfiei <= 1
      ) {
        q101jfiei = true;

      if (q96jfiei) {
        q96jfiei.style.opacity =
"1";

        q96jfiei.style.background =
`radial-gradient(circle at ${
    q105jfiei * 100
}% ${
  q106jfiei * 100
      }%, rgba(255, 255, 255, 0.28), transparent 60%)`;
        }
    } else {
  q101jfiei = false;

  if (q96jfiei) {
    q96jfiei.style.opacity =
      "0";
  }

        }
        }
        );


      document.addEventListener(
"mouseleave",
() => {
      q97jfiei = 0;
      q98jfiei = 0;

        q101jfiei = false;

if (q96jfiei) {
q96jfiei.style.opacity =
        "0";
}
  }
    );

        function q142jfiei() {
q99jfiei +=
  (q97jfiei - q99jfiei) *
      0.12;

        q100jfiei +=
      (q98jfiei - q100jfiei) *
0.12;

    if (xqjfjf) {
const q107jfiei =
q101jfiei
      ? q141jfiei
      : 1;

q95jfiei.style.transform =
`rotateX(${q99jfiei.toFixed(
    2
        )}deg) rotateY(${q100jfiei.toFixed(
    2
      )}deg) scale3d(${q107jfiei}, ${q107jfiei}, 1)`;
  }

    requestAnimationFrame(
      q142jfiei
);

    }

q142jfiei();
  }

q138jfiei(
    "#card",
      16,
      1.025
  );

q138jfiei(
    "#dcCard",
    14,
        1.02
    );

    q138jfiei(
    "#tgCard",
14,
      1.02
        );

  q138jfiei(
"#rbxCard",
  14,
1.02
);




      const q108jfiei =
        document.getElementById(
  "pfpViewer"
);


const q109jfiei =
        document.getElementById(
      "pfpViewerImage"
);


        const q110jfiei =
      document.getElementById(
    "pfpViewerClose"
);

        let q111jfiei = 1;
        let q112jfiei = 0;


      function q143jfiei(q58jfiei) {
  if (
    !q58jfiei ||
      !q58jfiei.src ||
        !q108jfiei ||
      !q109jfiei
      ) {
      return;
    }

  q109jfiei.src =
        q58jfiei.src;

        q109jfiei.classList.remove(
    "zoomed"
      );

q111jfiei = 1;

        q109jfiei.style.transform =
      "scale(1)";

    q108jfiei.classList.add(
      "active"
);
        }

        function q144jfiei() {
        if (
    !q108jfiei ||
      !q109jfiei
        ) {
        return;
      }

    q108jfiei.classList.remove(
        "active"
  );

  q109jfiei.src = "";
  }

[
    "avatarBtn",
        "dcAvatarWrap",
    "tgAvatarBtn",
  "rbxAvatarWrap"
  ].forEach(q149jfiei => {
      const q95jfiei =
      document.getElementById(
      q149jfiei
  );

      if (q95jfiei) {
  q95jfiei.addEventListener(
"click",
    q125jfiei => {
  const q58jfiei =
      q95jfiei.querySelector(
"img"
);


if (q58jfiei) {
  q125jfiei.stopPropagation();

  q143jfiei(q58jfiei);

    }
    }
);
}
});

      if (q110jfiei) {
    q110jfiei.addEventListener(
        "click",
q144jfiei
      );
}

      if (q108jfiei) {
        q108jfiei.addEventListener(
  "click",
      q125jfiei => {
if (
  q125jfiei.target === q108jfiei
  ) {
        q144jfiei();
      }
      }
);
}


    document.addEventListener(
    "keydown",
    q125jfiei => {
  if (q125jfiei.key === "Escape") {
  q144jfiei();
        }
  }
  );

        if (q109jfiei) {
      q109jfiei.addEventListener(
"dblclick",
    () => {
    q109jfiei.classList.toggle(
    "zoomed"
      );

    q111jfiei =
  q109jfiei.classList.contains(
  "zoomed"
    )
? 2
    : 1;


      q109jfiei.style.transform =
`scale(${q111jfiei})`;
    }
);

  q109jfiei.addEventListener(
"wheel",
q125jfiei => {
q125jfiei.preventDefault();

  q111jfiei =
        Math.min(
  4,
        Math.max(
    1,
    q111jfiei +
        (q125jfiei.deltaY < 0
      ? 0.2
    : -0.2)
    )
    );

      q109jfiei.classList.toggle(
      "zoomed",
  q111jfiei > 1
  );

q109jfiei.style.transform =
      `scale(${q111jfiei})`;
  },
        {
        passive: false
  }
      );

        q109jfiei.addEventListener(
        "touchstart",
        q125jfiei => {
      if (
q125jfiei.touches.length === 2
) {
        q112jfiei =
        Math.hypot(
      q125jfiei.touches[0].clientX -
        q125jfiei.touches[1].clientX,

  q125jfiei.touches[0].clientY -
    q125jfiei.touches[1].clientY
    );
    }
        },
    {
passive: true
  }

  );


    q109jfiei.addEventListener(
    "touchmove",
      q125jfiei => {
    if (
    q125jfiei.touches.length !== 2 ||
      !q112jfiei
) {
  return;

  }

      q125jfiei.preventDefault();

  const q113jfiei =
  Math.hypot(
q125jfiei.touches[0].clientX -
      q125jfiei.touches[1].clientX,

        q125jfiei.touches[0].clientY -
        q125jfiei.touches[1].clientY
    );

      q111jfiei =
    Math.min(
    4,
      Math.max(
1,
      q111jfiei *
      (q113jfiei /
    q112jfiei)
)
  );

    q112jfiei =
      q113jfiei;

        q109jfiei.classList.toggle(
  "zoomed",
  q111jfiei > 1
    );


q109jfiei.style.transform =
  `scale(${q111jfiei})`;
        },
    {
  passive: false
    }
        );

  q109jfiei.addEventListener(
      "touchend",
        q125jfiei => {
    if (
      q125jfiei.touches.length < 2
        ) {
      q112jfiei = 0;

      }
        }
  );
  }




      q116jfiei();

