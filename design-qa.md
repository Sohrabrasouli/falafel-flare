**Source Visual Truth**

- Path: `/Users/froghsediqi/.codex/generated_images/019fd10c-8976-7b22-889d-196faf573173/exec-7f9485ad-c9a5-4f10-b3d7-e387ef1ddee8.png`
- Selected concept: option 1, cinematic glass.
- Latest user correction: the entire hero background must be one slow moving sequence—outside, inside, menu and dishes—rather than a static storefront plus a separate food window.
- Source pixels: 1487 × 1058. The ideation brief targeted a 1440 × 1024 desktop composition.

**Implementation Evidence**

- Local implementation: `http://localhost:3001/`
- Screenshot: `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/hero-motion-full-bleed-1280x720.png`
- Browser viewport: 1280 × 720 CSS pixels.
- Implementation pixels: 1280 × 720.
- State: hydrated local home hero, first scene active, motion running.
- Normalization: the source is a taller art-direction board rather than an exact browser viewport. The source and implementation were opened together and compared by visible composition, hierarchy, crop, spacing, tokens, typography and first-screen content.

**Full-View Comparison Evidence**

- The revised hero preserves the source's compact black header, smoked-glass message, immediate order and directions actions, verified hours/address and moving one-line category rail.
- The split image treatment was intentionally replaced after the user's correction. Each scene now occupies the complete hero background.
- Eight supplied restaurant scenes dissolve one by one: day storefront, night storefront, dining room, counter/menu board, falafel, mixed platter, pizza and dessert case.
- Every frame has continuous slow pan/zoom movement. The 2.2-second dissolves and 7.2-second scene timing keep the sequence cinematic rather than frantic.
- The glass copy stays fixed and readable while imagery changes behind it. A restrained full-frame shade maintains contrast without hiding the restaurant.
- No video, generic stock, generated food, CSS illustration, custom SVG or placeholder asset is used.

**Focused Region Evidence**

- The menu-board frame was separately captured in the browser. The upper menu remains visible across the frame while the message panel occupies the quieter lower-left area.
- The dining-room and falafel frames were separately captured to verify full-bleed crops, text contrast and scene labels.
- A separate static crop was not required because the 1280 × 720 capture keeps the logo, headline, supporting copy, buttons, business details, motion control, scene timeline and category rail readable at review scale.

**Required Fidelity Surfaces**

- Fonts and typography: Avenir/Avenir Next with system fallbacks preserves the geometric, direct tone. The headline remains compact and untruncated at the inspected viewport.
- Spacing and layout rhythm: header, full-bleed hero and category rail fit together within the first desktop screen. The glass retains stable alignment across all scenes.
- Colors and visual tokens: near-black, flame orange, warm cream, muted brown and translucent glass remain faithful to the restaurant identity and selected direction.
- Image quality and asset fidelity: all scenes use supplied restaurant photography with frame-specific desktop and phone focal points. The real counter/menu and dessert-case photos are included because the corrected brief explicitly asks the hero to show menu and interior details.
- Copy and content: language remains direct and non-salesy. Unsupported claims such as halal, authentic, fresh, family-owned or best are absent.

**Findings**

- No actionable P0, P1 or P2 findings remain.
- P3 test gap: the in-app browser capture surface is fixed at 1280 × 720, and browser policy rejected a temporary narrow-viewport harness. The 820, 540 and 370 pixel CSS compositions and frame-specific mobile focal points were reviewed in code, but this iteration does not add a separate mobile browser screenshot.

**Comparison History**

1. The earlier split composition was a P1 mismatch with the user's clarified motion requirement. It was replaced with one full-bleed scene stack spanning the complete hero.
2. The earlier three-image loop was a P1 content mismatch. It was expanded to eight ordered restaurant scenes covering exterior, interior, menu, dishes and desserts.
3. The first motion implementation allowed the active CSS drift to continue after scene switching was paused. The hero now pauses both scene timing and every image transform, then resumes both together. Browser evidence confirmed that the label and transform matrix remain unchanged after 7.6 seconds while paused.
4. The final source-and-implementation comparison found no new P0, P1 or P2 visual issues.

**Primary Interactions Tested**

- Eight-scene automatic advance.
- Slow movement on every full-background frame.
- Pause holds the active scene and image transform; Resume is displayed correctly.
- All eight hero images load successfully.
- Counter/menu-board crop remains legible behind the glass composition.
- One-page navigation and customer actions remain present.
- Browser console errors: none from the revised local page.
- Lint, seven rendered-content tests and the GitHub Pages export test pass.

**Implementation Checklist**

- [x] Replace the split hero with full-background cinematic scenes.
- [x] Sequence outside, inside, menu, dishes and desserts one by one.
- [x] Give every frame slow pan/zoom motion and a soft dissolve.
- [x] Keep the glass copy stable and readable.
- [x] Preserve pause/resume and reduced-motion behavior.
- [x] Use only supplied restaurant imagery.
- [x] Pass lint, route tests and Pages export tests.

**Follow-up Polish**

- P3: capture dedicated phone and tablet browser screenshots when the selected browser exposes viewport resizing.

final result: passed

---

## Real-video brightness correction - August 5, 2026

**Observed problem**

- The eight-scene still-image sequence changed slowly and simulated camera movement;
  it did not satisfy the request for genuine, lively video.
- The full-frame shade and dark message panel made the imagery feel dim.

**Correction**

- Replaced the simulated still sequence with three real Falafel Flare food clips:
  mixed platter, burger and gyro wrap.
- Each clip advances on its own ending, creating a natural two-to-five-second pace.
- Reduced the global shade and panel opacity, and brightened both the video and its
  soft full-width backdrop.
- Excluded the fourth available clip because identifiable customers are visible and
  no release approval is recorded.

**Verified evidence**

- Three video elements load; the active clip is playing and its time advances.
- The sequence advanced from clip 01 to clip 02 after clip 01 ended.
- Pause held playback at the same timestamp; Play resumed playback.
- A fresh browser load had no console errors and no horizontal overflow.
- ESLint, production build, seven rendered-content tests, GitHub Pages export and the
  Pages export test all pass.
- Comparison image:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/real-motion-public-2026-08-05/03-before-after.png`.

final result: passed for the shareable review concept; final commercial media approval remains open

---

## Crystal-glass, full-frame correction - August 5, 2026

**Source visual truth**

- Layout reference:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/hero-motion-full-bleed-1280x720.png`
- User correction: preserve the clear glass message cluster, make the background
  visibly clear, and show the entire video frame instead of cropping it into a close-up.
- Before-state capture:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/crystal-glass-correction-2026-08-05/01-before-mobile.png`

**Implementation evidence**

- Desktop capture:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/crystal-glass-correction-2026-08-05/03-after-desktop-crystal-glass.png`
- Mobile capture:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/crystal-glass-correction-2026-08-05/02-after-mobile-crystal-glass.png`
- Desktop viewport and pixels: 1280 x 720 CSS pixels, 1280 x 720 capture.
- Mobile viewport and pixels: 419 x 643 CSS pixels, 419 x 643 capture,
  device scale reported as 2.4 by the in-app surface.
- State: hydrated home hero, real video playing, first clip visible.

**Full-view comparison evidence**

- Combined reference and implementation:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/crystal-glass-correction-2026-08-05/05-reference-implementation-desktop.jpg`
- The reference's left-side glass cluster and unobstructed scene hierarchy are
  preserved. The revised cluster is smaller, lighter and more transparent.
- The vertical source video is displayed with `object-fit: contain`; its complete
  frame is visible. A bright, softly blurred version of the approved poster fills
  unused horizontal space instead of stretching or cropping the footage.

**Focused-region comparison evidence**

- Combined mobile before and after:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/crystal-glass-correction-2026-08-05/04-before-after-mobile.jpg`
- Before: the opaque 388-pixel-wide message card occupied most of the visible food
  scene and the video used `cover`, cropping the vertical frame.
- After: the 292-pixel-wide crystal-glass cluster is approximately 216 pixels tall,
  the mobile action buttons remain in the fixed dock, and the full video frame stays
  visible around and through the message.

**Required fidelity surfaces**

- Fonts and typography: the established Avenir family is unchanged. The headline
  scale is reduced only inside the hero so the glass cluster does not dominate.
- Spacing and layout rhythm: desktop content remains on the blurred left field while
  the complete video sits clear of it; mobile content is compact and bottom-left.
- Colors and visual tokens: Falafel Flare black, cream and flame orange are unchanged.
  Glass opacity, blur and global shade were reduced to reveal the footage.
- Image quality: no source video is stretched or cropped; brightness is increased
  without replacing the restaurant footage.
- Copy and content: the approved message and verified menu statement are unchanged.
  Mobile ordering and directions remain immediately available in the action dock.

**Comparison history**

1. P1: the prior mobile card covered most of the food scene. Fixed by removing its
   duplicated mobile actions and business-detail line, reducing its width and type,
   and converting the surface to low-opacity crystal glass.
2. P1: `object-fit: cover` cropped the mobile video. Fixed with `contain`, centered
   framing and a bright poster-derived backdrop that fills the remaining space.
3. P2: the former global shade and panel made the footage dim. Both were reduced;
   the video and backdrop were brightened and visually rechecked.

**Primary interactions tested**

- Three real videos load and play.
- Clip 01 advances to clip 02.
- Pause freezes the exact timestamp; Play resumes.
- No horizontal overflow at 1280 x 720 or 419 x 643.
- Fresh browser console: zero error-level messages.
- ESLint, production build, seven route/content tests, GitHub Pages export and the
  export test all pass.

**Follow-up polish**

- P3: replace the temporary vertical review clips with owner-approved horizontal and
  vertical masters when the restaurant provides them. The current contain treatment
  intentionally preserves every source pixel.

final result: passed
