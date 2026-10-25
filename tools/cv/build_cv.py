"""Builds Abdullah Mohamed's one-page ATS-safe CV (A4, Liberation Serif).

Content comes only from verified facts gathered from his GitHub profile and repos
(see content/seed.json at the repo root). Accent is pinned to the dossier brand
red #d10a11 recorded in PRODUCT.md; neutral text tones come from palette.cascade.
Regenerate with: python3 tools/cv/build_cv.py
"""

import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

REPO = Path(__file__).resolve().parents[2]
OUT = REPO / "apps" / "client" / "public" / "Abdullah-Mohamed-CV.pdf"
FONT_DIR = Path("/usr/share/fonts/truetype/liberation")

ACCENT = colors.HexColor("#d10a11")  # brand: dossier signal red (PRODUCT.md)
TEXT = colors.HexColor("#23221f")  # palette.cascade text_primary
MUTED = colors.HexColor("#6b6b72")  # palette text_muted, darkened for 10pt print legibility

pdfmetrics.registerFont(TTFont("Serif", FONT_DIR / "LiberationSerif-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Bold", FONT_DIR / "LiberationSerif-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Italic", FONT_DIR / "LiberationSerif-Italic.ttf"))
registerFontFamily("Serif", normal="Serif", bold="Serif-Bold", italic="Serif-Italic")

name_style = ParagraphStyle("Name", fontName="Serif", fontSize=25, leading=29,
                            alignment=TA_CENTER, spaceAfter=2, textColor=TEXT)
role_style = ParagraphStyle("Role", fontName="Serif", fontSize=12, leading=16,
                            alignment=TA_CENTER, spaceAfter=3, textColor=TEXT)
contact_style = ParagraphStyle("Contact", fontName="Serif", fontSize=9.5, leading=13,
                               alignment=TA_CENTER, textColor=MUTED, spaceAfter=6)
section_title_style = ParagraphStyle("SectionTitle", fontName="Serif", fontSize=12.5,
                                     leading=15, spaceBefore=13, spaceAfter=3,
                                     textColor=ACCENT)
job_title_style = ParagraphStyle("JobTitle", fontName="Serif", fontSize=11, leading=14,
                                 spaceAfter=1, textColor=TEXT)
job_meta_style = ParagraphStyle("JobMeta", fontName="Serif", fontSize=9.5, leading=12.5,
                                textColor=MUTED, spaceAfter=3)
bullet_style = ParagraphStyle("Bullet", fontName="Serif", fontSize=10, leading=14.6,
                              leftIndent=14, bulletIndent=2, spaceBefore=0.5,
                              spaceAfter=0.5, textColor=TEXT, allowWidows=0,
                              allowOrphans=0, bulletFontName="Serif")
body_style = ParagraphStyle("Body", fontName="Serif", fontSize=10, leading=14.8,
                            spaceAfter=2, textColor=TEXT, allowWidows=0, allowOrphans=0)


def section(title):
    return [
        Paragraph(f"<b>{title.upper()}</b>", section_title_style),
        HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceBefore=0, spaceAfter=5),
    ]


def entry(title, meta, bullets):
    out = [Paragraph(f"<b>{title}</b>", job_title_style),
           Paragraph(meta, job_meta_style)]
    for b in bullets:
        out.append(Paragraph(b, bullet_style, bulletText="•"))
    out.append(Spacer(1, 4))
    return out


story = [
    Paragraph("<b>ABDULLAH MOHAMED</b>", name_style),
    Paragraph("Software Engineer — Full-Stack", role_style),
    Paragraph(
        "Cairo, Egypt &nbsp;·&nbsp; abdullahmahbob07@gmail.com &nbsp;·&nbsp; "
        "github.com/AbdullahM07 &nbsp;·&nbsp; linkedin.com/in/3bs7",
        contact_style,
    ),
]

story += section("Professional Summary")
story.append(Paragraph(
    "Full-stack software engineer at Oblien (Cairo) who ships complete products rather "
    "than single layers of them — React front ends, Node.js/Express services, MongoDB and "
    "PostgreSQL data layers, Docker and CI deployment. Five systems built or co-built are "
    "running in production today, from a self-hosted deployment platform to a bilingual "
    "clinic-management workspace. Comfortable across the whole request lifecycle, including "
    "Arabic/English product surfaces.",
    body_style))

story += section("Work Experience")
story += entry(
    "Software Engineer", "Oblien — Cairo, Egypt",
    [
        "Build <b>Openship</b>, a self-hosted deployment platform in TypeScript and Docker: "
        "teams push code and it ships itself — builds, releases, rollbacks on their own "
        "hardware (openship.io).",
        "Engineer <b>ClinicAI</b>, a bilingual (Arabic/English) clinic-management workspace "
        "spanning web, admin dashboard and Expo mobile: appointments, prescriptions, finance, "
        "branches, team access, and per-clinic WhatsApp messaging via Twilio.",
        "Build <b>Mindwire</b>, an SDK that lets product teams ship AI features on "
        "production-grade agent harnesses without rebuilding the agent loop (mindwire.sh).",
    ])

story += section("Selected Independent Projects")
story += entry(
    "Masroof — Personal Finance Manager", "React · cloud sync — live at masroof-navy.vercel.app",
    [
        "Income, expenses, budgets, subscriptions, accounts and savings goals in one place, "
        "with sign-in and cross-device cloud sync.",
    ])
story += entry(
    "WatchLink — Watch-Together Platform",
    "TypeScript · WebRTC — live at watch-link-web.vercel.app",
    [
        "Real-time synchronized playback across participants, with chat, reactions, shared "
        "notes and push-to-talk voice rooms over WebRTC.",
    ])

story += section("Education")
story += entry(
    "B.Sc. Computer Science", "Suez Canal University",
    ["Graduate profile: systems, databases and software engineering coursework applied "
     "directly across shipped production systems."])

story += section("Skills")
for label, values in [
    ("Languages", "JavaScript, TypeScript, Python, SQL"),
    ("Frontend", "React, Next.js, Tailwind CSS, HTML/CSS"),
    ("Backend", "Node.js, Express, MongoDB, PostgreSQL, REST APIs"),
    ("Tooling", "Git, Docker, Linux, Vercel, GitHub Actions"),
]:
    story.append(Paragraph(f"<b>{label}:</b>&nbsp;&nbsp;{values}", body_style))

OUT.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(
    str(OUT), pagesize=A4,
    leftMargin=1.5 * cm, rightMargin=1.5 * cm, topMargin=1.5 * cm, bottomMargin=1.5 * cm,
    title="Abdullah Mohamed — Software Engineer CV",
    author="Abdullah Mohamed",
    subject="Curriculum Vitae — Software Engineer (Full-Stack), Cairo",
    creator="Abdullah Mohamed",
)
doc.build(story)
print(f"OK {OUT}")
