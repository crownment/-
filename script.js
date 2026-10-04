const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const isMobile =
  /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  window.innerWidth <= 768;

const viewCount = $("#viewCount");

fetch("https://countapi.mileshilliard.com/api/v1/hit/risk_unique_site_views")
  .then(res => res.json())
  .then(data => {
    if (viewCount && data.value) {
      viewCount.textContent =
        parseInt(data.value, 10).toLocaleString();
    }
  })
  .catch(() => {
    if (viewCount) {
      viewCount.textContent = "1";
    }
  });

const intro = $("#intro");
const typing = $("#typing");
const typeWrap = $("#typeWrap");
const fadeText1 = $("#fadeText1");
const fadeText2 = $("#fadeText2");
const card = $("#card");
const video = $("#backgroundVideo");
const cursor = $("#cursor");
const cursorGlow = $("#cursorGlow");
const profileName = $("#profileName");
const volumeSlider = $("#volumeSlider");
const volumeWarningIntro = $("#volumeWarningIntro");

function updateMobileOnlyIntroUI() {
  const mobile =
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    window.matchMedia("(max-width: 768px)").matches;

  const volumeControl = $("#volumeControlSection");

  if (volumeControl) {
    volumeControl.style.display = mobile ? "none" : "";
  }

  if (volumeWarningIntro) {
    volumeWarningIntro.style.display =
      mobile ? "block" : "none";
  }
}

updateMobileOnlyIntroUI();

window.addEventListener(
  "resize",
  updateMobileOnlyIntroUI
);

const pageTransition = $("#pageTransition");

function runPageTransition() {
  if (!pageTransition) {
    return Promise.resolve();
  }

  pageTransition.classList.add("active");

  return new Promise(resolve => {
    setTimeout(resolve, 430);
  });
}

window.addEventListener("pageshow", () => {
  if (pageTransition) {
    pageTransition.classList.remove("active");
  }
});


/* =========================================================
   INTRO / CLICK TO ENTER
   ========================================================= */

const text = "click anywhere to enter";

let index = 0;
let entered = false;

/*
 * IMPORTANT:
 * This stays false until every character of
 * "click anywhere to enter" has been displayed.
 */
let canEnter = false;

function startIntroSequence() {
  if (
    !fadeText1 ||
    !fadeText2 ||
    !typeWrap ||
    !typing
  ) {
    return;
  }

  setTimeout(() => {
    fadeText1.classList.add("active");

    setTimeout(() => {
      fadeText1.classList.remove("active");

      setTimeout(() => {
        fadeText2.classList.add("active");

        setTimeout(() => {
          fadeText2.classList.remove("active");

          setTimeout(() => {
            typeWrap.classList.add("visible");

            // Start typing only after the
            // previous intro text has finished.
            typeText();
          }, 600);
        }, 1600);
      }, 600);
    }, 1800);
  }, 400);
}

function typeText() {
  if (!typing) {
    return;
  }

  /*
   * Keep typing until every character has
   * actually been added to the element.
   */
  if (index < text.length) {
    typing.textContent =
      text.substring(0, index + 1);

    index++;

    setTimeout(
      typeText,
      65 + Math.random() * 55
    );

    return;
  }

  /*
   * The COMPLETE text is now visible.
   * Only from this point onward can the
   * user enter the site.
   */
  canEnter = true;
}

function typeProfileName(name, done) {
  if (!profileName) {
    if (done) {
      done();
    }

    return;
  }

  let i = 0;

  profileName.classList.add(
    "typing-active"
  );

  function step() {
    if (i <= name.length) {
      profileName.textContent =
        name.substring(0, i++);

      setTimeout(
        step,
        110 + Math.random() * 60
      );

      return;
    }

    profileName.classList.remove(
      "typing-active"
    );

    if (done) {
      done();
    }
  }

  step();
}

function revealButtons() {
  const items =
    $$(".links .link, .view-counter, .volume-control");

  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add(
        "item-visible"
      );
    }, i * 110);
  });
}

function enterSite() {
  /*
   * Hard safety check.
   *
   * Even if enterSite() gets called from somewhere else,
   * it will refuse to enter until typing has completed.
   */
  if (entered || !canEnter) {
    return;
  }

  entered = true;

  /*
   * Disable intro entry immediately after
   * the first valid interaction.
   */
  canEnter = false;

  if (intro) {
    intro.classList.add("hidden");
  }

  if (video) {
    try {
      video.muted = false;

      video.volume = volumeSlider
        ? Number(volumeSlider.value)
        : 1;

      const playPromise =
        video.play();

      if (
        playPromise &&
        typeof playPromise.catch === "function"
      ) {
        playPromise.catch(() => {});
      }
    } catch (_) {}
  }

  setTimeout(() => {
    if (!card) {
      return;
    }

    card.classList.add("visible");

    setTimeout(() => {
      typeProfileName(
        "risk",
        revealButtons
      );
    }, 250);
  }, 150);
}

function handleIntroEnter(event) {
  /*
   * Before the typing animation is complete,
   * EVERY pointer interaction is ignored.
   */
  if (!canEnter || entered) {
    event.preventDefault();
    event.stopPropagation();

    return;
  }

  event.preventDefault();
  event.stopPropagation();

  enterSite();
}

/*
 * Use one pointer event instead of separately
 * listening for pointerdown + click + touchstart.
 *
 * This prevents duplicate entry events on phones.
 */
if (intro) {
  intro.addEventListener(
    "pointerdown",
    handleIntroEnter,
    {
      passive: false
    }
  );
}


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

let mouseX =
  window.innerWidth / 2;

let mouseY =
  window.innerHeight / 2;

let cursorX =
  window.innerWidth / 2;

let cursorY =
  window.innerHeight / 2;

let glowX =
  window.innerWidth / 2;

let glowY =
  window.innerHeight / 2;

document.addEventListener(
  "mousemove",
  event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
);

function animateCursor() {
  cursorX +=
    (mouseX - cursorX) * 0.35;

  cursorY +=
    (mouseY - cursorY) * 0.35;

  glowX +=
    (mouseX - glowX) * 0.12;

  glowY +=
    (mouseY - glowY) * 0.12;

  if (cursor) {
    cursor.style.left =
      cursorX + "px";

    cursor.style.top =
      cursorY + "px";
  }

  if (cursorGlow) {
    cursorGlow.style.left =
      glowX + "px";

    cursorGlow.style.top =
      glowY + "px";
  }

  requestAnimationFrame(
    animateCursor
  );
}

animateCursor();

$$(
  ".link, .confirm-actions button, .avatar, " +
  ".redirect-cancel-btn, .dc-modal-close, .dc-add-btn, " +
  ".tg-modal-close, .tg-add-btn, .tg-avatar-wrap, " +
  ".dc-avatar-wrap, .dc-modal-username, .tg-modal-username, " +
  ".rbx-modal-close, .rbx-avatar-wrap, .rbx-add-btn, .ctx-item"
).forEach(el => {
  el.addEventListener(
    "mouseenter",
    () => {
      if (!cursor) {
        return;
      }

      cursor.style.width = "24px";
      cursor.style.height = "24px";

      cursor.style.filter =
        "drop-shadow(0 0 6px rgba(255,255,255,.25))";
    }
  );

  el.addEventListener(
    "mouseleave",
    () => {
      if (!cursor) {
        return;
      }

      cursor.style.width = "20px";
      cursor.style.height = "20px";

      cursor.style.filter =
        "drop-shadow(0 0 3px rgba(255,255,255,.15))";
    }
  );
});


/* =========================================================
   VOLUME
   ========================================================= */

if (volumeSlider && video) {
  volumeSlider.addEventListener(
    "input",
    () => {
      video.volume =
        Number(volumeSlider.value);
    }
  );
}


/* =========================================================
   REDIRECT CONFIRMATION
   ========================================================= */

const confirmOverlay =
  $("#confirmOverlay");

const confirmBox =
  $("#confirmBox");

const redirectWrapper =
  $("#redirectWrapper");

const redirectText =
  $("#redirectText");

const redirectIcon =
  $("#redirectIcon");

const redirectCancelBtn =
  $("#redirectCancelBtn");

const cancelButton =
  $("#cancelButton");

const continueButton =
  $("#continueButton");

let pendingUrl = null;
let pendingName = "";
let pendingIcon = "";

let isRedirecting = false;
let countdownInterval = null;
let currentCountdown = 3;

function getOptimizedUrl(
  url,
  name
) {
  if (!isMobile || !url) {
    return url;
  }

  if (name === "Discord") {
    const match =
      url.match(/\/users\/(\d+)/);

    if (match) {
      return `discord://-/users/${match[1]}`;
    }
  }

  if (name === "Telegram") {
    const match =
      url.match(
        /t\.me\/([a-zA-Z0-9_]+)/
      );

    if (match) {
      return `tg://resolve?domain=${match[1]}`;
    }
  }

  if (name === "Roblox") {
    const match =
      url.match(/\/users\/(\d+)/);

    if (match) {
      return `roblox://navigation/profile?userId=${match[1]}`;
    }
  }

  return url;
}

function triggerRedirectPrompt(
  url,
  name,
  icon
) {
  if (!confirmOverlay || !confirmBox) {
    return;
  }

  pendingUrl =
    getOptimizedUrl(
      url,
      name
    );

  pendingName = name || "";
  pendingIcon = icon || "";

  confirmBox.style.opacity = "1";
  confirmBox.style.pointerEvents =
    "auto";

  if (redirectWrapper) {
    redirectWrapper.classList.remove(
      "visible"
    );
  }

  confirmOverlay.classList.add(
    "visible"
  );
}

$$("a.link").forEach(link => {
  link.addEventListener(
    "click",
    event => {
      if (isRedirecting) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      triggerRedirectPrompt(
        link.href,
        link.getAttribute(
          "data-name"
        ),
        link.getAttribute(
          "data-icon"
        )
      );
    }
  );
});

function resetConfirmationState() {
  isRedirecting = false;
  pendingUrl = null;
  pendingName = "";
  pendingIcon = "";

  clearInterval(
    countdownInterval
  );

  currentCountdown = 3;

  if (redirectWrapper) {
    redirectWrapper.classList.remove(
      "visible"
    );
  }

  if (confirmOverlay) {
    confirmOverlay.classList.remove(
      "visible"
    );
  }

  if (redirectIcon) {
    redirectIcon.src = "";
    redirectIcon.style.display =
      "none";
  }

  if (confirmBox) {
    setTimeout(() => {
      confirmBox.style.opacity = "1";
      confirmBox.style.pointerEvents =
        "auto";
    }, 200);
  }
}

if (cancelButton) {
  cancelButton.addEventListener(
    "click",
    () => {
      if (!isRedirecting) {
        resetConfirmationState();
      }
    }
  );
}

if (redirectCancelBtn) {
  redirectCancelBtn.addEventListener(
    "click",
    resetConfirmationState
  );
}

if (continueButton) {
  continueButton.addEventListener(
    "click",
    () => {
      if (
        !pendingUrl ||
        isRedirecting
      ) {
        return;
      }

      isRedirecting = true;

      if (confirmBox) {
        confirmBox.style.opacity = "0";
        confirmBox.style.pointerEvents =
          "none";
      }

      currentCountdown = 3;

      if (redirectIcon) {
        redirectIcon.src =
          pendingIcon || "";

        redirectIcon.style.display =
          pendingIcon
            ? "block"
            : "none";
      }

      if (redirectText) {
        redirectText.textContent =
          `Redirecting to ${pendingName} in ${currentCountdown}...`;
      }

      if (redirectWrapper) {
        redirectWrapper.classList.add(
          "visible"
        );
      }

      countdownInterval =
        setInterval(() => {
          currentCountdown--;

          if (currentCountdown > 0) {
            if (redirectText) {
              redirectText.textContent =
                `Redirecting to ${pendingName} in ${currentCountdown}...`;
            }
          } else {
            clearInterval(
              countdownInterval
            );

            window.location.href =
              pendingUrl;
          }
        }, 1000);
    }
  );
}

if (confirmOverlay) {
  confirmOverlay.addEventListener(
    "click",
    event => {
      if (
        event.target === confirmOverlay &&
        !isRedirecting
      ) {
        resetConfirmationState();
      }
    }
  );
}


/* =========================================================
   COPY USERNAME
   ========================================================= */

function copyUsername(
  text,
  toast
) {
  if (!text || !toast) {
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
      text.replace(/^@/, "")
    )
    .then(() => {
      toast.classList.add(
        "show"
      );

      setTimeout(() => {
        toast.classList.remove(
          "show"
        );
      }, 1800);
    })
    .catch(() => {});
}


/* =========================================================
   DISCORD
   ========================================================= */

const DISCORD_ID =
  "1547303503213367297";

const discordLinkBtn =
  $("#discordLinkBtn");

const dcModal =
  $("#dcModal");

const dcModalClose =
  $("#dcModalClose");

const dcAddBtn =
  $("#dcAddBtn");

const dcModalUsername =
  $("#dcModalUsername");

const dcCopyToast =
  $("#dcCopyToast");

const dcModalBadges =
  $("#dcModalBadges");

const DISCORD_BADGE_DEFS = [
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

function renderDiscordBadges(
  publicFlags
) {
  if (!dcModalBadges) {
    return;
  }

  dcModalBadges.replaceChildren();

  const currentBadges = [
    [
      "Discord Nitro",
      "https://raw.githubusercontent.com/dev-hoehle/discord-badges/main/png/nitro.png"
    ],
    [
      "Game Variety",
      "https://raw.githubusercontent.com/dev-hoehle/discord-badges/main/png/game_variety_adventurer.png"
    ]
  ];

  currentBadges.forEach(
    ([name, icon]) => {
      const img =
        document.createElement(
          "img"
        );

      img.className =
        "dc-badge";

      img.src = icon;
      img.alt = "";
      img.title = name;
      img.loading = "lazy";

      dcModalBadges.appendChild(
        img
      );
    }
  );

  const flags =
    Number(publicFlags) || 0;

  DISCORD_BADGE_DEFS.forEach(
    ([flag, name, icon]) => {
      if ((flags & flag) !== 0) {
        const img =
          document.createElement(
            "img"
          );

        img.className =
          "dc-badge";

        img.src = icon;
        img.alt = "";
        img.title = name;
        img.loading = "lazy";

        dcModalBadges.appendChild(
          img
        );
      }
    }
  );
}

if (
  discordLinkBtn &&
  dcModal
) {
  discordLinkBtn.addEventListener(
    "click",
    () => {
      fetchDiscordStatus();

      dcModal.classList.add(
        "visible"
      );
    }
  );
}

if (
  dcModalClose &&
  dcModal
) {
  dcModalClose.addEventListener(
    "click",
    () => {
      dcModal.classList.remove(
        "visible"
      );
    }
  );
}

if (dcModal) {
  dcModal.addEventListener(
    "click",
    event => {
      if (
        event.target === dcModal
      ) {
        dcModal.classList.remove(
          "visible"
        );
      }
    }
  );
}

if (dcAddBtn) {
  dcAddBtn.addEventListener(
    "click",
    () => {
      if (dcModal) {
        dcModal.classList.remove(
          "visible"
        );
      }

      if (discordLinkBtn) {
        triggerRedirectPrompt(
          discordLinkBtn.getAttribute(
            "data-href"
          ),
          discordLinkBtn.getAttribute(
            "data-name"
          ),
          discordLinkBtn.getAttribute(
            "data-icon"
          )
        );
      }
    }
  );
}

if (dcModalUsername) {
  dcModalUsername.addEventListener(
    "click",
    () => {
      copyUsername(
        dcModalUsername.textContent,
        dcCopyToast
      );
    }
  );
}

async function fetchDiscordStatus() {
  try {
    const response =
      await fetch(
        `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
      );

    const result =
      await response.json();

    if (!result.success) {
      return;
    }

    const data =
      result.data;

    const avatar =
      $("#dcModalAvatar");

    const statusDot =
      $("#dcModalStatusDot");

    const statusText =
      $("#dcModalStatusText");

    const actIcon =
      $("#dcModalActIcon");

    const actName =
      $("#dcModalActName");

    const actDesc =
      $("#dcModalActDesc");

    if (
      dcModalUsername &&
      data.discord_user
    ) {
      dcModalUsername.textContent =
        `@${data.discord_user.username}`;
    }

    if (
      avatar &&
      data.discord_user &&
      data.discord_user.avatar
    ) {
      avatar.src =
        `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.discord_user.avatar}.png?size=128`;
    }

    const status =
      data.discord_status ||
      "offline";

    if (statusDot) {
      statusDot.className =
        `dc-status-indicator ${status}`;
    }

    if (statusText) {
      statusText.textContent =
        status === "dnd"
          ? "Do Not Disturb"
          : status;
    }

    if (
      data.listening_to_spotify &&
      data.spotify
    ) {
      if (actIcon) {
        actIcon.style.display =
          "block";

        actIcon.src =
          data.spotify.album_art_url;
      }

      if (actName) {
        actName.textContent =
          data.spotify.song;
      }

      if (actDesc) {
        actDesc.style.display =
          "block";

        actDesc.textContent =
          `by ${data.spotify.artist}`;
      }

      return;
    }

    if (
      data.activities &&
      data.activities.length
    ) {
      const act =
        data.activities.find(
          a => a.type !== 4
        ) ||
        data.activities[0];

      if (
        act &&
        act.name
      ) {
        if (actName) {
          actName.textContent =
            act.name;
        }

        if (actDesc) {
          if (
            act.details ||
            act.state
          ) {
            actDesc.style.display =
              "block";

            actDesc.textContent =
              act.details ||
              act.state;
          } else {
            actDesc.style.display =
              "none";
          }
        }

        if (
          actIcon &&
          act.assets &&
          act.assets.large_image
        ) {
          actIcon.style.display =
            "block";

          if (
            act.assets.large_image.startsWith(
              "spotify:"
            )
          ) {
            actIcon.src =
              `https://i.scdn.co/image/${act.assets.large_image.replace(
                "spotify:",
                ""
              )}`;
          } else if (
            act.application_id
          ) {
            actIcon.src =
              `https://cdn.discordapp.com/app-assets/${act.application_id}/${act.assets.large_image}.png`;
          } else {
            actIcon.style.display =
              "none";
          }
        } else if (actIcon) {
          actIcon.style.display =
            "none";
        }

        return;
      }
    }

    if (actIcon) {
      actIcon.style.display =
        "none";
    }

    if (actName) {
      actName.textContent =
        "doing nothing right now...";
    }

    if (actDesc) {
      actDesc.style.display =
        "none";
    }
  } catch (_) {}
}


/* =========================================================
   TELEGRAM
   ========================================================= */

const telegramLinkBtn =
  $("#telegramLinkBtn");

const tgModal =
  $("#tgModal");

const tgModalClose =
  $("#tgModalClose");

const tgAddBtn =
  $("#tgAddBtn");

const tgModalUsername =
  $("#tgModalUsername");

const tgCopyToast =
  $("#tgCopyToast");

if (
  telegramLinkBtn &&
  tgModal
) {
  telegramLinkBtn.addEventListener(
    "click",
    () => {
      tgModal.classList.add(
        "visible"
      );
    }
  );
}

if (
  tgModalClose &&
  tgModal
) {
  tgModalClose.addEventListener(
    "click",
    () => {
      tgModal.classList.remove(
        "visible"
      );
    }
  );
}

if (tgModal) {
  tgModal.addEventListener(
    "click",
    event => {
      if (
        event.target === tgModal
      ) {
        tgModal.classList.remove(
          "visible"
        );
      }
    }
  );
}

if (tgAddBtn) {
  tgAddBtn.addEventListener(
    "click",
    () => {
      if (tgModal) {
        tgModal.classList.remove(
          "visible"
        );
      }

      if (telegramLinkBtn) {
        triggerRedirectPrompt(
          telegramLinkBtn.getAttribute(
            "data-href"
          ),
          telegramLinkBtn.getAttribute(
            "data-name"
          ),
          telegramLinkBtn.getAttribute(
            "data-icon"
          )
        );
      }
    }
  );
}

if (tgModalUsername) {
  tgModalUsername.addEventListener(
    "click",
    () => {
      copyUsername(
        tgModalUsername.textContent,
        tgCopyToast
      );
    }
  );
}


/* =========================================================
   ROBLOX
   ========================================================= */

const ROBLOX_USER_ID =
  "7626940077";

const ROBLOX_PROFILE_URL =
  "https://www.roblox.com/users/7626940077/profile";

const ROBLOX_API =
  "https://robloxapilmao.yukiriskingitfs.workers.dev/roblox/7626940077";

const robloxLinkBtn =
  $("#robloxLinkBtn");

const rbxModal =
  $("#rbxModal");

const rbxModalClose =
  $("#rbxModalClose");

const rbxAddBtn =
  $("#rbxAddBtn");

const rbxAvatar =
  $("#rbxAvatar");

const rbxModalUsername =
  $("#rbxModalUsername");

const rbxModalStatusText =
  $("#rbxModalStatusText");

const rbxFollowersCount =
  $("#rbxFollowerCount") ||
  $("#rbxFollowersCount");

const rbxFriendsCount =
  $("#rbxFriendCount") ||
  $("#rbxFriendsCount");

if (
  isMobile &&
  rbxModalClose
) {
  rbxModalClose.style.top =
    "10px";

  rbxModalClose.style.right =
    "10px";

  rbxModalClose.style.zIndex =
    "20";
}

async function loadRobloxData() {
  if (
    !rbxAvatar ||
    !rbxModalUsername ||
    !rbxModalStatusText ||
    !rbxFollowersCount ||
    !rbxFriendsCount
  ) {
    return;
  }

  rbxFollowersCount.textContent =
    "…";

  rbxFriendsCount.textContent =
    "…";

  try {
    const response =
      await fetch(
        ROBLOX_API,
        {
          cache: "no-store"
        }
      );

    if (!response.ok) {
      throw new Error(
        `Worker HTTP ${response.status}`
      );
    }

    const data =
      await response.json();

    if (data.avatar) {
      rbxAvatar.src =
        data.avatar;
    }

    rbxModalUsername.textContent =
      data.displayName ||
      data.username ||
      "80vcv";

    rbxModalStatusText.textContent =
      data.username
        ? `@${data.username}`
        : "@80vcv";

    rbxFollowersCount.textContent =
      typeof data.followers ===
      "number"
        ? data.followers.toLocaleString()
        : "N/A";

    rbxFriendsCount.textContent =
      typeof data.friends ===
      "number"
        ? data.friends.toLocaleString()
        : "N/A";
  } catch (error) {
    console.error(
      "Roblox Worker error:",
      error
    );

    rbxFollowersCount.textContent =
      "N/A";

    rbxFriendsCount.textContent =
      "N/A";
  }
}

if (
  robloxLinkBtn &&
  rbxModal
) {
  robloxLinkBtn.addEventListener(
    "click",
    () => {
      rbxModal.classList.add(
        "visible"
      );

      loadRobloxData();
    }
  );
}

if (
  rbxModalClose &&
  rbxModal
) {
  rbxModalClose.addEventListener(
    "click",
    () => {
      rbxModal.classList.remove(
        "visible"
      );
    }
  );
}

if (rbxModal) {
  rbxModal.addEventListener(
    "click",
    event => {
      if (
        event.target === rbxModal
      ) {
        rbxModal.classList.remove(
          "visible"
        );
      }
    }
  );
}

if (rbxAddBtn) {
  rbxAddBtn.addEventListener(
    "click",
    () => {
      if (rbxModal) {
        rbxModal.classList.remove(
          "visible"
        );
      }

      triggerRedirectPrompt(
        ROBLOX_PROFILE_URL,
        "Roblox",
        robloxLinkBtn
          ? robloxLinkBtn.getAttribute(
              "data-icon"
            )
          : ""
      );
    }
  );
}



/* =========================================================
   GITHUB
   ========================================================= */

const GITHUB_USERNAME = "datacenterproxy";
const GITHUB_PROFILE_URL = "https://github.com/datacenterproxy";

const githubLinkBtn = $("#githubLinkBtn");
const ghModal = $("#ghModal");
const ghCard = $("#ghCard");
const ghModalClose = $("#ghModalClose");
const ghViewBtn = $("#ghViewBtn");

const ghAvatar = $("#ghAvatar");
const ghDisplayName = $("#ghDisplayName");
const ghUsername = $("#ghUsername");
const ghBio = $("#ghBio");
const ghRepos = $("#ghRepos");
const ghFollowers = $("#ghFollowers");
const ghFollowing = $("#ghFollowing");
const ghLocation = $("#ghLocation");
const ghCompany = $("#ghCompany");
const ghJoined = $("#ghJoined");

async function loadGithubProfile() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`GitHub HTTP ${response.status}`);
    }

    const data = await response.json();

    if (ghAvatar && data.avatar_url) {
      ghAvatar.src = data.avatar_url;
    }

    if (ghDisplayName) {
      ghDisplayName.textContent =
        data.name || data.login || GITHUB_USERNAME;
    }

    if (ghUsername) {
      ghUsername.textContent =
        `@${data.login || GITHUB_USERNAME}`;
    }

    if (ghBio) {
      ghBio.textContent =
        data.bio || "No GitHub bio set.";
    }

    if (ghRepos) {
      ghRepos.textContent =
        Number(data.public_repos || 0).toLocaleString();
    }

    if (ghFollowers) {
      ghFollowers.textContent =
        Number(data.followers || 0).toLocaleString();
    }

    if (ghFollowing) {
      ghFollowing.textContent =
        Number(data.following || 0).toLocaleString();
    }

    if (ghLocation) {
      if (data.location) {
        ghLocation.textContent = `📍 ${data.location}`;
        ghLocation.style.display = "block";
      } else {
        ghLocation.style.display = "none";
      }
    }

    if (ghCompany) {
      if (data.company) {
        ghCompany.textContent = `🏢 ${data.company}`;
        ghCompany.style.display = "block";
      } else {
        ghCompany.style.display = "none";
      }
    }

    if (ghJoined) {
      if (data.created_at) {
        const date = new Date(data.created_at);
        ghJoined.textContent =
          `Joined GitHub ${date.toLocaleDateString(undefined, {
            month: "long",
            year: "numeric"
          })}`;
      } else {
        ghJoined.textContent = "";
      }
    }
  } catch (_) {
    if (ghDisplayName) {
      ghDisplayName.textContent = GITHUB_USERNAME;
    }

    if (ghUsername) {
      ghUsername.textContent = `@${GITHUB_USERNAME}`;
    }

    if (ghBio) {
      ghBio.textContent = "GitHub profile preview unavailable.";
    }

    if (ghRepos) ghRepos.textContent = "—";
    if (ghFollowers) ghFollowers.textContent = "—";
    if (ghFollowing) ghFollowing.textContent = "—";
  }
}

if (githubLinkBtn && ghModal) {
  githubLinkBtn.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    loadGithubProfile();
    ghModal.classList.add("visible");
  });
}

if (ghModalClose && ghModal) {
  ghModalClose.addEventListener("click", () => {
    ghModal.classList.remove("visible");
  });
}

if (ghModal) {
  ghModal.addEventListener("click", event => {
    if (event.target === ghModal) {
      ghModal.classList.remove("visible");
    }
  });
}

if (ghViewBtn) {
  ghViewBtn.addEventListener("click", () => {
    if (ghModal) {
      ghModal.classList.remove("visible");
    }

    triggerRedirectPrompt(
      GITHUB_PROFILE_URL,
      "GitHub",
      githubLinkBtn
        ? githubLinkBtn.getAttribute("data-icon")
        : ""
    );
  });
}


/* =========================================================
   CUSTOM CONTEXT MENU
   ========================================================= */

const customCtxMenu =
  $("#customCtxMenu");

const ctxToggleAudio =
  $("#ctxToggleAudio");

const ctxAudioLabel =
  $("#ctxAudioLabel");

const ctxReloadPage =
  $("#ctxReloadPage");

if (customCtxMenu) {
  document.addEventListener(
    "contextmenu",
    event => {
      event.preventDefault();

      const x =
        Math.min(
          event.clientX,
          window.innerWidth - 180
        );

      const y =
        Math.min(
          event.clientY,
          window.innerHeight - 130
        );

      customCtxMenu.style.left =
        `${x}px`;

      customCtxMenu.style.top =
        `${y}px`;

      if (ctxAudioLabel) {
        ctxAudioLabel.textContent =
          video && video.paused
            ? "Play Audio"
            : "Pause Audio";
      }

      customCtxMenu.classList.add(
        "visible"
      );
    }
  );

  document.addEventListener(
    "click",
    event => {
      if (
        !customCtxMenu.contains(
          event.target
        )
      ) {
        customCtxMenu.classList.remove(
          "visible"
        );
      }
    }
  );
}

if (ctxToggleAudio) {
  ctxToggleAudio.addEventListener(
    "click",
    () => {
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }

      if (customCtxMenu) {
        customCtxMenu.classList.remove(
          "visible"
        );
      }
    }
  );
}

if (ctxReloadPage) {
  ctxReloadPage.addEventListener(
    "click",
    () => {
      window.location.reload();
    }
  );
}


/* =========================================================
   CARD TILT
   ========================================================= */

function setupTilt(
  selector,
  maxTilt,
  scale
) {
  const el =
    $(selector);

  if (!el) {
    return;
  }

  const glare =
    el.querySelector(
      ".card-glare"
    );

  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;

  let hovered = false;

  el.style.transformStyle =
    "preserve-3d";

  window.addEventListener(
    "mousemove",
    event => {
      if (!entered) {
        return;
      }

      const rect =
        el.getBoundingClientRect();

      const centerX =
        rect.left +
        rect.width / 2;

      const centerY =
        rect.top +
        rect.height / 2;

      const x =
        (event.clientX - centerX) /
        (window.innerWidth / 2);

      const y =
        (event.clientY - centerY) /
        (window.innerHeight / 2);

      targetX =
        y * -maxTilt;

      targetY =
        x * maxTilt;

      const insideX =
        (event.clientX -
          rect.left) /
        rect.width;

      const insideY =
        (event.clientY -
          rect.top) /
        rect.height;

      if (
        insideX >= 0 &&
        insideX <= 1 &&
        insideY >= 0 &&
        insideY <= 1
      ) {
        hovered = true;

        if (glare) {
          glare.style.opacity =
            "1";

          glare.style.background =
            `radial-gradient(circle at ${
              insideX * 100
            }% ${
              insideY * 100
            }%, rgba(255, 255, 255, 0.28), transparent 60%)`;
        }
      } else {
        hovered = false;

        if (glare) {
          glare.style.opacity =
            "0";
        }
      }
    }
  );

  document.addEventListener(
    "mouseleave",
    () => {
      targetX = 0;
      targetY = 0;
      hovered = false;

      if (glare) {
        glare.style.opacity =
          "0";
      }
    }
  );

  function update() {
    currentX +=
      (targetX - currentX) *
      0.12;

    currentY +=
      (targetY - currentY) *
      0.12;

    if (entered) {
      const s =
        hovered
          ? scale
          : 1;

      el.style.transform =
        `rotateX(${currentX.toFixed(
          2
        )}deg) rotateY(${currentY.toFixed(
          2
        )}deg) scale3d(${s}, ${s}, 1)`;
    }

    requestAnimationFrame(
      update
    );
  }

  update();
}

setupTilt(
  "#card",
  16,
  1.025
);

setupTilt(
  "#dcCard",
  14,
  1.02
);

setupTilt(
  "#tgCard",
  14,
  1.02
);

setupTilt(
  "#rbxCard",
  14,
  1.02
);


/* =========================================================
   PROFILE PICTURE VIEWER
   ========================================================= */

const pfpViewer =
  document.getElementById(
    "pfpViewer"
  );

const pfpViewerImage =
  document.getElementById(
    "pfpViewerImage"
  );

const pfpViewerClose =
  document.getElementById(
    "pfpViewerClose"
  );

let pfpScale = 1;
let pfpStartDistance = 0;

function openPfpViewer(img) {
  if (
    !img ||
    !img.src ||
    !pfpViewer ||
    !pfpViewerImage
  ) {
    return;
  }

  pfpViewerImage.src =
    img.src;

  pfpViewerImage.classList.remove(
    "zoomed"
  );

  pfpScale = 1;

  pfpViewerImage.style.transform =
    "scale(1)";

  pfpViewer.classList.add(
    "active"
  );
}

function closePfpViewer() {
  if (
    !pfpViewer ||
    !pfpViewerImage
  ) {
    return;
  }

  pfpViewer.classList.remove(
    "active"
  );

  pfpViewerImage.src = "";
}

[
  "avatarBtn",
  "dcAvatarWrap",
  "tgAvatarBtn",
  "rbxAvatarWrap"
].forEach(id => {
  const el =
    document.getElementById(
      id
    );

  if (el) {
    el.addEventListener(
      "click",
      event => {
        const img =
          el.querySelector(
            "img"
          );

        if (img) {
          event.stopPropagation();

          openPfpViewer(img);
        }
      }
    );
  }
});

if (pfpViewerClose) {
  pfpViewerClose.addEventListener(
    "click",
    closePfpViewer
  );
}

if (pfpViewer) {
  pfpViewer.addEventListener(
    "click",
    event => {
      if (
        event.target === pfpViewer
      ) {
        closePfpViewer();
      }
    }
  );
}

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "Escape") {
      closePfpViewer();
    }
  }
);

if (pfpViewerImage) {
  pfpViewerImage.addEventListener(
    "dblclick",
    () => {
      pfpViewerImage.classList.toggle(
        "zoomed"
      );

      pfpScale =
        pfpViewerImage.classList.contains(
          "zoomed"
        )
          ? 2
          : 1;

      pfpViewerImage.style.transform =
        `scale(${pfpScale})`;
    }
  );

  pfpViewerImage.addEventListener(
    "wheel",
    event => {
      event.preventDefault();

      pfpScale =
        Math.min(
          4,
          Math.max(
            1,
            pfpScale +
              (event.deltaY < 0
                ? 0.2
                : -0.2)
          )
        );

      pfpViewerImage.classList.toggle(
        "zoomed",
        pfpScale > 1
      );

      pfpViewerImage.style.transform =
        `scale(${pfpScale})`;
    },
    {
      passive: false
    }
  );

  pfpViewerImage.addEventListener(
    "touchstart",
    event => {
      if (
        event.touches.length === 2
      ) {
        pfpStartDistance =
          Math.hypot(
            event.touches[0].clientX -
              event.touches[1].clientX,

            event.touches[0].clientY -
              event.touches[1].clientY
          );
      }
    },
    {
      passive: true
    }
  );

  pfpViewerImage.addEventListener(
    "touchmove",
    event => {
      if (
        event.touches.length !== 2 ||
        !pfpStartDistance
      ) {
        return;
      }

      event.preventDefault();

      const distance =
        Math.hypot(
          event.touches[0].clientX -
            event.touches[1].clientX,

          event.touches[0].clientY -
            event.touches[1].clientY
        );

      pfpScale =
        Math.min(
          4,
          Math.max(
            1,
            pfpScale *
              (distance /
                pfpStartDistance)
          )
        );

      pfpStartDistance =
        distance;

      pfpViewerImage.classList.toggle(
        "zoomed",
        pfpScale > 1
      );

      pfpViewerImage.style.transform =
        `scale(${pfpScale})`;
    },
    {
      passive: false
    }
  );

  pfpViewerImage.addEventListener(
    "touchend",
    event => {
      if (
        event.touches.length < 2
      ) {
        pfpStartDistance = 0;
      }
    }
  );
}


/* =========================================================
   START
   ========================================================= */

startIntroSequence();
