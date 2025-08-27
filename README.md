# 🩹 Antechamber Bandaid

### *Made for fellow taskers with love by @villagealchemist* (@mjohnson1307 on Outlier if you have any questions!)


---

## ✨ What is this?

This is a tiny magical patch 🧙‍♀️🔮 that smooths over the bugs in the Antechamber task interface. It prevents the page from hanging or freezing when expanding/copying JSON responses, letting you finish tasks without frustration.

---

## ⚖️ Disclaimer

* I am **not affiliated** with the platform or its developers in any way! I am simply a fellow tasker like you, sharing what worked for me. 💫
* Use at your own risk. This doesn’t alter tasks or answers... it only makes the site usable.
* No guarantees, but it’s been stable in my testing.

---

## 🧪 Installation Options

### Option 1 — Tampermonkey (Recommended)

1. Add the [Tampermonkey extension](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo?utm_source=item-share-cb) to Chrome.
2. Click this link to add the script: [Install Bandaid Script](https://raw.githubusercontent.com/villagealchemist/antechamber_bandaid/main/antechamber_bandaid.user.js) 🧙‍♀️
3. Done! The script will auto-run whenever you open a task.

### Option 2 — Bookmarklet (Quick & Dirty)

1. Create a new bookmark in Chrome.
2. Paste the following code into the URL field:

   ```js
   javascript:(function(){/* your script here */})();
   ```
3. Click the bookmark whenever you load a task page to apply the patch.

### Option 3 — Dev Console (Temporary)

1. Open the task page.
2. Press **F12** (or **Cmd+Opt+I** on Mac) to open DevTools.
3. Go to the **Console** tab.
4. Paste the snippet and press Enter.

   * To confirm it’s there: look for a confirmation message in the console like `✅ Antechamber bandaid applied!`
5. Note: You’ll need to re-run this each time you refresh.

---

## 🔮 Recommended Usage

To get the smoothest experience when running Outlier tasks:

- 🧙 **Dedicated Chrome Profile (Preferred)**:
    - Create a separate Chrome profile just for Outlier.
    - Install Tampermonkey + this script once and it will always be there.
    - In Chrome settings for that profile, disable persistence of cache/cookies so it behaves like Guest mode automatically.
    - This way, you get a fresh session every time without needing to manually clear anything.


- 🧹 **Chrome Guest Profile**:
    - Opens with a *completely clean cache* every time.
    - Best for avoiding any weird leftover data between tasks.
    - Downside: extensions (like Tampermonkey) do **not** persist — you’d need to reinstall each session.

⚡ Pro tip: Use **Guest mode** only if you suspect something funky with your cache.  
Otherwise, stick to a dedicated profile so your 🩹 bandaid script always runs without extra setup.


---

## 🌙 Final Notes

This is a community-driven patch born of necessity. Use it, share it, remix it... just don’t let the bugs stop your flow (... of CASH MONAY). 

Together we keep the monetary magic alive. 🔮
