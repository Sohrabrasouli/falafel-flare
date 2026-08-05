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

## Full-width desktop motion correction - August 5, 2026

**Source visual truth**

- Exact user-supplied desktop screenshot:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/desktop-full-motion-correction-2026-08-05/01-user-desktop-evidence.png`
- Source pixels: 2872 x 1588. The screenshot shows the public site with the third
  vertical clip active, a narrow center-right video and large empty brown fields.
- User intent: preserve the complete video, make the entire hero feel alive, keep the
  glass message integrated with the scene and eliminate the dead desktop background.

**Implementation evidence**

- Desktop implementation:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/desktop-full-motion-correction-2026-08-05/02-after-desktop-full-motion.jpg`
- Mobile implementation:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/desktop-full-motion-correction-2026-08-05/03-after-mobile-full-motion.jpg`
- Desktop viewport and capture: 1280 x 720 CSS pixels, 1280 x 720 pixels, DPR 1.
- Mobile viewport and capture: 419 x 643 CSS pixels, 419 x 643 pixels, DPR 1.
- State: hydrated hero, first clip playing in synchronized background and foreground
  layers.

**Full-view comparison evidence**

- Same-input comparison:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/desktop-full-motion-correction-2026-08-05/04-desktop-before-after.jpg`
- The before state isolates the food in a narrow phone-video strip and leaves most of
  the hero as solid brown. The corrected state uses the same moving footage across the
  entire background while retaining one sharp, uncropped foreground frame.
- The glass cluster now sits on the moving food field instead of an unrelated solid
  panel. It is narrower, more transparent and uses less blur.

**Focused-region comparison evidence**

- The full-view comparison is sufficient for this correction because the defect is
  the hero's large-region proportion and background treatment. The headline, buttons,
  address line, motion control and clip label are readable at comparison scale.

**Required fidelity surfaces**

- Fonts and typography: established Avenir family, weights and hierarchy remain
  unchanged; the hero headline is slightly smaller to keep the glass subordinate.
- Spacing and layout rhythm: the sharp video remains complete and clear of the message;
  background motion fills both former dead columns.
- Colors and visual tokens: Falafel Flare orange, black and cream remain unchanged.
  The moving background supplies real food color instead of a flat invented fill.
- Image quality: both visible layers use the same real source video. The background is
  intentionally softened; the foreground is sharp and uses `contain` with no crop.
- Copy and content: no wording, verified business fact or customer action changed.

**Comparison history**

1. P1: desktop displayed two enormous brown fields around a narrow phone video. Fixed
   by synchronizing a full-width `cover` layer behind the complete `contain` layer.
2. P1: using only `cover` would have repeated the original crop problem. The sharp
   foreground remains `contain`, so the source frame is preserved in full.
3. P2: the glass message felt separate from the food and too heavy. Its maximum width,
   fill opacity and backdrop blur were reduced and visually rechecked.
4. P2: an initial 18-pixel background blur read as an abstract wash. It was reduced to
   10 pixels on desktop and 9 pixels on phones, keeping movement and food color visible.

**Primary interactions verified before publication**

- Both layers stayed within 0.003 seconds through the clip-01 to clip-02 change.
- Pause froze both timestamps; Play resumed both within 0.001 seconds.
- Phone at 419 x 643 and desktop at 1280 x 720 have no horizontal overflow.
- ESLint, production build, 7/7 route/content tests, GitHub Pages export and the
  export test pass.
- A fresh browser console has zero error-level messages.

**Follow-up polish**

- P3: owner-supplied horizontal footage would eventually replace the softened fill.
  Until then, this dual-layer treatment preserves the complete available footage and
  avoids false or stock material.

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

---

## Shadow-plate removal - August 5, 2026

**Source visual truth**

- Sohrab's desktop evidence showed that the translucent message plate still read as a
  dark shadow and visually divided the food image.
- User evidence:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/shadow-plate-removal-2026-08-05/01-before-user-desktop.png`

**Implementation evidence**

- Desktop after, 1280 x 720, clip 01 playing:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/shadow-plate-removal-2026-08-05/02-after-desktop-no-plate.jpg`
- Mobile after, 390 x 844:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/shadow-plate-removal-2026-08-05/03-after-mobile-no-plate.jpg`
- Same-viewport, same-clip desktop comparison:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/shadow-plate-removal-2026-08-05/04-before-after-desktop.jpg`

**Visible correction**

- The message container now has no background, border, radius, box shadow, inset
  highlight, blur or saturation filter.
- Its orange divider and the full-frame shade were removed as well. The words and
  actions sit directly on the moving picture instead of inside a separate plate.
- The sharp `contain` video and synchronized full-width moving backdrop remain intact.
- Desktop and phone have no horizontal overflow. The active foreground and background
  videos were playing in sync during inspection.

**Verification**

- Computed browser styles confirm a transparent background, `box-shadow: none`,
  `backdrop-filter: none`, zero border and a transparent full-frame shade.
- ESLint, production build and 8/8 content tests pass with a new regression test for
  the absence of the message plate. The GitHub Pages export and export test pass.

final result: passed

---

## Clear full-width motion correction - August 5, 2026

**Observed problem**

- Sohrab's latest desktop screenshot showed two separate effects: an older cached
  glass plate and a deliberately blurred full-width support layer. Even after the
  plate was removed, that support layer could still make half the hero look shadowed.

**Correction**

- The full-width moving layer is now opaque and clear: no blur and no softening scale.
- Only restrained brightness, saturation and contrast adjustments remain. The sharp
  complete vertical video still plays above it, preserving the full available frame.
- The copy remains directly on the film with no plate, border, shadow or shade.

**Evidence**

- Local clear-motion capture, 1280 x 720:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/shadow-plate-removal-2026-08-05/06-local-clear-full-motion.jpg`
- Computed styles confirm opacity `1` and no `blur()` on the full-width video.
- Desktop overflow is absent and both active video layers continue playing.
- ESLint, production build, 8/8 content tests, GitHub Pages export and export test pass.

final result: passed

---

## First approved desktop direction restored - August 5, 2026

**Observed regression**

- The rejected public desktop combined a zoomed full-width copy of each portrait clip
  with a second sharp portrait strip. That created visible seams, duplicated imagery
  and a phone-shaped focal area in the middle of a desktop screen.
- User evidence:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/first-direction-restoration-2026-08-05/01-current-desktop-failure.png`
- The exact first approved direction was recovered from the earlier build checkpoint:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/first-direction-restoration-2026-08-05/02-first-approved-direction.png`

**Restoration**

- Restored the original eight-scene full-bleed sequence: storefront, storefront at
  night, dining room, counter and menu, falafel, mixed platters, pizza and dessert.
- Every scene is one sharp desktop image with its own focal point. There is no
  duplicate background, center phone strip, blur or seam.
- The later approved copy correction remains: the message sits directly on the image
  with no glass plate, shadow, border, blur or full-frame shade.

**Visual evidence**

- Restored desktop, 1280 x 720:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/first-direction-restoration-2026-08-05/03-restored-local-desktop.jpg`
- All eight restored desktop scenes:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/first-direction-restoration-2026-08-05/04-restored-eight-scene-contact-sheet.jpg`
- Real phone width, 390 x 844:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/first-direction-restoration-2026-08-05/05-restored-mobile.jpg`

**Verification**

- All eight image files loaded and advanced in the approved order in the browser.
- Desktop and phone both have zero horizontal overflow.
- Computed styles confirm a transparent message, no box shadow, no backdrop blur,
  zero border and no image blur.
- ESLint, production build, 8/8 content tests, GitHub Pages export and export test pass.

final result: passed

---

## Faster scene rhythm and connected messages - August 5, 2026

**Authorized change only**

- Scene duration changed from 7.2 seconds to 3.8 seconds.
- The existing 2.2-second dissolve, imagery, layout, permanent headline, colors,
  actions, focal points and motion treatment remain unchanged.
- The small numbered scene labels now extend “One table. Different appetites.” with
  eight short human thoughts: Come as you are; There's room for you; Settle in
  together; Everyone gets a choice; Start with falafel; Pass the platter; Pizza
  belongs here too; Save room for something sweet.

**Evidence**

- Local desktop capture:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/scene-speed-messages-2026-08-05/local-desktop.jpg`
- Follow-up timed scene:
  `/Users/froghsediqi/Desktop/AI Studio/Client - Falafel Flare/06_QA/scene-speed-messages-2026-08-05/local-desktop-next.jpg`
- Browser inspection confirms eight images, updated labels, automatic scene advance
  and no horizontal overflow.
- ESLint, production build, 8/8 content tests, GitHub Pages export and export test pass.

final result: passed
