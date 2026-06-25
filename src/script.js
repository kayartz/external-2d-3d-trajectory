/* ============================================================
   Exp 5 — Wan 2.2 Fun Camera (external trajectory coordinates)
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit `id` per card for its own clip.
   `traj` sets the source label shown in the caption:
     "After Effect Trajectory" or "Blender Trajectory".
   `fail: true` shows a red FAIL marker after the caption.
   ============================================================ */
 
const YT_ID1 = "NwjqVDY7qxQ";
const YT_ID2 = "5SWHMHrENkI";
const YT_ID3 = "Xw_EaU-OOBw";
const YT_ID4 = "ybAehi6sxr0";
const YT_ID5 = "M_KHQkRuJEM";
const YT_ID6 = "wdPaZufGdZ8";
const YT_ID7 = "JPeSjNVN9JQ";
const YT_ID8 = "VlAekDUMRgs";
const YT_ID9 = "OLhjg7vW8Xg";
const YT_ID10 = "DWopfgk1GjE";
const YT_ID11 = "ly4x4kI1Ckw";
const YT_ID12 = "SQmQ6_gaf3k";
const YT_ID13 = "3goXpX369rA";
const YT_ID14 = "9PHc3oct8Yg";
// shared link for all boxes
const AE   = "After Effect Trajectory";
const BLEN = "Blender Trajectory";
 
const videos = [
  { title: "static path AE_trajectory",   term: "static shot", traj: AE,   id: YT_ID1 },
  { title: "panLeft path AE_trajectory",  term: "Pan Left",    traj: AE,   id: YT_ID2 },
  { title: "panRight path AE_trajectory", term: "Pan Right",   traj: AE,   id: YT_ID3 },
  { title: "zoomin path AE_trajectory",   term: "Zoom In",     traj: AE,   id: YT_ID4 },
 
  { title: "zoomOut path AE_trajectory",  term: "Zoom Out",    traj: AE,   id: YT_ID5 },
  { title: "TiltUp path AE_trajectory",   term: "Tilt Up",     traj: AE,   id: YT_ID6 },
  { title: "TiltDown path AE_trajectory", term: "Tilt Down",   traj: AE,   id: YT_ID7 },
  { title: "handheld path blender",       term: "Handheld",    traj: BLEN, id: YT_ID8, fail: true },
 
  { title: "dollyIn path blender",        term: "Dolly In",    traj: BLEN, id: YT_ID9 },
  { title: "dollyOut path blender",       term: "Dolly Out",   traj: BLEN, id: YT_ID10 },
  { title: "dollyLeft path blender",      term: "Dolly Left",  traj: BLEN, id: YT_ID11 },
  { title: "dollyRight path blender",     term: "Dolly Right", traj: BLEN, id: YT_ID12 },
  
  { title: "FPVdrone path blender",      term: "FPV drone",  traj: BLEN, id: YT_ID13 },
  { title: "Snorricam path blender",     term: "Snorricam", traj: BLEN, id: YT_ID14, fail: true },
];
 
const grid = document.getElementById("grid");
 
videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";
 
  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;
 
  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: Wan 2.2 Fun Camera — ${v.term}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">
      Wan 2.2 with Fun Camera (${v.traj})<br>
      <span class="redhint">(with camera movement term</span>
      "<span class="term">${v.term}</span>" in prompt )${failMark}
    </p>
  `;
 
  grid.appendChild(card);
});