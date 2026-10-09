// ── Language state ──────────────────────────────────────────────
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;

  // Toggle full sections
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  // Toggle inline spans
  document.querySelectorAll('.t[data-for]').forEach(el => {
    el.classList.toggle('active', el.dataset.for === lang);
  });

  // Update lang-btn active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === 'btn-' + lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

// Init on load

const webpage_params = new URLSearchParams(window.location.search);
const lang = webpage_params.get('lang');
if (lang == null){
  setLang("fr");
}
else{
  setLang(lang);
}

// ── Send Letter ─────────────────────────────────────────────────
function sendLetter(e) {
  e.preventDefault();

  const to = "frederic.worms@ens.psl.eu";

  if (currentLang === 'fr') {
    const subject = encodeURIComponent("Lettre ouverte & revendications — Étudiant·e·s de l'ENS et de PSL, mai 2026");
    const body = encodeURIComponent(
`À l'intention du Directoire de PSL,
À l'attention du Directeur de l'ENS,

Nous sommes étudiant·e·s de l'ENS et de PSL. Nous vous écrivons dans le contexte du génocide en cours à Gaza, dans lequel nos institutions sont impliquées par leurs partenariats financiers, académiques et institutionnels.

Entre le 7 octobre 2023 et le 6 mai 2026, plus de 72 619 Palestinien·ne·s ont été tué·e·s à Gaza, 172 484 autres blessé·e·s. La famine a été déclarée. Les douze universités de Gaza ont été délibérément détruites. 745 000 étudiant·e·s ont été privés d'enseignement formel. La CIJ a ordonné des mesures conservatoires pour prévenir les actes génocidaires — mesures entièrement ignorées par Israël.

Nos institutions — par leurs chaires de recherche (Chaire Espace, Chaire Thales, Chaire AXA), leurs partenariats de laboratoires (avec le Technion, l'Université de Tel Aviv), et leurs membres de conseil (Safran, Institut Pasteur-Weizmann) — sont matériellement connectées à cette violence.

Nous exigeons donc :

1. La divulgation complète, transparente et publiquement accessible de l'ensemble des partenariats, sponsorships, chaires de recherche, investissements, accords de financement et collaborations institutionnelles de l'ENS et de PSL.

2. Le désinvestissement immédiat et la rupture de tous les liens financiers, académiques et institutionnels avec les entreprises, universités, centres de recherche et organisations complices de l'apartheid israélien, du colonialisme de peuplement, de l'occupation militaire et du génocide en cours à Gaza.

3. La suspension de tous les partenariats, programmes d'échange, accords de recherche conjoints et conventions institutionnelles avec les universités et institutions israéliennes participant à l'appareil militaro-sécuritaire israélien ou le soutenant matériellement.

4. L'exclusion des partenariats de l'ENS et de PSL des entreprises impliquées dans la fabrication d'armes, les technologies militaires, les systèmes de surveillance, le maintien de l'ordre prédictif, la militarisation des frontières ou l'infrastructure logistique permettant des crimes de guerre et des crimes contre l'humanité.

5. Le refus de toute normalisation avec les institutions complices de l'oppression, de la dépossession et de la déshumanisation des Palestinien·ne·s, sous couvert de « neutralité académique », d'« innovation » ou de « coopération internationale ».

6. La fin immédiate de toutes les intimidations, menaces disciplinaires, harcèlements administratifs et pressions psychologiques visant les étudiant·e·s mobilisé·e·s en solidarité avec la Palestine.

7. La garantie du droit des étudiant·e·s à s'organiser politiquement, à manifester, à distribuer des tracts, à tenir des assemblées, à occuper des espaces universitaires et à mener des actions collectives militantes sans répression, censure ou rétorsion institutionnelle.

8. La protection et la préservation des espaces étudiants autonomes, physiques comme symboliques, contre toute tentative de dépolitisation, de neutralisation ou de démantèlement.

9. La reconnaissance publique que les institutions académiques ne sont pas des acteurs politiquement neutres, et que les partenariats avec des industries militaires, des entreprises de surveillance et des institutions complices constituent des choix politiques aux conséquences matérielles.

10. Que l'ENS, en tant qu'institution fondatrice et symboliquement centrale au sein de PSL, utilise son poids institutionnel pour faire pression sur PSL et ses établissements membres afin qu'ils révisent, suspendent et mettent fin aux partenariats complices de violations du droit international et des droits humains des Palestinien·ne·s.

11. La mise en place d'un processus démocratique contraignant impliquant les étudiant·e·s, le personnel et les enseignant·e·s-chercheur·euse·s concernant les futurs partenariats institutionnels, les structures de financement et les collaborations.

Nous attendons une réponse substantielle et directe.

Étudiant·e·s de l'ENS et de PSL
Mai 2026`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  } else {
    const subject = encodeURIComponent("Open Letter & Demands — Students of ENS and PSL, May 2026");
    const body = encodeURIComponent(
`To the Directorate of PSL,
To the Director of ENS,

We are students of ENS and PSL. We write to you in the context of the ongoing genocide in Gaza, in which our institutions are implicated through their financial, academic, and institutional partnerships.

Between 7 October 2023 and 6 May 2026, over 72,619 Palestinians have been killed in Gaza, with 172,484 injured. Famine has been declared. All twelve of Gaza's universities have been deliberately destroyed. 745,000 students have been out of formal schooling. The ICJ has ordered provisional measures to prevent genocidal acts — measures that have been ignored entirely by Israel.

Our institutions — through their research chairs (Chaire Espace, Chaire Thales, Chaire AXA), laboratory partnerships (with the Technion, Tel Aviv University), and board memberships (Safran, Institut Pasteur-Weizmann) — are materially connected to this violence.

We therefore demand:

1. Full, transparent and publicly accessible disclosure of all ENS and PSL partnerships, sponsorships, research chairs, investments, funding agreements and institutional collaborations.

2. Immediate divestment from, and termination of, all financial, academic and institutional ties with corporations, universities, research centers and organizations complicit in Israeli apartheid, settler colonialism, military occupation and the ongoing genocide in Gaza.

3. Suspension of all partnerships, exchange programs, joint research agreements and institutional conventions with Israeli universities and institutions participating in or materially supporting the Israeli military-security apparatus and the regime of occupation and apartheid.

4. Exclusion from ENS and PSL partnerships of companies involved in arms manufacturing, military technologies, surveillance systems, predictive policing, border militarization or the logistical infrastructure enabling war crimes and crimes against humanity.

5. Refusal of normalization with institutions complicit in the oppression, dispossession and dehumanization of Palestinians under the guise of "academic neutrality," "innovation," or "international cooperation."

6. Immediate end of all intimidation, disciplinary threats, administrative harassment and psychological pressure targeting students mobilizing in solidarity with Palestine.

7. Guarantee of students' rights to organize politically, protest, leaflet, hold assemblies, occupy university spaces and engage in militant collective action without repression, censorship or institutional retaliation.

8. Protection and preservation of autonomous student spaces, both physical and symbolic, against attempts to depoliticize, neutralize or dismantle them.

9. Public recognition that academic institutions are not politically neutral actors, and that partnerships with military industries, surveillance corporations and complicit institutions constitute political choices with material consequences.

10. That ENS, as a founding and symbolically central institution within PSL, use its institutional weight to pressure PSL and its member schools to review, suspend and terminate partnerships complicit in violations of international law and Palestinian human rights.

11. Establishment of a binding democratic process involving students, staff and faculty concerning future institutional partnerships, funding structures and collaborations.

We await a substantive and direct response.

Students of ENS and PSL
May 2026`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }
}